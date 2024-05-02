/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { useSelector } from "react-redux";
import { Job, JobState } from "../../interfaces";
import FilterButton from "../FilterButton/FilterButton";
import "./FiltersContainer.css";

const FiltersContainer = () => {
    const { jobs } = useSelector((state: JobState) => state.jobs);
    const buttonsData = [
        {
            filter: "Roles",
            options: jobs
                .map((job: Job) => job.jobRole)
                .filter(
                    (value: string, index: number, self: string) =>
                        self.indexOf(value) === index
                ),
        },
        {
            filter: "No Of Employees",
            options: [
                "1-10",
                "11-20",
                "21-50",
                "51-100",
                "101-200",
                "201-500",
                "500+",
            ],
        },
        {
            filter: "Experience",
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
        {
            filter: "Remote",
            options: ["Remote", "Hybrid", "In-Office"],
        },
    ];

    return (
        <div className="filters-container">
            {buttonsData.map((buttonData, index) => (
                <FilterButton
                    key={index}
                    filter={buttonData.filter}
                    options={buttonData.options}
                />
            ))}
        </div>
    );
};

export default FiltersContainer;
