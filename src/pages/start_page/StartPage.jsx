import React from 'react';
//import {useNavigate} from 'react-router-dom'
import UpPanelStartP from "../../components/UI/up_panel_StartP/UpPanelStartP";
import BottomPanel from "../../components/UI/bottom_panel/BottomPanel";



const StartPage = () => {

    //const navigate = useNavigate();


    return (
        <div>
            <UpPanelStartP/>
            <div></div>
            <BottomPanel/>
        </div>
    );
};

export default StartPage;