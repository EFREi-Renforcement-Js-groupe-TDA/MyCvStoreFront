import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Nav/Header";
import Register from "./Pages/Auth/Register.jsx";
import Login from "./Pages/Auth/Login.jsx";
import Profile from "./Pages/User/Profile";
import Index from "./Pages/CV/CvIndex";

function App() {
    return (
        <div className="container-fluid vh-100">
            <div className="row">
                <Header />
            </div>

            <Routes>
                {/*Index*/}
                <Route path="/" element={<Index />} />

                {/*Auth*/}
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                {/*User*/}
                <Route path={"/profile"} element={<Profile />} />
            </Routes>
        </div>
    );
}

export default App;
