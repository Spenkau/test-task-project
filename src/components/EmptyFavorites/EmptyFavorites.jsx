import React from 'react';
import styles from './emptyFavorites.module.scss'

const EmptyFavorites = () => {
    return (
        <div className={styles.container}>
            <div className={styles.picture}></div>
            <p>Упс, здесь еще ничего нет!</p>
            <button>Поиск вакансий</button>
        </div>
    );
};

export default EmptyFavorites;