/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredJobs } from "../../slices/jobsSlice";

const SearchButton = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { jobs } = useSelector((state) => state.jobs);
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const filteredJobs = jobs.filter(
            (job: { jobDetailsFromCompany: string }) => {
                return job.jobDetailsFromCompany
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            }
        );
        dispatch(setFilteredJobs(filteredJobs));
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Company Name"
                size="small"
                style={{
                    fontFamily: "Lexend, sans-serif",
                }}
            />
        </form>
    );
};

export default SearchButton;
