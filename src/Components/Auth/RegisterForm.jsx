import FlashMessage from "../Misc/FlashMessage";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { getApiUrl } from "../../Utils/Misc/EnvReader";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import React from "react";

const RegisterForm = () => {
    const navigate = useNavigate();
    const [flashMessage, setFlashMessage] = React.useState("");

    return (
        <>
            <FlashMessage message={flashMessage} />
            <Formik
                initialValues={{
                    email: "",
                    lastname: "",
                    firstname: "",
                    password: "",
                    confirmPassword: "",
                }}
                onSubmit={async (values) => {
                    try {
                        const response = await fetch(`${getApiUrl()}/auth/register`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(values),
                        });

                        if (response.ok) {
                            navigate("/login", { replace: true });
                        } else {
                            setFlashMessage("Erreur lors de l'inscription. Vérifiez qu'un compte avec cet email existe déjà ou que le mot de passe est conforme.");
                        }
                    } catch (error) {
                        setFlashMessage("Erreur: " + error.message);
                    }
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email("Adresse email invalide").required("Requis"),
                    lastname: Yup.string().min(2, "La longueur minimum est de 2 caractères").max(15, "La longueur maximum est de 15 caractères").required("Requis"),
                    firstname: Yup.string().max(15, "La longueur maximum est de 15 caractères").required("Requis"),
                    password: Yup.string().max(15, "Doit être de 15 caractères maximum").required("Requis"),
                    confirmPassword: Yup.string()
                        .oneOf([Yup.ref("password"), null], "Les mots de passe doivent correspondre")
                        .required("Requis"),
                })}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="email">Email :</label>
                            <Field className="form-control" type="email" name="email" />
                            <ErrorMessage style={{ color: "red" }} name="email" component="div" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Nom :</label>
                            <Field className="form-control" type="lastname" name="lastname" />
                            <ErrorMessage style={{ color: "red" }} name="lastname" component="div" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Prénom :</label>
                            <Field className="form-control" type="firstname" name="firstname" />
                            <ErrorMessage style={{ color: "red" }} name="firstname" component="div" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Mot de passe :</label>
                            <Field className="form-control" type="password" name="password" />
                            <ErrorMessage style={{ color: "red" }} name="password" component="div" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirPassword">Confirmez le mot de passe :</label>
                            <Field className="form-control" type="password" name="confirmPassword" />
                            <ErrorMessage style={{ color: "red" }} name="confirmPassword" component="div" />
                        </div>

                        <button className="btn btn-primary mt-3" type="submit" disabled={isSubmitting}>
                            S&apos;enregistrer
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default RegisterForm;
