import PropTypes from "prop-types";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import React from "react";
import FlashMessage from "../../../Misc/FlashMessage";
import { useNavigate } from "react-router-dom";
import { getApiRoute } from "../../../../Utils/Route/ApiRouteBuilder.js";

const ProfileEdit = ({ userData, userId, userToken }) => {
    const [flashMessage, setFlashMessage] = React.useState("");
    const navigate = useNavigate();

    const goBack = () => {
        navigate(`/profile`);
    };

    return (
        <>
            <FlashMessage message={flashMessage} />
            <Formik
                initialValues={{
                    email: userData.email,
                    lastname: userData.lastname,
                    firstname: userData.firstname,
                    password: "",
                    confirmPassword: "",
                }}
                onSubmit={async (values) => {
                    try {
                        const response = await fetch(getApiRoute(`user/${userId}`), {
                            method: "PATCH",
                            headers: {
                                Authorization: `Bearer ${userToken}`,
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(values),
                        });

                        if (response.ok) {
                            navigate("/profile");
                        } else {
                            setFlashMessage("Erreur lors de la tentative de modification du profil.");
                        }
                    } catch (error) {
                        setFlashMessage("Erreur: " + error.message);
                    }
                }}
                validationSchema={Yup.object({
                    email: Yup.string().email("Adresse email invalide").required("Requis"),
                    lastname: Yup.string().min(2, "La longueur minimum du nom est de 2 caractères").max(15, "La longueur maximum est de 15 caractères").required("Requis"),
                    firstname: Yup.string().max(15, "La longueur maximum du prénom est de 15 caractères").required("Requis"),
                    password: Yup.string().min(6, "La longueur minimum du mot de passe est de 6 caractères").max(15, "Le mot de passe ne doit pas dépasser 15 caractères"),
                    confirmPassword: Yup.string().when("password", (password, schema) => {
                        return password?.[0]?.length > 0 ? schema.oneOf([Yup.ref("password"), null], "Les mots de passe doivent correspondre").required("Requis") : schema.notRequired();
                    }),
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

                        <div className="form-group mt-5">
                            <label htmlFor="password">Changer de mot de passe :</label>
                            <Field className="form-control" type="password" name="password" />
                            <ErrorMessage style={{ color: "red" }} name="password" component="div" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="confirPassword">Confirmez le mot de passe :</label>
                            <Field className="form-control" type="password" name="confirmPassword" />
                            <ErrorMessage style={{ color: "red" }} name="confirmPassword" component="div" />
                        </div>
                        <div className="mt-3">
                            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
                                Modifier
                            </button>
                            <button className="btn btn-secondary ms-2" onClick={goBack}>
                                Retour
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>
    );
};

ProfileEdit.propTypes = {
    userData: PropTypes.object.isRequired,
    userId: PropTypes.string,
    userToken: PropTypes.string,
};

export default ProfileEdit;
