import React from 'react';
import styles from './vacancy.module.scss'

const Vacancy = () => {
    return (
        <li className={styles.vacancy}>
            <p className={styles.profession}>/Менеджер-дизайнер</p>
            <p className={styles.extraInfo}>
                <span>з/п от 70000 rub</span>
                &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                Полный рабочий день
            </p>
            <div className={styles.locationContainer}>
                <img src="/images/location.png" alt="location"/>
                <p>Новый Уренгой</p>
            </div>
            <button className={styles.favorite}>
                <img src="/images/favorite.png" alt="handle favorite"/>
            </button>
        </li>
    );
};

export default Vacancy;