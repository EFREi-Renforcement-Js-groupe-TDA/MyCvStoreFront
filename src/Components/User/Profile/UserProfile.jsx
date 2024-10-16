import { GetAuthenticatedUserId, GetAuthenticatedUserToken } from "../../../Utils/Security/AuthorizationHelper";
import { useState, useEffect } from "react";
import LoaderSpinner from "../../Misc/LoaderSpinner";
import FlashMessage from "../../FlashMessage";
import PropTypes from "prop-types";
import ProfileShow from "./DisplayMode/ProfileShow";
import ProfileEdit from "./DisplayMode/ProfileEdit";

const UserProfile = ({ isEditMode }) => {
    const userId = GetAuthenticatedUserId();
    const userToken = GetAuthenticatedUserToken();

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3003/api/user/${userId}`, {
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
            .catch((error) => {
                setError("Une erreur critique est survenue lors de la récupération des informations");
                setLoading(false);
            });
    }, [userId]);

    if (loading) {
        return <LoaderSpinner />;
    }

    if (error) {
        return <FlashMessage message={error} />;
    }

    return (
        <div className="container mt-5">
            <h1 className="mb-4">{isEditMode ? "Modifier son profil" : "Page de profil"}</h1>
            {userData && (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title mb-4">Mon profil</h5>
                        {isEditMode ? <ProfileEdit userData={userData} /> : <ProfileShow userData={userData} />}
                    </div>
                </div>
            )}
        </div>
    );
};

UserProfile.propTypes = {
    isEditMode: PropTypes.bool.isRequired,
};

export default UserProfile;
