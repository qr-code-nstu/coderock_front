import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import StartPage from "./pages/start_page/StartPage";
import MainRegistration from "./pages/main_registration/MainRegistration";
import Login from "./pages/login/Login";

function App() {
    return (
        <Routes>

            <Route path="/" element={<StartPage/>}/>

            <Route path="/MainRegistration" element={<MainRegistration/>} />

            <Route path="/login" element={<Login/>} />

            <Route path="/*" element={<Navigate to={"/"}/>} />

        </Routes>

    );
}

export default App;
