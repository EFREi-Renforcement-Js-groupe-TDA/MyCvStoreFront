import { ErrorMessage, Field, FieldArray } from "formik";
import PropTypes from "prop-types";

function CvFormSoftSkillsField({ values }) {
    return (
        <FieldArray name="softSkills">
            {({ push, remove }) => (
                <div>
                    <h4>Soft skills</h4>
                    {values.softSkills.map((_, index) => (
                        <div key={index}>
                            <div className="form-group">
                                <label htmlFor={`softSkills.${index}`}>Softskill {index + 1} :</label>
                                <Field className="form-control" type="text" name={`softSkills.${index}`} />
                                <ErrorMessage style={{ color: "red" }} name={`softSkills.${index}`} component="div" />
                            </div>
                            <button type="button" className="btn btn-warning mt-2" onClick={() => remove(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                                </svg>
                            </button>
                        </div>
                    ))}
                    <button type="button" className="btn btn-primary mt-3" onClick={() => push("")}>
                        Ajouter un softskill
                    </button>
                </div>
            )}
        </FieldArray>
    );
}

CvFormSoftSkillsField.propTypes = {
    values: PropTypes.object.isRequired,
};

export default CvFormSoftSkillsField;
