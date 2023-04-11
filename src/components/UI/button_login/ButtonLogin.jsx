import React from 'react';
import Styles from './ButtonLogin.module.css'
import {useNavigate} from "react-router-dom";

const ButtonLogin = () => {
    const navigate = useNavigate();

    return (
        <button className={Styles.button} onClick={() => {navigate('/login')}}>
            Вход
        </button>
    );
};

export default ButtonLogin;
