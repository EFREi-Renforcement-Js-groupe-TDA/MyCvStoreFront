import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext.jsx";
import { useContext } from "react";

function Header() {
    const { getUserInfos, logout } = useContext(UserContext);
    const user = getUserInfos();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to={"/"} className="navbar-brand">
                    MyCv
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <Link to={"/"} className="nav-link">
                                Voir les CV
                            </Link>
                        </li>
                        {user && (
                            <li>
                                <Link to={"/my_cv"} className="nav-link">
                                    Mes CV
                                </Link>
                            </li>
                        )}
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            {user ? (
                                <Link to={"/profile"} className="nav-link">
                                    Mon profile
                                </Link>
                            ) : (
                                <Link to={"/register"} className="nav-link">
                                    S'enregistrer
                                </Link>
                            )}
                        </li>
                        <li className="nav-item">
                            {user ? (
                                <span role="button" className="nav-link" onClick={logout}>
                                    Déconnexion
                                </span>
                            ) : (
                                <Link to={"/login"} className="nav-link">
                                    Connexion
                                </Link>
                            )}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
