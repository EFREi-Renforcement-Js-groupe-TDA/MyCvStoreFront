import { ErrorMessage, Field } from "formik";

function CvFormBiographyField() {
    return (
        <div className="form-group">
            <label htmlFor="biography">Biographie :</label>
            <Field className="form-control" type="text" name="biography" />
            <ErrorMessage style={{ color: "red" }} name="biography" component="div" />
        </div>
    );
}

export default CvFormBiographyField;
