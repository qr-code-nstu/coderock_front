import React from 'react';
import Styles from './UpPanelStartP.module.css'
import ButtonLogin from "../button_login/ButtonLogin";

const UpPanelStartP = () => {
    return (
        <div className={Styles.panel}>
            <ButtonLogin/>
        </div>
    );
};

export default UpPanelStartP;