import React from "react";
import PropTypes from "prop-types";

const FlashMessage = ({ message, type }) => {
    if (!message) return null;

    return (
        <div className={`alert alert-${type} mt-3`} role="alert">
            {message}
        </div>
    );
};

FlashMessage.propTypes = {
    message: PropTypes.string.isRequired,
    type: PropTypes.string,
};

FlashMessage.defaultProps = {
    type: "danger",
};

export default FlashMessage;
