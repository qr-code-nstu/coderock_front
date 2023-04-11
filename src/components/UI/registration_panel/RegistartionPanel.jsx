import React, {useState} from 'react';
import Styles from "./RegistrationPanel.module.css";
import axios from "axios";

const RegistartionPanel = () => {

    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()

    const PostReg = () => {

        axios
            .post(`http://127.0.0.1:8000/user/login/`, {
                username: userName,
                email: email,
                password: password,
                password2: password2,
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
                Регистрация
            </h2>

            <input className={Styles.input} onChange={(e) => {setUserName(e.target.value)}}>

            </input>

            <input className={Styles.input} onChange={(e) => {setEmail(e.target.value)}}>

            </input>

            <input className={Styles.input} onChange={(e) => {setPassword(e.target.value)}}>

            </input>

            <input className={Styles.input} onChange={(e) => {setPassword2(e.target.value)}}>

            </input>

            <button className={Styles.registerBut} onClick={PostReg}>

            </button>

        </div>
    );
};

export default RegistartionPanel;