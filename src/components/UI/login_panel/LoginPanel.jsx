import React, {useState} from 'react';
import Styles from './LoginPanel.module.css'
import {useNavigate} from "react-router-dom";
import axios from "axios";

const LoginPanel = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()

    const PostLog = () => {

        axios
            .post(`http://127.0.0.1:8000/user/login/`, {
                username: userName,
                password: password,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((e) =>{
                console.log(e);
            });

    }

    return (
        <div className={Styles.panel}>
            <h2 className={Styles.text1}>
                Войти в WorkLinner
            </h2>

            <input className={Styles.inputlogin} onChange={(e) => {setUserName(e.target.value)}}>

            </input>

            <input className={Styles.inputPass} onChange={(e) => {setPassword(e.target.value)}}>

            </input>

            <button className={Styles.signIn} onClick={PostLog}>

            </button>

            <h3 className={Styles.text3} onClick={() => {navigate('/registration')}}>
                У вас нет аккаунта на WorkLinner?
            </h3>
        </div>
    );
};

export default LoginPanel;