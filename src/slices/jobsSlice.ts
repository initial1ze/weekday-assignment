/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import { createSlice } from "@reduxjs/toolkit";
import { JobState } from "../interfaces";

//Initial State of Jobs in Store
const initialState: JobState = {
    jobs: [],
    jobFilters: {
        jobRole: [],
        companyName: "",
        minExp: 0,
        minJdSalary: "",
        remote: [],
    },
    offset: 0,
};

//Jobs Slice
const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        fetchJobsAction(state, action) {
            state.jobs = [...state.jobs, ...action.payload];
            state.offset++;
        },
        setJobFilters(state, action) {
            state.jobFilters = {
                ...state.jobFilters,
                ...action.payload,
            };
        },
    },
});

export const { fetchJobsAction, setJobFilters } = jobsSlice.actions;

export default jobsSlice.reducer;
