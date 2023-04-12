import React from 'react';
import Styles from './ClientMain.module.css';
import Avatar from '../../../Image/Logo/Avatarka.svg';

const ClientMain = () => {
    return (
        <div>
            <img className={Styles.avatar} src={Avatar}/>


            <h3 className={Styles.clientName}>
                Кирилл Плеш ебанная
            </h3>

            <button className={Styles.button} onClick={() => {console.log("x")}}>
                О себе
            </button>
            <button className={Styles.button} >
                Заказы
            </button>
            <button className={Styles.button} >
                Отзывы
            </button>
            <button className={Styles.button} >
                Контакты
            </button>
        </div>
    );
};

export default ClientMain;