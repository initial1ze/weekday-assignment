/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Grid } from "@mui/material";
import JobsCard from "../JobsCard/JobsCard";
import "./JobsContainer.css";
import { useState } from "react";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

const JobsContainer = () => {
    const jobs = [
        {
            jdLink: "https://weekday.works",
            jdUid: "cfff359f-053c-11ef-83d3-06301d0a7178-92008",
            jobDetailsFromCompany:
                "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
            jobRole: "tech lead",
            location: "chennai",
            maxExp: null,
            maxJdSalary: null,
            minExp: null,
            minJdSalary: null,
            salaryCurrencyCode: null,
        },
    ];
    Array.from({ length: 10 }).map(() => {
        jobs.push(jobs[0]);
    });

    const [data, setData] = useState(jobs);
    const [nextOffset, setNextOffset] = useState(1);
    const [, setIsFetching, stop] = useInfiniteScroll(fetchMoreJobs);

    async function fetchMoreJobs() {
        Array.from({ length: 10 }).map(() => {
            setData((prevData) => [...prevData, jobs[0]]);
        });
        // @ts-expect-error
        setIsFetching(false);
        setNextOffset(nextOffset + 1);
        console.log("nextOffset", nextOffset);
        if (nextOffset === 3) {
            console.log("stop");
            // @ts-expect-error
            stop.current = true;
        }
    }

    return (
        <Grid container spacing={"3"} className="jobs-container-grid">
            {data.map((job, index) => (
                <>
                    <Grid item xs={12} md={6} lg={4} className="jobs-grid-item">
                        <JobsCard key={index} job={job} />
                    </Grid>
                </>
            ))}
        </Grid>
    );
};

export default JobsContainer;
