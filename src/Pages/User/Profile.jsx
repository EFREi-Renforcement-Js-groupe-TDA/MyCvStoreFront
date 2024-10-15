import { useRequireLoggedUser } from "../../Utils/Security/AuthorizationHelper";

function Profile() {
    useRequireLoggedUser();

    return "Page de profile";
}

export default Profile;
