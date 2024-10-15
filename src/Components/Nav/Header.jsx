import { Link } from "react-router-dom";
import { UserContext } from "../../Context/UserContext.jsx";
import { useContext } from "react";
import NavItem from "./NavItem";

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
                        <NavItem title={"Voir les CV"} path={"/"} />

                        {user && <NavItem title={"mon CV"} path={"/my_cv"} />}
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        {user ? <NavItem title={"Mon profile"} path={"/profile"} /> : <NavItem title={"S'enregistrer"} path={"/register"} />}
                        {user ? (
                            <li>
                                <span role="button" className="nav-link" onClick={logout}>
                                    Déconnexion
                                </span>
                            </li>
                        ) : (
                            <NavItem title={"Se connecter"} path={"/login"} />
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
