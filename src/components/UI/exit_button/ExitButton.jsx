import React from 'react';
import Styles from './ExitButton.module.css';
import {useNavigate} from "react-router-dom";

const ExitButton = () => {

    const navigate = useNavigate();

    return (
        <button className={Styles.button} onClick={() => {navigate('/login')}}>
            Выход
        </button>
    );
};

export default ExitButton;