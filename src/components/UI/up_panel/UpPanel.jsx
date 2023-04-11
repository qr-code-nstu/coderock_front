import React from 'react';
import Styles from './UpPanel.module.css'
import ButtonLogin from "../button_login/ButtonLogin";

const UpPanel = () => {
    return (
        <div className={Styles.panel}>
            <ButtonLogin/>
        </div>
    );
};

export default UpPanel;