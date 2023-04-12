import React, {useEffect, useState} from 'react';
import Styles from "./DopRegistrationPanel.module.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const DopRegistrationPanel = () => {
    const [Name, setName] = useState()
    const [Surname, setSurname] = useState()
    const [MiddleName, setMiddleName] = useState()
    const [Phone, setPhone] = useState()
    const [Information, setInformation] = useState()

    const navigate = useNavigate();

    const PostReg = () => {

        axios
            .post(`http://109.174.12.7:8000/client/signin/`, {
                Name: Name,
                Surname: Surname,
                MiddleName: MiddleName,
                Phone: Phone,
                Information: Information,

            })
            .then((response) => {
                //navigate('/login')
            })
            .catch((e) =>{
                console.log(e);
            });
    }

        useEffect(() => {

            setTimeout(() => {
                axios
                    .get(`http://109.174.12.7:8000/isi/`)
                    .then((response) => {
                        if(response.data.you === "No") {

                        }
                        else {
                            console.log(response.data.you)
                        }
                    })
                    .catch((e) =>{
                        console.log(e);
                    });
            }, 500);
        })

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