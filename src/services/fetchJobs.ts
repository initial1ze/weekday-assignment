const BASE_URI = "https://api.weekday.technology/adhoc/getSampleJdJSON";

async function fetchJobs(limit: number, offset: number): Promise<unknown> {
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
