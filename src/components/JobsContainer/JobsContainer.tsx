/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { Grid } from "@mui/material";
import JobsCard from "../JobsCard/JobsCard";
import "./JobsContainer.css";
import { useEffect, useRef, useState } from "react";
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
    const { jobFilters, jobs, offset } = useSelector<JobState>(
        (state: JobState) => state.jobs
    );
    const dispatch = useDispatch();
    const totalCount = useRef(0);
    const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
    const [isFetching, setIsFetching, stop] = useInfiniteScroll(fetchMoreJobs);

    // Fetch more jobs
    async function fetchMoreJobs() {
        try {
            if (totalCount.current === jobs.length) {
                stop.current = true;
                return;
            }
            const result = await fetchJobs(offset);
            const jdList = result.jdList.map((job: Job) => {
                const isRemote = job.location === "remote";
                return {
                    ...job,
                    remote: isRemote,
                };
            });
            dispatch(fetchJobsAction(jdList));
            setIsFetching(false);
        } catch (error) {
            console.error("Error fetching more jobs", error);
        }
    }

    useEffect(() => {
        async function getJobs() {
            try {
                const result = await fetchJobs(offset, 10);
                const jdList = result.jdList.map((job: Job) => {
                    const isRemote = job.location === "remote";
                    return {
                        ...job,
                        remote: isRemote,
                    };
                });
                dispatch(fetchJobsAction(jdList));
                totalCount.current = result.count;
            } catch (error) {
                console.error("Error fetching jobs", error);
            }
        }
        getJobs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        function filterJobs(job: Job) {
            return (
                (jobFilters["jobRole"].length == 0 ||
                    jobFilters["jobRole"].includes(job.jobRole)) &&
                (jobFilters["minExp"] === null ||
                    jobFilters["minExp"] <= job.minExp) &&
                (jobFilters["minJdSalary"] === null ||
                    Number(jobFilters["minJdSalary"].slice(0, -1)) <=
                        job.minJdSalary ||
                    Number(jobFilters["minJdSalary"].slice(0, -1)) <=
                        job.maxJdSalary) &&
                (jobFilters["remote"].length === 0 ||
                    (jobFilters["remote"].includes("Remote") && job.remote) ||
                    (jobFilters["remote"].includes("In-Office") &&
                        !job.remote) ||
                    (jobFilters["remote"].includes("Hybrid") && true)) &&
                (jobFilters["companyName"] === "" ||
                    job.companyName
                        .toLowerCase()
                        .includes(jobFilters["companyName"].toLowerCase()))
            );
        }

        const filteredJobs = jobs.filter(filterJobs);
        setFilteredJobs(filteredJobs);
    }, [jobFilters, jobs, offset]);

    return (
        <Grid container spacing={"3"} className="jobs-container-grid">
            {filteredJobs.map((job: Job) => (
                <Grid item xs={12} md={6} lg={4} className="jobs-grid-item">
                    <JobsCard key={job.jdUid} job={job} />
                </Grid>
            ))}
            {isFetching && (
                <div
                    style={{
                        margin: "auto",
                    }}
                >
                    Loading more jobs...
                </div>
            )}
        </Grid>
    );
};

export default JobsContainer;
