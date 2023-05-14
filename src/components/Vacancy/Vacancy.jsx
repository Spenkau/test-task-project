import React, {useState} from 'react';
import {HiOutlineLocationMarker} from "react-icons/hi";
import {useNavigate} from 'react-router'
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {interactWithFavorite} from "../../store/favoritesSlice";

const Vacancy = (props) => {
    const {profession, payment_from, payment_to, type_of_work, town_title, id} = props;
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(false);

    const redirectToDetails = () => {
        if (pathname.startsWith('/vacancies')) return;
        navigate(`/vacancies/${id}`, {state: {profession, payment_from, payment_to, type_of_work, town_title, id}});
    };

    const handleFavorite = () => {
        setIsFavorite(!isFavorite)
        dispatch(interactWithFavorite({...props, isFavorite}))
    }

    return (
        <li className="vacancy">
            <p className="profession" onClick={redirectToDetails}>{profession}</p>
            <p className="extraInfo">
                <span>з/п {
                    (payment_from === 0 && payment_to === 0) ?
                        'не указана' :
                        (payment_from === payment_to) ?
                            `${payment_from} rub` :
                            (payment_from !== 0 && payment_to !== 0) ?
                                `от ${payment_from} до ${payment_to} rub` :
                                (payment_from === 0 && payment_to !== 0) ?
                                    `до ${payment_to} rub` :
                                    `от ${payment_from} rub`
                }</span>
                &nbsp;&nbsp;&#8226;&nbsp;&nbsp;
                {type_of_work}
            </p>
            <div className="locationContainer">
                <HiOutlineLocationMarker style={{width: "20px", height: "20px", opacity: "0.4"}}/>
                <p>{town_title}</p>
            </div>
            <button className="favorite" onClick={handleFavorite}>
                { isFavorite ? <img src="/images/favorite.png" alt="favorite"/>: <img src="/images/nonfavorite.png" alt="not favorite"/> }
            </button>
        </li>
    );
};

export default Vacancy;