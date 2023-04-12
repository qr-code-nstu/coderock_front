import React from 'react';
import UpPanelStartP from "../../components/UI/up_panel_StartP/UpPanelStartP";
import LoginPanel from "../../components/UI/login_panel/LoginPanel";
import BottomPanel from "../../components/UI/bottom_panel/BottomPanel";
import DopRegistrationPanel from "../../components/UI/dop_registration_panel/DopRegistrationPanel";

const DopRegistration = () => {
    return (
        <div>
            <UpPanelStartP/>
            <DopRegistrationPanel/>
            <BottomPanel/>
        </div>
    );
};

export default DopRegistration;