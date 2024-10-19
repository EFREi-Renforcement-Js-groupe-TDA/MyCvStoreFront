import { useEffect, useState } from "react";
import { getApiRoute } from "../../Utils/Route/ApiRouteBuilder.js";
import LoaderSpinner from "../../Components/Misc/LoaderSpinner.jsx";
import FlashMessage from "../../Components/Misc/FlashMessage.jsx";
import { Link } from "react-router-dom";

function Index() {
    const [cvIds, setCvIds] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(getApiRoute(`cv/getAllCvId`), {})
            .then((response) => {
                if (!response.ok) {
                    setError("Une erreur est survenue lors de la récupération des informations");
                    setLoading(false);
                }
                return response.json();
            })
            .then((data) => {
                setCvIds(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Une erreur critique est survenue lors de la récupération des informations");
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <LoaderSpinner />;
    }

    if (error) {
        return <FlashMessage message={error} />;
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Liste des CV</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title mb-4">Liste des CV</h5>
                    <ul>
                        {cvIds.map((cvId) => (
                            <li key={cvId}>
                                <Link to={`/cv/${cvId}`}>CV n°{cvId}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Index;
