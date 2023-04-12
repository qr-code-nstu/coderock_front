import React, {useEffect, useState} from 'react';
import Styles from "./DopRegistrationPanel.module.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";

const DopRegistrationPanel = () => {
    const [Name, setName] = useState()
    const [Surname, setSurname] = useState()
    const [MiddleName, setMiddleName] = useState()
    const [Phone, setPhone] = useState()
    const [Information, setInformation] = useState()

    const navigate = useNavigate();
    const [cookies] = useCookies(['token', 'username']);

    const [pathSignIn, setPathSignIn] = useState('')

    const PostReg = () => {

        const config = {
            headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + cookies.token},
        };

        axios
            .post("http://109.174.12.7:8000/" + pathSignIn + "/signin/", {
                first_name: Name,
                second_name: MiddleName,
                last_name: Surname,
                phone: Phone,
                about: Information,
            }, config)
            .then((response) => {
                navigate("/" + pathSignIn + "/home-page")
            })
            .catch((e) =>{
                console.log(e);
            });
    }

        useEffect(() => {

            const config = {
                headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + cookies.token},
            };

            axios
                .get(`http://109.174.12.7:8000/isi/`, config)
                .then((response) => {
                    if(response.data.you === "No") {
                        console.log(response.data.you)
                    }
                    else {
                        setPathSignIn(response.data.you.toLowerCase())
                    }
                })
                .catch((e) =>{
                    console.log(e);
                });
        }, [])

    return (
        <div className={Styles.panel}>
            <h2 className={Styles.text1}>
                Дополнительная информация
            </h2>

            <input className={Styles.inputName} onChange={(e) => {setName(e.target.value)}} placeholder="   Имя">

            </input>

            <input className={Styles.input} onChange={(e) => {setSurname(e.target.value)}} placeholder="   Фамилия">

            </input>

            <input className={Styles.input} onChange={(e) => {setMiddleName(e.target.value)}} placeholder="   Отчествто">

            </input>

            <input className={Styles.input} onChange={(e) => {setPhone(e.target.value)}} placeholder="   Номер телефона">

            </input>

            <input className={Styles.inputInform} onChange={(e) => {setInformation(e.target.value)}} placeholder="   Краткая информация о себе">

            </input>

            <button className={Styles.Button} onClick={PostReg}>
                Сохранить
            </button>




        </div>
    );
};

export default DopRegistrationPanel;