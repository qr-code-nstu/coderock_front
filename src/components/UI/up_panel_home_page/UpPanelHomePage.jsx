import React from 'react';
import Styles from "./UpPanelHomePage.module.css";
import ExitButton from "../exit_button/ExitButton";

const UpPanelHomePage = () => {
    return (
        <div className={Styles.panel}>
            <ExitButton/>
        </div>
    );
};

export default UpPanelHomePage;