import { ErrorMessage, Field, FieldArray } from "formik";
import PropTypes from "prop-types";

function CvFormExperienceField({ values }) {
    return (
        <FieldArray name="experience">
            {({ push, remove }) => (
                <div>
                    <h4>Expériences professionnelles</h4>
                    {values.experience.map((_, index) => (
                        <div key={index}>
                            <h5 className="mt-2">Experience {index + 1}</h5>
                            <div className="form-group">
                                <label htmlFor={`experience.${index}.compagny`}>Entreprise :</label>
                                <Field className="form-control" type="text" name={`experience.${index}.compagny`} />
                                <ErrorMessage style={{ color: "red" }} name={`experience.${index}.compagny`} component="div" />
                            </div>
                            <div className="form-group">
                                <label htmlFor={`experience.${index}.position`}>Poste :</label>
                                <Field className="form-control" type="text" name={`experience.${index}.position`} />
                                <ErrorMessage style={{ color: "red" }} name={`experience.${index}.position`} component="div" />
                            </div>
                            <div className="form-group">
                                <label htmlFor={`experience.${index}.startDate`}>Année de début :</label>
                                <Field className="form-control" type="number" name={`experience.${index}.startDate`} />
                                <ErrorMessage style={{ color: "red" }} name={`experience.${index}.startDate`} component="div" />
                            </div>
                            <div className="form-group">
                                <label htmlFor={`experience.${index}.endDate`}>Année de fin :</label>
                                <Field className="form-control" type="number" name={`experience.${index}.endDate`} />
                                <ErrorMessage style={{ color: "red" }} name={`experience.${index}.endDate`} component="div" />
                            </div>

                            <button type="button" className="btn btn-warning mt-2" onClick={() => remove(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                </svg>
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        className="btn btn-primary mt-3"
                        onClick={() =>
                            push({
                                compagny: "",
                                position: "",
                                startDate: "",
                                endDate: "",
                            })
                        }
                    >
                        Ajouter une expérience
                    </button>
                </div>
            )}
        </FieldArray>
    );
}

CvFormExperienceField.propTypes = {
    values: PropTypes.object.isRequired,
};

export default CvFormExperienceField;
