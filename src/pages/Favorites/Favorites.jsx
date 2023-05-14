import React from 'react';
import Vacancy from "../../components/Vacancy/Vacancy";
import {useSelector} from "react-redux";
import {selectFavorites} from "../../store/favoritesSlice";
import {useLocation} from "react-router-dom";

const Favorites = () => {
    const favorites = useSelector(selectFavorites)

    return (
        <main>
            <ul className="favorites">
                {
                    favorites.map(item =>
                        <Vacancy profession={item.profession} payment_from={item.payment_from} payment_to={item.payment_to} type_of_work={item.type_of_work} town_title={item.town_title} id={item.id}/>
                    )
                }
            </ul>
        </main>
    );
};

export default Favorites;