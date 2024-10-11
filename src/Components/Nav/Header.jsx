import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext.jsx";
import { useContext } from "react";

function Header() {
    const { getUserInfos, logout } = useContext(UserContext);
    const user = getUserInfos();

    return (
        <div>
            <ul className="nav">
                <li className="nav-item">
                    <Link to={"/welcome"} className={"nav-link"}>
                        Welcome
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={"/register"} className={"nav-link"}>
                        Register
                    </Link>
                </li>
                <li className="nav-item">
                    {user ? (
                        <div>
                            <span role="button" onClick={logout}>
                                logout
                            </span>
                        </div>
                    ) : (
                        <Link to={"/login"} className={"nav-link"}>
                            Login
                        </Link>
                    )}
                </li>
            </ul>
        </div>
    );
}

export default Header;
