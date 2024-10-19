import { ErrorMessage, Field, FieldArray } from "formik";
import PropTypes from "prop-types";

function CvFormEducationField({ values }) {
    return (
        <FieldArray name="education">
            {({ push, remove }) => (
                <div>
                    <h4>Cursus scolaire</h4>
                    {values.education.map((_, index) => (
                        <div key={index}>
                            <h5 className="mt-2">Cursus {index + 1}</h5>
                            <div className="form-group">
                                <label htmlFor={`education.${index}.school`}>École :</label>
                                <Field className="form-control" type="text" name={`education.${index}.school`} />
                                <ErrorMessage style={{ color: "red" }} name={`education.${index}.school`} component="div" />
                            </div>
                            <div className="form-group">
                                <label htmlFor={`education.${index}.formation`}>Formation :</label>
                                <Field className="form-control" type="text" name={`education.${index}.formation`} />
                                <ErrorMessage style={{ color: "red" }} name={`education.${index}.formation`} component="div" />
                            </div>
                            <div className="form-group">
                                <label htmlFor={`education.${index}.description`}>Description :</label>
                                <Field className="form-control" type="text" name={`education.${index}.description`} />
                                <ErrorMessage style={{ color: "red" }} name={`education.${index}.description`} component="div" />
                            </div>
                            <div className="form-group">
                                <label htmlFor={`education.${index}.startDate`}>Année de début :</label>
                                <Field className="form-control" type="number" name={`education.${index}.startDate`} />
                                <ErrorMessage style={{ color: "red" }} name={`education.${index}.startDate`} component="div" />
                            </div>
                            <div className="form-group">
                                <label htmlFor={`education.${index}.endDate`}>Année de fin :</label>
                                <Field className="form-control" type="number" name={`education.${index}.endDate`} />
                                <ErrorMessage style={{ color: "red" }} name={`education.${index}.endDate`} component="div" />
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
                                school: "",
                                formation: "",
                                description: "",
                                startDate: "",
                                endDate: "",
                            })
                        }
                    >
                        Ajouter un cursus
                    </button>
                </div>
            )}
        </FieldArray>
    );
}

CvFormEducationField.propTypes = {
    values: PropTypes.object.isRequired,
};

export default CvFormEducationField;
