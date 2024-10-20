import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { useRequireLoggedUser } from "../../Utils/Security/AuthorizationHelper.js";
import FlashMessage from "../Misc/FlashMessage.jsx";
import { UserContext } from "../../Context/UserContext";
import { getApiRoute } from "../../Utils/Route/ApiRouteBuilder.js";

function CvReviews({ cvId, cvReviews }) {
    const isAuthenticated = useRequireLoggedUser(false);
    const { getUserInfos } = useContext(UserContext);
    const token = getUserInfos()?.user.token;
    const [review, setReview] = useState("");
    const [reviews, setReviews] = useState(cvReviews);
    const [error, setError] = useState(null);

    const handleReviewChange = (event) => {
        setReview(event.target.value);
    };

    const handleReviewSubmit = (event) => {
        event.preventDefault();

        fetch(getApiRoute(`/review/${cvId}`), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ comment: review }),
        })
            .then((response) => {
                if (!response.ok) {
                    return response.json().then((err) => {
                        setError(err.message || "Failed to submit review");
                        return Promise.reject();
                    });
                }
                return response.json();
            })
            .then((data) => {
                setReviews([...reviews, data]);
                setReview("");
                setError(null);
            })
            .catch(() => {
                setError("Failed to submit review");
            });
    };

    return (
        <div className="container mb-4">
            <h2 className="mb-3">Commentaires</h2>
            {error && <FlashMessage message={error} />}
            <div className="reviews-list">
                {reviews.map((review, index) => (
                    <div key={index} className="mb-4">
                        <h6>
                            Envoyé par{" "}
                            <strong>
                                {review.user.firstname} {review.user.lastname}
                            </strong>
                        </h6>
                        {review.comment}
                    </div>
                ))}
            </div>
            {isAuthenticated && (
                <form onSubmit={handleReviewSubmit} className="review-form mt-3">
                    <div className="mb-3">
                        <label htmlFor="review" className="form-label">
                            Ajouter un commentaire
                        </label>
                        <textarea id="review" className="form-control" value={review} onChange={handleReviewChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Envoyer
                    </button>
                </form>
            )}
        </div>
    );
}

CvReviews.propTypes = {
    cvId: PropTypes.string.isRequired,
    cvReviews: PropTypes.array.isRequired,
};

export default CvReviews;
