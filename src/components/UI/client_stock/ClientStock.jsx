import React from 'react';
import Styles from "./ClientStock.module.css";

const ClientStock = () => {
    return (
        <div>
            <h3 className={Styles.orders}>
                Список исполнителей
            </h3>
            <h3 className={Styles.categories}>
                Категории заказов
            </h3>

        </div>
    );
};

export default ClientStock;