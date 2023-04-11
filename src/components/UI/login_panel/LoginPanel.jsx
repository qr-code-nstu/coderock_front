import React from 'react';
import Styles from './LoginPanel.module.css'

const LoginPanel = () => {
    return (
        <div className={Styles.panel}>
            <h2 className={Styles.text1}>
                Войти в WorkLinner
            </h2>

            <input className={Styles.inputlogin}>

            </input>

            <input className={Styles.inputPass}>

            </input>

            <button className={Styles.signIn}>

            </button>

            <h3 className={Styles.text3}>
                У вас нет аккаунта на WorkLinner?
            </h3>
        </div>
    );
};

export default LoginPanel;