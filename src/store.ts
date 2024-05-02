import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./slices/jobsSlice";

/**
 * Store configuration
 */
export const store = configureStore({
    reducer: {
        jobs: jobsReducer,
    },
});
