import "./JobsCard.css";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

interface JobCardProps {
    job: {
        company: string;
        logo: string;
        position: string;
        location: string;
        description: string;
        referralLink: string;
    };
}

const JobsCard: React.FC<JobCardProps> = ({ job }) => {
    return (
        <Paper className="job-card" elevation={1}>
            <Box className="job-card-posted-container">
                <Box className="job-card-posted-time">
                    <Box className="job-card-posted-content">
                        <p>⌛ Posted 10 days ago</p>
                    </Box>
                </Box>
            </Box>
            <CardContent className="job-card-content">
                <Box className="job-card-header">
                    <img
                        src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1713598306546_majma.jpg"
                        alt="Company Logo"
                    />
                    <div>
                        <div className="job-card-info">
                            <h3>{job.company}</h3>
                            <h2>{job.position}</h2>
                        </div>
                        <p className="job-card-info-location">{job.location}</p>
                    </div>
                </Box>
                <Typography variant="body2" className="job-card-salary">
                    Estimated Salary: 13 - 15 LPA
                    <span aria-label="Offered salary range"> ✅</span>
                </Typography>
                <Box className="job-card-description-container">
                    <p>{job.description}</p>
                </Box>
                <Box className="job-card-description-more">
                    <a href={""} target="_blank" rel="noreferrer">
                        <strong>View Job</strong>
                    </a>
                </Box>
                <Box className="job-card-experience-container">
                    <h3>Minimum Experience</h3>
                    <h2>1 Years</h2>
                </Box>
            </CardContent>
            <Box className="job-card-footer">
                <Box className="job-card-btn-container">
                    <Button className="apply-btn job-card-footer-btn">
                        ⚡Easy Apply
                    </Button>
                    <Button className="refer-btn job-card-footer-btn">
                        Unlock referral asks
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};

export default JobsCard;
