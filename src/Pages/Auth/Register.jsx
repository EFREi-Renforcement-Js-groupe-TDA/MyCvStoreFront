import React from "react";
import { useRequireOfflineUser } from "../../Utils/Security/AuthorizationHelper";
import RegisterForm from "../../Components/Auth/RegisterForm";
import { Link } from "react-router-dom";

function Register() {
    useRequireOfflineUser();

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-11 col-xs-11 col sm-10 col-md-8 col-lg-6">
                    <div className="card rounded-0">
                        <div className="card-header text-center">
                            <h4>Créer un compte</h4>
                        </div>
                        <div className="card-body">
                            <RegisterForm />
                        </div>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p>
                        Vous avez déjà un compte ? <Link to="/login">Connectez-vous</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Register;
