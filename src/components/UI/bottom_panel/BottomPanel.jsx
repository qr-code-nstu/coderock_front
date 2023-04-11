import React from 'react';
import Styles from './BottomPanel.module.css'

const BottomPanel = () => {
    return (
        <div className={Styles.panel}>
            <div className='TextPos'>
                <h3 className='Text'>
                    © 2023 worklinner.ru
                </h3>
            </div>

        </div>
    );
};

export default BottomPanel;