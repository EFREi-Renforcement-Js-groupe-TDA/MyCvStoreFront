import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";

export const useRequireLoggedUser = () => {
    const { getUserInfos } = useContext(UserContext);
    const user = getUserInfos();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);
};

export const useRequireOfflineUser = () => {
    const { getUserInfos } = useContext(UserContext);
    const user = getUserInfos();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/");
        }
    }, [user, navigate]);
};
