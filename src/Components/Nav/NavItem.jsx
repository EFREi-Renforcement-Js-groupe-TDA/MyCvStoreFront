import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavItem = ({ title, path }) => {
    return (
        <li>
            <Link to={path} className="nav-link">
                {title}
            </Link>
        </li>
    );
};

NavItem.propTypes = {
    title: PropTypes.string.isRequired,
    path: PropTypes.string,
};

export default NavItem;
