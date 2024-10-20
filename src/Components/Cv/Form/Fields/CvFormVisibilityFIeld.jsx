import { ErrorMessage, Field } from "formik";

function CvFormVisibilityFIeld() {
    return (
        <div className="form-group">
            <label htmlFor="private">Visibilité :</label>
            <Field as="select" className="form-select" name="private">
                <option value={false}>Public</option>
                <option value={true}>Privé</option>
            </Field>
            <ErrorMessage style={{ color: "red" }} name="private" component="div" />
        </div>
    );
}

export default CvFormVisibilityFIeld;
