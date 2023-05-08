import React from 'react';
import styles from './layout.module.scss';
import {NavLink} from "react-router-dom";

function Layout(props) {
    return (
        <>
            <header>
                <div className={styles.logo}>
                    <img src="/images/Union.png" width={30} height={30} alt="logo"/>
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
                            <NavLink
                                to="/favorites"
                                className={styles.customLink}>Избранное</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            {props.children}
        </>
    )
}

export default Layout;