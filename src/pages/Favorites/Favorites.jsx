import React from 'react';
import Vacancy from "../../components/Vacancy/Vacancy";
import {useSelector} from "react-redux";
import {selectFavorites} from "../../store/favoritesSlice";
import {useNavigate} from "react-router";

const Favorites = () => {
    const favorites = useSelector(selectFavorites)
    const navigate = useNavigate()

    if (favorites.length === 0) navigate('/empty_page')

    return (
        <main>
            <ul className="favorites">
                {
                    favorites.map(item =>
                        <Vacancy
                            profession={item.profession}
                            payment_from={item.payment_from}
                            payment_to={item.payment_to}
                            type_of_work={item.type_of_work}
                            town_title={item.town_title}
                            id={item.id}
                            favorited={true}
                        />
                    )
                }
            </ul>
        </main>
    );
};

export default Favorites;