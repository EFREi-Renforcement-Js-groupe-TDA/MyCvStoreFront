import { GetAuthenticatedUserId, GetAuthenticatedUserToken } from "../../Utils/Security/AuthorizationHelper";
import { useState, useEffect } from "react";
import LoaderSpinner from "../Misc/LoaderSpinner";
import FlashMessage from "../Misc/FlashMessage";
import { getApiRoute } from "../../Utils/Route/ApiRouteBuilder.js";
import PropTypes from "prop-types";
import MyCvViewModeEnum from "../../Enum/MyCvViewModeEnum.js";
import { Link } from "react-router-dom";
import ManageMyCv from "./MyCvDisplayMode/ManageMyCv.jsx";
import CvTemplate from "./CvTemplate.jsx";

const MyCv = ({ mode }) => {
    const userId = GetAuthenticatedUserId();
    const userToken = GetAuthenticatedUserToken();

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(getApiRoute(`user/${userId}`), {
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    setError("Une erreur est survenue lors de la récupération des informations");
                    setLoading(false);
                }
                return response.json();
            })
            .then((data) => {
                setUserData(data);
                setLoading(false);
            })
            .catch(() => {
                setError("Une erreur critique est survenue lors de la récupération des informations");
                setLoading(false);
            });
    }, [userId, userToken]);

    if (loading) {
        return <LoaderSpinner />;
    }

    if (error) {
        return <FlashMessage message={error} />;
    }

    if (!userData.cv && mode === MyCvViewModeEnum.VIEW) {
        return (
            <div className="container mt-5">
                <h1 className="mb-4">CV</h1>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title mb-4">Mon CV</h5>
                        <p>Vous n&apos;avez pas encore de CV</p>
                        <Link to="/cv/create" className="btn btn-primary">
                            Créer un CV
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    if (!userData.cv && mode === MyCvViewModeEnum.CREATE) {
        return <ManageMyCv userToken={userToken} mode={mode} />;
    }

    if (userData.cv) {
        return (
            <>
                Mon Cv
                <CvTemplate userData={userData} />
            </>
        );
    }

    return <p>ok</p>;
};

MyCv.propTypes = {
    mode: PropTypes.oneOf(Object.values(MyCvViewModeEnum)).isRequired,
};

export default MyCv;
