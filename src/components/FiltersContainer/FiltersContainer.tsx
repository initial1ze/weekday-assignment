/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { useSelector } from "react-redux";
import { Job, JobState } from "../../interfaces";
import FilterButton from "../FilterButton/FilterButton";
import "./FiltersContainer.css";
import SearchButton from "../SearchButton/SearchButton";

/**
 * Filters container component
 * @returns The filters container component
 */
const FiltersContainer = () => {
    const { jobs } = useSelector((state: JobState) => state.jobs);
    // buttonsData is an array of objects with filter and options properties
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
        {
            filter: "Minimum Base Salary",
            options: ["0L", "10L", "20L", "30L", "40L", "50L", "60L", "70L"],
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
            <SearchButton />
        </div>
    );
};

export default FiltersContainer;
