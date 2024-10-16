import PropTypes from "prop-types";

const DetailRow = ({ title, content = "N/A" }) => {
    return (
        <p className="card-text">
            <strong>{title}:</strong> {content}
        </p>
    );
};

DetailRow.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
};

export default DetailRow;
