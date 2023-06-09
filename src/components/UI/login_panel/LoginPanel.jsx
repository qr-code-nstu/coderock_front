import React, {useEffect, useState} from 'react';
import Styles from './LoginPanel.module.css'
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useCookies} from "react-cookie";

const LoginPanel = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['token', 'username']);

    const navigate = useNavigate();

    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()
    const [client, setClient] = useState(true)

    const PostLog = () => {

        axios
            .post(`http://109.174.12.7:8000/user/login/`, {
                username: userName,
                password: password,
                client: client,
            })
            .then((response) => {
                console.log(response.data.access)
                if(response.data.client === false || response.data.executor === false) {
                    navigate('/registration/additional-information')
                    setCookie('token', response.data.access, { path: '/' })
                    setCookie('username', userName, { path: '/' })
                }
                else {
                    if(response.data.client === true)
                        navigate('/client/home-page')
                    if(response.data.executor === true)
                        navigate('/executor/home-page')
                }
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

            <input className={Styles.inputlogin} onChange={(e) => {setUserName(e.target.value)}}  placeholder="   Логин или Email">

            </input>

            <input className={Styles.inputPass} onChange={(e) => {setPassword(e.target.value)}}   placeholder="   Пароль">

            </input>

            <button className={Styles.selectButton} onClick={() =>{setClient(true)}} style={{background: (client ? "#A7A5A5" : "#FFFFFF")}}>
                Я заказчик
            </button>

            <button className={Styles.selectButton} onClick={() =>{setClient(false)}} style={{background: (!client ? "#A7A5A5" : "#FFFFFF")}}>
                Я исполнитель
            </button>

            <div>
                <button className={Styles.signIn} onClick={PostLog}>
                    Войти
                </button>
            </div>

            <div className={Styles.text2}>
                У вас нет аккаунта на WorkLinner?
            </div>

            <button className={Styles.create} onClick={() => {navigate('/registration')}}>
                Создать аккаунт
            </button>

        </div>
    );
};

export default LoginPanel;