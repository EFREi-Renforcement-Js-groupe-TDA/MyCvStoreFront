import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Nav/Header";
import Register from "./Pages/Auth/Register.jsx";
import Login from "./Pages/Auth/Login.jsx";

function App() {
    return (
        <div className="container-fluid vh-100">
            <div className="row">
                <Header />
            </div>

            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
