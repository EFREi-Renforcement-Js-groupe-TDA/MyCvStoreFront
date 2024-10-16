import { useRequireLoggedUser } from "../../Utils/Security/AuthorizationHelper";
import UserProfile from "../../Components/User/Profile/UserProfile";

function Profile() {
    useRequireLoggedUser();

    return <UserProfile isEditMode={false} />;
}

export default Profile;
