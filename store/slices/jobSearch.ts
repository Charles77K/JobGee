import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/store/store";
import {IJobSearch} from "@/lib/types";

type IJobSearchState = Omit<IJobSearch, "user"> & {}

export interface JobItem extends IJobSearchState {
    company: string;
    url: string;
    posted_date: string;
    description: string;
}

interface JobSearchState {
    jobs: JobItem[];
}

const initialState: JobSearchState = {
    jobs: []
}

const jobSlice = createSlice({
    name: 'jobs',
    initialState,
    reducers: {
        addJob: (state, action: PayloadAction<{data: JobItem}>) => {
            // Add the new job from the nested data to the array
            state.jobs.push(action.payload.data);
        },
        clearJobSearch: () => initialState
    }
})

export const {addJob, clearJobSearch} = jobSlice.actions;
export default jobSlice.reducer;

// Selector to get all jobs
export const selectJobs = (state: RootState) => state.jobs.jobs;