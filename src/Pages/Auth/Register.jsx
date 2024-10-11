import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

function Register() {
    const navigate = useNavigate();

    return (
        <Formik
            initialValues={{
                email: "",
                lastName: "",
                firstName: "",
                password: "",
                confirmPassword: "",
            }}
            onSubmit={async (values) => {
                const postForm = await fetch("http://localhost:3003/api/auth/register", {
                    method: "POST",
                    data: values,
                });
                const data = await postForm.json();
                console.log(data);
                navigate("/");
            }}
            validationSchema={Yup.object({
                email: Yup.string().email("Adresse email invalide").required("Required"),
                lastName: Yup.string().min(2, "La longueur minimum est de 2 caractères").max(15, "La longueur maximum est de 15 caractères").required("Required"),
                firstName: Yup.string().max(15, "La longueur maximum est de 15 caractères").required("Required"),
                password: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref("password"), null], "Les mots de passe doivent correspondre")
                    .required("Required"),
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
                        <Field className="form-control" type="lastName" name="lastName" />
                        <ErrorMessage style={{ color: "red" }} name="lastName" component="div" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Prénom :</label>
                        <Field className="form-control" type="firstName" name="firstName" />
                        <ErrorMessage style={{ color: "red" }} name="firstName" component="div" />
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
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default Register;
