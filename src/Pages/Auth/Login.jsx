import React, { useContext } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { UserContext } from "../../Context/UserContext.jsx";

function Login() {
    const navigate = useNavigate();
    const { login } = useContext(UserContext);

    return (
        <Formik
            initialValues={{
                login: "",
                password: "",
            }}
            onSubmit={async (values) => {
                try {
                    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
                        method: "POST",
                        data: values,
                    });

                    if (response.status === 200 || 201) {
                        const data = await response.json();
                        login(data);
                        navigate("/", { replace: true });
                    }
                } catch (error) {
                    console.log(error.message);
                }
            }}
            validationSchema={Yup.object({
                login: Yup.string().required("Required"),
                password: Yup.string().required("Required"),
            })}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div className="form-group">
                        <label htmlFor="login">Email :</label>
                        <Field className="form-control" type="login" name="login" />
                        <ErrorMessage style={{ color: "red" }} name="login" component="div" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="login">Mot de passe :</label>
                        <Field className="form-control" type="password" name="password" />
                        <ErrorMessage style={{ color: "red" }} name="password" component="div" />
                    </div>
                    <button className="btn btn-primary mt-3" type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default Login;
