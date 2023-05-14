import React from 'react';
import styles from './emptyState.module.scss'
import {NavLink} from "react-router-dom";

const EmptyState = () => {
    return (
        <main className={styles.empty_wrapper}>
            <div className={styles.container}>
                <div className={styles.picture}></div>
                <p>Упс, здесь еще ничего нет!</p>
                <NavLink to="/" className={styles.redirect_btn}>Поиск вакансий</NavLink>
            </div>
        </main>
    );
};

export default EmptyState;