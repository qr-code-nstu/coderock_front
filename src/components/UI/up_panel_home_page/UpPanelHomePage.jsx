import React from 'react';
import Styles from "./UpPanelHomePage.module.css";
import logoClient from '../../../Image/Logo/Polzovatel_-_zeleny.svg';
import logoWorkLinner from '../../../Image/Logo/Logotip_-_zedeny.svg';

const UpPanelHomePage = () => {

    return (
        <div className={Styles.panel}>
            <img className={Styles.logoWorkLinner} src={logoWorkLinner}/>

            <button className={Styles.buttonMain}>
                Главная
            </button>

            <button className={Styles.buttonStock}>
                Биржа
            </button>



            <img className={Styles.logoClient} src={logoClient}/>

            <div className={Styles.textName}>
                Кирилл Плешков
            </div>



            <button className={Styles.buttonExit}>
                Выход
            </button>




        </div>
    );
};

export default UpPanelHomePage;