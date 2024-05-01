import { Grid } from "@mui/material";
import JobsCard from "../JobsCard/JobsCard";
import "./JobsContainer.css";
import { useEffect, useRef, useState } from "react";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import fetchJobs from "../../services/fetchJobs";
import { Job } from "../../interfaces";

const JobsContainer = () => {
    const [data, setData] = useState<Job[]>([]);
    const [nextOffset, setNextOffset] = useState(1);
    const totalCount = useRef(0);
    const [, setIsFetching, stop] = useInfiniteScroll(fetchMoreJobs);

    async function fetchMoreJobs() {
        if (totalCount.current === data.length) {
            stop.current = true;
            return;
        }
        const result = await fetchJobs(10, nextOffset);
        setData((prevData) => [...prevData, ...result.jdList]);
        setIsFetching(false);
        setNextOffset(nextOffset + 1);
    }

    useEffect(() => {
        async function getJobs() {
            const result = await fetchJobs(10, 0);
            setData(result.jdList);
            totalCount.current = result.count;
        }
        getJobs();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalCount]);

    return (
        <Grid container spacing={"3"} className="jobs-container-grid">
            {data.map((job) => (
                <Grid item xs={12} md={6} lg={4} className="jobs-grid-item">
                    <JobsCard key={job.jdUid} job={job} />
                </Grid>
            ))}
        </Grid>
    );
};

export default JobsContainer;
