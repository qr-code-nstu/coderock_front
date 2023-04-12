import React, {useState} from 'react';
import Styles from "./RegistrationPanel.module.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const RegistartionPanel = () => {

    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()

    const navigate = useNavigate();

    const PostReg = () => {

        axios
            .post(`http://109.174.12.7:8000/user/signin/`, {
                username: userName,
                email: email,
                password: password,
                password2: password2,
            })
            .then((response) => {
                navigate('/login')
            })
            .catch((e) =>{
                console.log(e);
            });
    }


    return (
        <div className={Styles.panel}>
            <h2 className={Styles.text1}>
                Регистрация
            </h2>

            <input className={Styles.inputlogin} onChange={(e) => {setUserName(e.target.value)}} placeholder="   Логин">

            </input>

            <input className={Styles.input} onChange={(e) => {setEmail(e.target.value)}} placeholder="   Email">

            </input>

            <input className={Styles.input} onChange={(e) => {setPassword(e.target.value)}} placeholder="   Пароль">

            </input>

            <input className={Styles.input} onChange={(e) => {setPassword2(e.target.value)}} placeholder="   Пароль">

            </input>

            <button className={Styles.registerButton} onClick={PostReg}>
                Зарегестрироваться
            </button>

        </div>
    );
};

export default RegistartionPanel;