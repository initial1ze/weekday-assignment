import { createSlice } from "@reduxjs/toolkit";
import { JobState } from "../interfaces";

const initialState: JobState = {
    jobs: [],
    offset: 0,
};

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        fetchJobsAction(state, action) {
            console.log(state);
            console.log(action.payload);
            state.jobs = [...state.jobs, ...action.payload];
            state.offset++;
        },
    },
});

export const { fetchJobsAction } = jobsSlice.actions;

export default jobsSlice.reducer;
