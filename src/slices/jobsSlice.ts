/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck

import { createSlice } from "@reduxjs/toolkit";
import { JobState } from "../interfaces";

const initialState: JobState = {
    jobs: [],
    filteredJobs: [],
    jobFilters: null,
    offset: 0,
};

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        fetchJobsAction(state, action) {
            state.jobs = [...state.jobs, ...action.payload];
            state.filteredJobs = state.jobs;
            if (state.jobFilters !== null) {
                if (state.jobFilters.jobRole.length > 0) {
                    state.filteredJobs = state.filteredJobs.filter((job) => {
                        return state.jobFilters.jobRole.every((role) =>
                            job.jobRole.includes(role)
                        );
                    });
                }

                if (state.jobFilters.minExp > 0) {
                    state.filteredJobs = state.filteredJobs.filter((job) => {
                        return job.minExp !== null
                            ? job.minExp >= state.jobFilters.minExp
                            : false;
                    });
                }
            }

            state.offset++;
        },
        setFilteredJobs(state, action) {
            state.filteredJobs = action.payload;
        },
        setJobFilters(state, action) {
            state.jobFilters = {
                ...state.jobFilters,
                ...action.payload,
            };
        },
    },
});

export const { fetchJobsAction, setFilteredJobs, setJobFilters } =
    jobsSlice.actions;

export default jobsSlice.reducer;
