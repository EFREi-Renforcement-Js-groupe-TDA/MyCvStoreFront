import { ErrorMessage, Field } from "formik";

function CvFormTitleField() {
    return (
        <div className="form-group">
            <label htmlFor="title">Titre :</label>
            <Field className="form-control" type="text" name="title" />
            <ErrorMessage style={{ color: "red" }} name="title" component="div" />
        </div>
    );
}

export default CvFormTitleField;
