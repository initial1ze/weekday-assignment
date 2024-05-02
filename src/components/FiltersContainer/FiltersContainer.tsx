import FilterButton from "../FilterButton/FilterButton";
import "./FiltersContainer.css";

const FiltersContainer = () => {
    const buttonsData = [
        {
            purpose: "Roles",
            options: [
                "Software Engineer",
                "Product Manager",
                "Data Analyst",
                "Data Scientist",
                "UX Designer",
            ],
        },
        {
            purpose: "No Of Employees",
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
            purpose: "Experience",
            options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        },
        {
            purpose: "Remote",
            options: ["Remote", "Hybrid", "In-Office"],
        },
    ];

    return (
        <div className="filters-container">
            {buttonsData.map((buttonData, index) => (
                <FilterButton
                    key={index}
                    purpose={buttonData.purpose}
                    options={buttonData.options}
                />
            ))}
        </div>
    );
};

export default FiltersContainer;
