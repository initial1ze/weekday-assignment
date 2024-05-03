/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { Grid } from "@mui/material";
import JobsCard from "../JobsCard/JobsCard";
import "./JobsContainer.css";
import { useEffect, useRef } from "react";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import fetchJobs from "../../services/fetchJobs";
import { Job, JobState } from "../../interfaces";
import { fetchJobsAction } from "../../slices/jobsSlice";
import { useSelector, useDispatch } from "react-redux";

/**
 * Jobs container component
 * @returns The jobs container component
 */
const JobsContainer = () => {
    const { filteredJobs, jobs, offset } = useSelector<JobState>(
        (state: JobState) => state.jobs
    );
    const dispatch = useDispatch();
    const totalCount = useRef(0);
    const [, setIsFetching, stop] = useInfiniteScroll(fetchMoreJobs);

    // Fetch more jobs
    async function fetchMoreJobs() {
        try {
            if (totalCount.current === jobs.length) {
                stop.current = true;
                return;
            }
            const result = await fetchJobs(offset);
            dispatch(fetchJobsAction(result.jdList));
            setIsFetching(false);
        } catch (error) {
            console.error("Error fetching more jobs", error);
        }
    }

    useEffect(() => {
        async function getJobs() {
            try {
                const result = await fetchJobs(offset);
                dispatch(fetchJobsAction(result.jdList));
                totalCount.current = result.count;
            } catch (error) {
                console.error("Error fetching jobs", error);
            }
        }
        getJobs();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Grid container spacing={"3"} className="jobs-container-grid">
            {filteredJobs.map((job: Job) => (
                <Grid item xs={12} md={6} lg={4} className="jobs-grid-item">
                    <JobsCard key={job.jdUid} job={job} />
                </Grid>
            ))}
        </Grid>
    );
};

export default JobsContainer;
