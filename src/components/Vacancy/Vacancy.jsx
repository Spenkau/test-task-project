import React from 'react';
import styles from './vacancy.module.scss'
import {CiStar} from "react-icons/ci";
import {HiOutlineLocationMarker } from "react-icons/hi";

const Vacancy = ({profession, payment_from, type_of_work, town_title}) => {
    return (
        <li className={styles.vacancy}>
            <p className={styles.profession}>{profession}</p>
            <p className={styles.extraInfo}>
                <span>з/п от {payment_from} rub</span>
                &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                {type_of_work}
            </p>
            <div className={styles.locationContainer}>
                <HiOutlineLocationMarker style={{width: "20px", height: "20px", opacity: "0.4", marginRight: "12px"}} />
                <p>{town_title}</p>
            </div>
            <button className={styles.favorite}>
                <CiStar
                    style={{width: "30px", height: "30px"}}
                />
            </button>
        </li>
    );
};

export default Vacancy;