import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CvCard({ cvData }) {
    return (
        <Link to={`/cv/${cvData.id}`} className="text-decoration-none hover">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title mb-3">
                        {cvData.user.firstname} {cvData.user.lastname}
                    </h5>
                    <p>{cvData.title}</p>
                </div>
            </div>
        </Link>
    );
}

CvCard.propTypes = {
    cvData: PropTypes.object.isRequired,
};

export default CvCard;
