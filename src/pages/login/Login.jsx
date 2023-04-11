import React from 'react';
import UpPanelStartP from "../../components/UI/up_panel_StartP/UpPanelStartP";
import BottomPanel from "../../components/UI/bottom_panel/BottomPanel";
import LoginPanel from "../../components/UI/login_panel/LoginPanel";

const Login = () => {


    return (
        <div>
            <UpPanelStartP/>
            <LoginPanel/>
            <BottomPanel/>
        </div>
    );
};

export default Login;