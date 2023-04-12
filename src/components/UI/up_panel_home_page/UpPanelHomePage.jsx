import React from 'react';
import Styles from "./UpPanelHomePage.module.css";
import ExitButton from "../exit_button/ExitButton";
import logoClient from '../../../Image/Logo/Polzovatel_-_zeleny.svg';
import logoWorkLinner from '../../../Image/Logo/Logotip_-_zedeny.svg';

const UpPanelHomePage = () => {
    return (
        <div className={Styles.panel}>
            <img className={Styles.logoWorkLinner} src={logoWorkLinner}/>
            <img className={Styles.logoClient} src={logoClient}/>
            <ExitButton/>
        </div>
    );
};

export default UpPanelHomePage;