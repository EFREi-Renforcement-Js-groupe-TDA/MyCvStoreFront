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

    return !!user;
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

export const GetAuthenticatedUserId = () => {
    const { getUserInfos } = useContext(UserContext);
    const userInfos = getUserInfos();

    return userInfos ? userInfos.user.id : null;
};

export const GetAuthenticatedUserToken = () => {
    const { getUserInfos } = useContext(UserContext);
    const userInfos = getUserInfos();

    return userInfos ? userInfos.user.token : null;
};
