import React from 'react';
import styles from './layout.module.scss';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectFavorites} from "../../store/favoritesSlice";

function Layout(props) {
    const favorites = useSelector(selectFavorites);

    return (
        <>
            <header>
                <div className={styles.logo}>
                    <img src="/images/union.png" width={30} height={30} alt="logo"/>
                    <span>Jobored</span>
                </div>
                <nav>
                    <ul className={styles.pages}>
                        <li>
                            <NavLink
                                to="/"
                                className={styles.customLink}>Поиск вакансий</NavLink>
                        </li>
                        <li>
                            <NavLink to={favorites.length !== 0 ? "/favorites" : "/empty_page"} className={styles.customLink}>Избранное</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            {props.children}
        </>
    )
}

export default Layout;