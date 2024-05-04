/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setJobFilters } from "../../slices/jobsSlice";

/**
 * Search button component
 * @returns The search button component
 */
const SearchButton = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { jobFilters } = useSelector((state) => state.jobs);
    const dispatch = useDispatch();

    return (
        <TextField
            value={searchTerm}
            onChange={(e) => {
                setSearchTerm(e.target.value);
                const newJobFilters = {
                    ...jobFilters,
                    companyName: e.target.value,
                };
                dispatch(setJobFilters(newJobFilters));
            }}
            placeholder="Search Company Name"
            size="small"
            style={{
                fontFamily: "Lexend, sans-serif",
            }}
        />
    );
};

export default SearchButton;
