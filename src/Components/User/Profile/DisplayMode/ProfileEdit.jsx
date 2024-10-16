import PropTypes from "prop-types";
import ProfileShow from "./ProfileShow";

const ProfileEdit = ({ userData }) => {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email
                </label>
                <input type="email" className="form-control" id="email" defaultValue={userData.email} />
            </div>
            <div className="mb-3">
                <label htmlFor="lastname" className="form-label">
                    Nom
                </label>
                <input type="text" className="form-control" id="lastname" defaultValue={userData.lastname} />
            </div>
            <div className="mb-3">
                <label htmlFor="firstname" className="form-label">
                    Prénom
                </label>
                <input type="text" className="form-control" id="firstname" defaultValue={userData.firstname} />
            </div>
            <button type="submit" className="btn btn-primary">
                Save
            </button>
        </form>
    );
};

ProfileShow.propTypes = {
    userData: PropTypes.object.isRequired,
};

export default ProfileEdit;
