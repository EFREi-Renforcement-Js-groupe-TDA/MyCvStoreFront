import { Route, Routes } from "react-router-dom";
import Header from "./Components/Nav/Header";
import Register from "./Pages/Auth/Register.jsx";
import Login from "./Pages/Auth/Login.jsx";
import Profile from "./Pages/User/Profile";
import Index from "./Pages/Cv/CvIndex";
import EditProfile from "./Pages/User/EditProfile";
import DisclaimerPopup from "./Components/Misc/DisclaimerPopup.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowMyCv from "./Pages/Cv/ShowMyCv.jsx";
import MyCvViewModeEnum from "./Enum/MyCvViewModeEnum.js";
import ShowCv from "./Pages/Cv/ShowCv.jsx";

function App() {
    return (
        <div className="container-fluid vh-100">
            <div className="row">
                <Header />
            </div>

            <DisclaimerPopup />

            <Routes>
                {/*Index*/}
                <Route path="/" element={<Index />} />

                {/*Auth*/}
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                {/*User*/}
                <Route path={"/profile"} element={<Profile />} />
                <Route path={"/profile/edit"} element={<EditProfile />} />

                {/*Cv*/}
                <Route path={"/my-cv"} element={<ShowMyCv mode={MyCvViewModeEnum.VIEW} />} />
                <Route path={"/cv/edit"} element={<ShowMyCv mode={MyCvViewModeEnum.EDIT} />} />
                <Route path={"/cv/create"} element={<ShowMyCv mode={MyCvViewModeEnum.CREATE} />} />
                <Route path={"/cv/:cvId"} element={<ShowCv />} />
            </Routes>
        </div>
    );
}

export default App;
