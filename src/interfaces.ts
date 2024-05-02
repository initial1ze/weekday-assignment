interface Job {
    jdLink: string;
    jdUid: string;
    jobDetailsFromCompany: string;
    jobRole: string;
    location: string;
    maxExp: number | null;
    maxJdSalary: number | null;
    minExp: number | null;
    minJdSalary: number | null;
    salaryCurrencyCode: string | null;
}

interface JobCardProps {
    job: Job;
}

interface ApiResult {
    jdList: Job[];
    count: number;
}

interface JobFilters {
    jobRole: string[];
    companyName: string;
    location: string[];
    minExp: number;
    minJdSalary: number[];
    remote: boolean;
}

interface JobState {
    jobs: Job[];
    filteredJobs: Job[];
    offset: number;
    jobFilters: JobFilters | null;
}

export type { Job, JobCardProps, ApiResult, JobState };
