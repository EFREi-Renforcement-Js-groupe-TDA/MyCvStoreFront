import PropTypes from "prop-types";
import CvForm from "../Form/CvForm.jsx";
import MyCvViewModeEnum from "../../../Enum/MyCvViewModeEnum.js";

function ManageMyCv({ userToken, mode, cvData = null }) {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-11 col-xs-11 col sm-10 col-md-8 col-lg-6">
                    <div className="card rounded-0 mb-4">
                        <div className="card-header text-center">
                            <h4>{mode === MyCvViewModeEnum.EDIT ? "Modifier un CV" : "Créer un CV"}</h4>
                        </div>
                        <div className="card-body">
                            <CvForm userToken={userToken} mode={mode} cvData={cvData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ManageMyCv.propTypes = {
    userToken: PropTypes.string.isRequired,
    mode: PropTypes.oneOf(Object.values(MyCvViewModeEnum)).isRequired,
    cvData: PropTypes.object,
};

export default ManageMyCv;
