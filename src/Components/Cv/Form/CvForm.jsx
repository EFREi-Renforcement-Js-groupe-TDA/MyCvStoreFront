import React from "react";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { getApiRoute } from "../../../Utils/Route/ApiRouteBuilder.js";
import FlashMessage from "../../Misc/FlashMessage.jsx";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import MyCvViewModeEnum from "../../../Enum/MyCvViewModeEnum.js";
import CvFormTitleField from "./Fields/CvFormTitleField.jsx";
import CvFormBiographyField from "./Fields/CvFormBiographyField.jsx";
import CvFormPhoneField from "./Fields/CvFormPhoneField.jsx";
import CvFormLinkedinField from "./Fields/CvFormLinkedinField.jsx";
import CvFormSkillsField from "./Fields/CvFormSkillsField.jsx";
import CvFormSoftSkillsField from "./Fields/CvFormSoftSkillsField.jsx";
import CvFormLanguagesField from "./Fields/CvFormLanguagesField.jsx";
import CvFormEducationField from "./Fields/CvFormEducationField.jsx";
import CvFormExperienceField from "./Fields/CvFormExperienceField.jsx";
import CvFormVisibilityFIeld from "./Fields/CvFormVisibilityFIeld.jsx";

function CvForm({ userToken, mode, cvData = null }) {
    const navigate = useNavigate();
    const [flashMessage, setFlashMessage] = React.useState("");
    let endpoint;
    let requestMethod;
    if (cvData && mode === MyCvViewModeEnum.EDIT) {
        endpoint = getApiRoute(`cv/update/${cvData._id}`);
        requestMethod = "PATCH";
    } else if (mode === MyCvViewModeEnum.CREATE) {
        endpoint = getApiRoute(`cv/createCv`);
        requestMethod = "POST";
    }

    if (!endpoint || !requestMethod) {
        return null;
    }

    return (
        <>
            <FlashMessage message={flashMessage} />
            <Formik
                initialValues={{
                    title: cvData ? cvData.title : "",
                    biography: cvData ? cvData.biography : "",
                    telephone: cvData ? cvData.telephone : "",
                    linkedin: cvData ? cvData.linkedin : "",
                    skills: cvData ? cvData.skills : [""],
                    softSkills: cvData ? cvData.softSkills : [""],
                    language: cvData ? cvData.language : [""],
                    education: cvData ? cvData.education : [{ school: "", formation: "", description: "", startDate: "", endDate: "" }],
                    experience: cvData ? cvData.experience : [{ compagny: "", position: "", startDate: "", endDate: "" }],
                    private: cvData ? cvData.private : false,
                }}
                onSubmit={async (values) => {
                    try {
                        console.log(values);

                        const response = await fetch(endpoint, {
                            method: requestMethod,
                            headers: {
                                Authorization: `Bearer ${userToken}`,
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(values),
                        });

                        if (response.ok) {
                            navigate("/");
                        } else {
                            setFlashMessage("Erreur lors de la submission du formulaire.");
                        }
                    } catch (error) {
                        setFlashMessage("Erreur : " + error.message);
                    }
                }}
                validationSchema={Yup.object({
                    title: Yup.string().required("Requis"),
                    biography: Yup.string().required("Requis"),
                    telephone: Yup.string().required("Requis"),
                    linkedin: Yup.string(),
                    skills: Yup.array().of(Yup.string().required("Requis")),
                    softSkills: Yup.array().of(Yup.string().required("Requis")),
                    language: Yup.array().of(Yup.string().required("Requis")),
                    education: Yup.array().of(
                        Yup.object().shape({
                            school: Yup.string().required("Requis"),
                            formation: Yup.string().required("Requis"),
                            description: Yup.string(),
                            startDate: Yup.number().required("Requis"),
                            endDate: Yup.number().required("Requis"),
                        }),
                    ),
                    experience: Yup.array().of(
                        Yup.object().shape({
                            compagny: Yup.string().required("Requis"),
                            position: Yup.string().required("Requis"),
                            startDate: Yup.number().required("Requis"),
                            endDate: Yup.number().required("Requis"),
                        }),
                    ),
                    private: Yup.boolean(),
                })}
            >
                {({ isSubmitting, values }) => (
                    <Form>
                        <CvFormTitleField />
                        <CvFormBiographyField />
                        <CvFormPhoneField />
                        <CvFormLinkedinField />
                        <hr />
                        <CvFormSkillsField values={values} />
                        <hr />
                        <CvFormSoftSkillsField values={values} />
                        <hr />
                        <CvFormLanguagesField values={values} />
                        <hr />
                        <CvFormEducationField values={values} />
                        <hr />
                        <CvFormExperienceField values={values} />
                        <hr />
                        <CvFormVisibilityFIeld />

                        <button className="btn btn-primary mt-5" type="submit" disabled={isSubmitting}>
                            Enregistrer
                        </button>
                    </Form>
                )}
            </Formik>
        </>
    );
}

CvForm.propTypes = {
    userToken: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(Object.values(MyCvViewModeEnum)).isRequired,
    cvData: PropTypes.object,
};

export default CvForm;
