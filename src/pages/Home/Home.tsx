import FiltersContainer from "../../components/FiltersContainer/FiltersContainer";
import JobsContainer from "../../components/JobsContainer/JobsContainer";

/**
 * Home page component
 * @returns The home page component
 */
const Home = () => {
    return (
        <>
            <FiltersContainer />
            <JobsContainer />
        </>
    );
};

export default Home;
