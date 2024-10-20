import { ErrorMessage, Field } from "formik";

function CvFormLinkedinField() {
    return (
        <div className="form-group">
            <label htmlFor="linkedin">LinkedIn :</label>
            <Field className="form-control" type="text" name="linkedin" />
            <ErrorMessage style={{ color: "red" }} name="linkedin" component="div" />
        </div>
    );
}

export default CvFormLinkedinField;
