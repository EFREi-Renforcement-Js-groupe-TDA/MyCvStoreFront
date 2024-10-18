import { Link } from "react-router-dom";
import { useRequireOfflineUser } from "../../Utils/Security/AuthorizationHelper";
import LoginForm from "../../Components/Auth/LoginForm";

function Login() {
    useRequireOfflineUser();

    return (
        <div className="row justify-content-center">
            <div className="col-11 col-xs-11 col-sm-10 col-md-8 col-lg-6 mt-5">
                <div className="card rounded-0">
                    <div className="card-header text-center">
                        <h4>Connexion</h4>
                    </div>
                    <div className="card-body">
                        <LoginForm />
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p>
                        Vous n&apos;avez pas de compte ? <Link to="/register">Inscrivez-vous</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
