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

async function fetchJobs(limit: number, offset: number): Promise<Job[]> {
    const BASE_URI = "https://api.weekday.technology/adhoc/getSampleJdJSON";

    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = JSON.stringify({
        limit,
        offset,
    });

    const requestOptions: RequestInit = {
        method: "POST",
        headers,
        body,
    };

    const response = await fetch(BASE_URI, requestOptions);
    const result = await response.json();

    return result;
}

export default fetchJobs;
