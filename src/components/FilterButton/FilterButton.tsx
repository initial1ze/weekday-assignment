/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import "./FilterButton.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredJobs, setJobFilters } from "../../slices/jobsSlice";
import { Job } from "../../interfaces";

const FilterButton = ({ filter, options }) => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
    const dispatch = useDispatch();
    const { jobFilters, jobs } = useSelector((state) => state.jobs);
    useEffect(() => {
        if (selectedOptions.length) {
            const filteredJobs = jobs.filter((job: Job) => {
                return selectedOptions.every((option) =>
                    job.jobRole.includes(option)
                );
            });

            dispatch(setFilteredJobs(filteredJobs));
            dispatch(
                setJobFilters({ ...jobFilters, jobRole: selectedOptions })
            );
        } else {
            dispatch(setFilteredJobs(jobs));
            dispatch(setJobFilters({ ...jobFilters, jobRole: [] }));
        }
    }, [selectedOptions]);

    return (
        <Box className="filter-btn">
            {selectedOptions.length ? (
                <Typography variant="body1" className="filter-btn-title">
                    {filter}
                </Typography>
            ) : null}
            <Autocomplete
                style={{
                    minWidth: "200px",
                }}
                size="small"
                multiple={filter === "Experience" ? false : true}
                options={options}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder={selectedOptions.length ? "" : filter}
                        style={{
                            padding: "0rem",
                        }}
                    />
                )}
                onChange={(event, value: string[]) => {
                    setSelectedOptions(value);
                }}
            />
        </Box>
    );
};

export default FilterButton;
