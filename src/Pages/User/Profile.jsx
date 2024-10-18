import { useRequireLoggedUser } from "../../Utils/Security/AuthorizationHelper";
import UserProfile from "../../Components/User/Profile/UserProfile";

function Profile() {
    const isAuthenticated = useRequireLoggedUser();

    if (!isAuthenticated) {
        return;
    }

    return <UserProfile isEditMode={false} />;
}

export default Profile;
