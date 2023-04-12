import React from 'react';
//import {useNavigate} from 'react-router-dom'
import UpPanelStartP from "../../components/UI/up_panel_StartP/UpPanelStartP";
import BottomPanel from "../../components/UI/bottom_panel/BottomPanel";
import MainPanelStartP from "../../components/UI/main_panel_StartP/MainPanelStartP";



const StartPage = () => {


    return (
        <div>
            <UpPanelStartP/>
            <MainPanelStartP/>
            <BottomPanel/>
        </div>
    );
};

export default StartPage;