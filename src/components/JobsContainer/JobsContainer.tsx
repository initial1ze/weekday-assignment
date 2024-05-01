import { Grid } from "@mui/material";
import JobsCard from "../JobsCard/JobsCard";
import "./JobsContainer.css";

const JobsContainer = () => {
    const jobs = [
        {
            company: "ABC Company",
            logo: "path/to/logo.png",
            position: "Software Engineer",
            location: "India",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            referralLink: "https://example.com/referral-link",
        },
        {
            company: "ABC Company",
            logo: "path/to/logo.png",
            position: "Software Engineer",
            location: "India",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            referralLink: "https://example.com/referral-link",
        },
        {
            company: "ABC Company",
            logo: "path/to/logo.png",
            position: "Software Engineer",
            location: "India",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            referralLink: "https://example.com/referral-link",
        },
    ];
    return (
        <Grid container spacing={"3"} className="jobs-container">
            <Grid item className="jobs-header">
                <Grid
                    item
                    // xs={12}
                    // sm={6}
                    // md={4}
                    // lg={3}
                    // className="jobs-container"
                >
                    {jobs.map((job, index) => (
                        <JobsCard key={index} job={job} />
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default JobsContainer;
