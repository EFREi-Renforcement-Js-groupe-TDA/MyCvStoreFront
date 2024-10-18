import { useRequireLoggedUser } from "../../Utils/Security/AuthorizationHelper";
import UserProfile from "../../Components/User/Profile/UserProfile";

function EditProfile() {
    const isAuthenticated = useRequireLoggedUser();

    if (!isAuthenticated) {
        return;
    }

    return <UserProfile isEditMode={true} />;
}

export default EditProfile;
