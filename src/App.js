import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import StartPage from "./pages/start_page/StartPage";
import Registration from "./pages/registration/Registration";
import Login from "./pages/login/Login";
import DopRegistration from "./pages/dop_registration/DopRegistration";
import ClientHomePage from "./pages/client_home_page/ClientHomePage";
import ExecutorHomePage from "./pages/executor_home_page/ExecutorHomePage";

function App() {
    return (
        <Routes>

            <Route path="/" element={<StartPage/>}/>

            <Route path="/registration" element={<Registration/>} >

            </Route >

            <Route path="/registration/additional-information" element={<DopRegistration/>} />

            <Route path="/client/home-page" element={<ClientHomePage/>} />

            <Route path="/executor/home-page" element={<ExecutorHomePage/>} />

            <Route path="/login" element={<Login/>} />

            <Route path="/*" element={<Navigate to={"/"}/>} />

        </Routes>

    );
}

export default App;
