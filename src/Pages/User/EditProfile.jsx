import { useRequireLoggedUser } from "../../Utils/Security/AuthorizationHelper";
import UserProfile from "../../Components/User/Profile/UserProfile";

function EditProfile() {
    useRequireLoggedUser();

    return <UserProfile isEditMode={true} />;
}

export default EditProfile;
