import "./JobsCard.css";
import Paper from "@mui/material/Paper";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React from "react";
import { JobCardProps } from "../../interfaces";

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
                            <h3>ABC Company</h3>
                            <h2>{job.jobRole || "Role Not Specified"}</h2>
                        </div>
                        <p className="job-card-info-location">
                            {job.location || "Location Not Specified"}
                        </p>
                    </div>
                </Box>
                <Typography variant="body2" className="job-card-salary">
                    {job.minJdSalary || job.maxJdSalary ? (
                        <>
                            {"Estimated Salary: "}
                            {job.minJdSalary ? `${job.minJdSalary} - ` : null}
                            {job.maxJdSalary ? job.maxJdSalary : null}{" "}
                            {job.salaryCurrencyCode || "USD"}
                            <span aria-label="Offered salary range"> ✅</span>
                        </>
                    ) : (
                        "Salary Not Specified"
                    )}
                </Typography>
                <Box className="job-card-description-container">
                    <Typography variant="body1" className="job-card-about">
                        About Company
                    </Typography>
                    <p>
                        {job.jobDetailsFromCompany || "Details Not Specified"}
                    </p>
                </Box>
                <Box className="job-card-description-more">
                    <a href={job.jdLink} target="_blank" rel="noreferrer">
                        View Job
                    </a>
                </Box>
                <Box className="job-card-experience-container">
                    <h3>Minimum Experience</h3>
                    <h2>
                        {job.minExp ? `${job.minExp} years` : " Not Specified"}
                    </h2>
                </Box>
            </CardContent>
            <Box className="job-card-footer">
                <Box className="job-card-btn-container">
                    <Button
                        className="apply-btn job-card-footer-btn"
                        href={job.jdLink || ""}
                        target="_blank"
                        rel="noreferrer"
                        type="button"
                    >
                        ⚡Easy Apply
                    </Button>
                    <Button
                        className="refer-btn job-card-footer-btn"
                        href=""
                        target="_blank"
                        rel="noreferrer"
                        type="button"
                    >
                        Unlock referral asks
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
};

export default JobsCard;
