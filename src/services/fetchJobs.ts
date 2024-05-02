import { ApiResult } from "../interfaces";
/**
 * Fetches jobs from the API
 * @param limit - The number of jobs to fetch
 * @param offset - The offset for the jobs
 * @returns The API result
 */
async function fetchJobs(limit: number, offset: number): Promise<ApiResult> {
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
