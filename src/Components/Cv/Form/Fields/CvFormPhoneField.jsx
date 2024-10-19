import { ErrorMessage, Field } from "formik";

function CvFormPhoneField() {
    return (
        <div className="form-group">
            <label htmlFor="telephone">Numéro de téléphone :</label>
            <Field className="form-control" type="text" name="telephone" />
            <ErrorMessage style={{ color: "red" }} name="telephone" component="div" />
        </div>
    );
}

export default CvFormPhoneField;
