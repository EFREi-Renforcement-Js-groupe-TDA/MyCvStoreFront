import { GetAuthenticatedUserId, GetAuthenticatedUserToken, useRequireLoggedUser } from "../../Utils/Security/AuthorizationHelper";
import { useState } from "react";

function Profile() {
    useRequireLoggedUser();

    const userId = GetAuthenticatedUserId();

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    fetch(`http://localhost:3003/api/user/${userId}`, {
        headers: {
            Authorization: `Bearer ${GetAuthenticatedUserToken()}`,
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

    if (loading) {
        return <div>Chargement en cours...</div>;
    }

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    return (
        <div>
            <h1>Profile Page</h1>
            {userData && (
                <div>
                    <p>Email : {userData.email}</p>
                    <p>Nom : {userData.lastname}</p>
                    <p>Prénom : {userData.firstname}</p>
                </div>
            )}
        </div>
    );
}

export default Profile;
