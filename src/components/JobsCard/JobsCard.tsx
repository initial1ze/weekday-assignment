import "./JobsCard.css";

const JobsCard = () => {
    return (
        <div className="jobs-card">
            <p> ⌛ Posted 10 days ago</p>
            <div>
                <p>Company Name</p>
                <p>Job Title</p>
                <p>Location</p>
            </div>
            <p>Estimated Slary: $18 - 35 LPA</p>
            <div>
                <h3>About Company</h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsum eum quam beatae, labore, nihil aspernatur, suscipit
                    assumenda pariatur praesentium tempore enim nobis
                    accusantium quo ex. Aliquam maiores earum a modi!
                </p>
                <button>View Job</button>
            </div>
            <p>Minimum Experience</p>
            <p>3 years</p>
            <div className="jobs-card-footer">
                <button>Easy Apply</button>
                <button>Unlock referal ask</button>
            </div>
        </div>
    );
};

export default JobsCard;
