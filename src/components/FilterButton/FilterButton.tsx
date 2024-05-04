/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { Autocomplete, Box, TextField } from "@mui/material";
import "./FilterButton.css";
import { useDispatch, useSelector } from "react-redux";
import { setJobFilters } from "../../slices/jobsSlice";

/**
 * Filter button component
 * @param filter - The filter to apply
 * @param options - The options to display
 * @returns The filter button component
 */
const FilterButton = ({ filter, options }) => {
    const dispatch = useDispatch();
    const { jobFilters } = useSelector((state) => state.jobs);

    const filterNameToValue = Object.freeze({
        Experience: "minExp",
        Roles: "jobRole",
        Company: "companyName",
        Remote: "remote",
        "Minimum Base Salary": "minJdSalary",
    });
    const filterName = filterNameToValue[filter];

    return (
        <Box className="filter-btn">
            <Autocomplete
                style={{
                    minWidth: "200px",
                }}
                size="small"
                multiple={
                    filter === "Experience" || filter === "Minimum Base Salary"
                        ? false
                        : true
                }
                options={options}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        placeholder={filter}
                        style={{
                            padding: "0rem",
                        }}
                    />
                )}
                getOptionLabel={(option) => String(option)}
                onChange={(event, value: string[]) => {
                    const newJobFilters = {
                        ...jobFilters,
                        [filterName]: value,
                    };
                    dispatch(setJobFilters(newJobFilters));
                }}
            />
        </Box>
    );
};

export default FilterButton;
