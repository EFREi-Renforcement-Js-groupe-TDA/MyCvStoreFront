import { getApiRoute } from "../Route/ApiRouteBuilder.js";

export const deleteCv = async (userToken, cvId) => {
    if (!window.confirm("Êtes vous sûr de vouloir supprimer votre CV ?")) {
        return;
    }

    try {
        await fetch(getApiRoute(`cv/${cvId}`), {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${userToken}`,
            },
        });
    } catch (error) {
        console.error("An error occurred while deleting the CV:", error);
    }
};
