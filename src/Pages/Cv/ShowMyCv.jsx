import { useRequireLoggedUser } from "../../Utils/Security/AuthorizationHelper.js";
import MyCv from "../../Components/Cv/MyCv.jsx";
import PropTypes from "prop-types";
import MyCvViewModeEnum from "../../Enum/MyCvViewModeEnum.js";

function ShowMyCv({ mode }) {
    const isAuthenticated = useRequireLoggedUser();

    if (!isAuthenticated) {
        return;
    }

    return <MyCv mode={mode} />;
}

ShowMyCv.propTypes = {
    mode: PropTypes.oneOf(Object.values(MyCvViewModeEnum)).isRequired,
};

export default ShowMyCv;
