import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import StartPage from "./pages/start_page/StartPage";
import MainRegistration from "./pages/main_registration/MainRegistration";

function App() {
    return (
        <Routes>

            <Route path="/" element={<StartPage/>}/>

            <Route path="/MainRegistration" element={<MainRegistration/>} />

            <Route path="/login" element={<div>Login</div>} />

            <Route path="/*" element={<Navigate to={"/"}/>} />

        </Routes>

    );
}

export default App;
