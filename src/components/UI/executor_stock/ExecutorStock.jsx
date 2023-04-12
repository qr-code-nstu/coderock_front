import React from 'react';
import Styles from "../client_stock/ClientStock.module.css";

const ExecutorStock = () => {
    return (
        <div>

            <h3 className={Styles.orders}>
                Список действительных заказов
            </h3>
            <h3 className={Styles.categories}>
                Категории заказов
            </h3>

        </div>
    );
};

export default ExecutorStock;