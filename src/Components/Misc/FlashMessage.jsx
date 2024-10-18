import PropTypes from "prop-types";

const FlashMessage = ({ message, type = "danger" }) => {
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

export default FlashMessage;
