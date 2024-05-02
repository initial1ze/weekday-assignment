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

interface JobState {
    jobs: Job[];
    offset: number;
}

export type { Job, JobCardProps, ApiResult, JobState };
