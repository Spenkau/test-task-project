import React from 'react';
import Vacancy from "../../components/Vacancy/Vacancy";
import {useLocation} from "react-router-dom";
import {useGetVacancyQuery} from "../../store/apiSlice";


const DetailedVacancy = () => {
    const {state} = useLocation();
    const {profession, payment_from, payment_to, type_of_work, town_title, id} = state;
    const {data, isError} = useGetVacancyQuery(id)

    function generateRichText() {
        if (isError) return 'Ошибка! Перезагрузите страницу'

        if (data)  {
            const parser = new DOMParser()
            const parserResult = parser.parseFromString(data.vacancyRichText, 'text/html');
            return <div dangerouslySetInnerHTML={{ __html: parserResult.body.innerHTML }} />
        }
        else return 'Loading...';
    }

    return (
        <main>
            <ul className="details">
                <Vacancy profession={profession} payment_from={payment_from} payment_to={payment_to} type_of_work={type_of_work} town_title={town_title} />
                <li className="details-content">
                    {generateRichText()}
                </li>
            </ul>
        </main>
    );
};

export default DetailedVacancy;