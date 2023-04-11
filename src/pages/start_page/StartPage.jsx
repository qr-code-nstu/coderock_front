import React from 'react';
import {useNavigate} from 'react-router-dom'
import UpPanel from "../../components/UI/up_panel/UpPanel";
import BottomPanel from "../../components/UI/bottom_panel/BottomPanel";


const StartPage = () => {

    const navigate = useNavigate();


    return (
        <div>
            <UpPanel/>
            <div></div>
            <BottomPanel/>
        </div>
    );
};

export default StartPage;