import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import StartPage from "./pages/start_page/StartPage";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";

function App() {
    return (
        <Routes>

            <Route path="/" element={<StartPage/>}/>

            <Route path="/Registration" element={<Registration/>} />

            <Route path="/login" element={<Login/>} />

            <Route path="/*" element={<Navigate to={"/"}/>} />

        </Routes>

    );
}

export default App;
