import React, {useState} from 'react';
import {NumberInput, Select} from "@mantine/core";
import Vacancy from "../../components/Vacancy/Vacancy";
import axios from "axios";

// ПАГИНАЦИЯ, ФИЛЬТР, ПОИСК


const Search = () => {
    const [vacancies, setVacancies] = useState([]);

    axios.get('https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/', {
        headers: {
            'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
            'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948'
        }
    }).then(response => {
        setVacancies(response.data.objects);
    }).catch(error => {
        console.error(error);
    });

    console.log(vacancies)
    return (
        <>
            <main>
                <div className="filter-content" /**action="filter"**/>
                    <div className="filters-top">
                        <h2>Фильтры</h2>
                        <button className="filters-reset">
                            <span>Сбросить все</span>
                            <img src="/images/cross-symbol.png" alt=""/>
                        </button>
                    </div>
                    <ul className="filters-center">
                        <li className="industry">
                            <p>Отрасль</p>
                            <Select
                                placeholder="Выберите отсраль"
                                rightSection={<img src="/images/Down.png" sizes="1rem"  alt=""/>}
                                style={{width: "275px"}}
                                data={['l']}/>
                        </li>
                        <li className="salary">
                            <p>Оклад</p>
                            <NumberInput
                                min={0}
                                step={5000}
                                placeholder="От"
                                style={{width: "275px"}} />
                            <NumberInput
                                min={0}
                                step={5000}
                                placeholder="До"
                                style={{width: "275px", margin: "8px 0 20px 0"}} />
                        </li>
                    </ul>
                    <div className="filters-bottom">
                        <button className="btn-blue">Применить</button>
                    </div>
                </div>
                <div className="main-content">
                    <form className="search" action="search">
                        <img className="left" src="/images/loop.png" width={16} height={16} alt="loop"/>
                        <input className="left" placeholder="Введите название вакансии" type="text"/>
                        <button className="btn-blue">Поиск</button>
                    </form>
                    <ul className="vacancy-list">
                        {
                            vacancies.map((vac, index) =>
                                <Vacancy
                                    key={index}
                                    profession={vac.profession}
                                    firm_name={vac.firm_name}
                                    type_of_work={vac.type_of_work.title}
                                    payment_from={vac.payment_from}
                                    town_title={vac.town.title}
                                />
                            )
                        }
                    </ul>
                </div>
            </main>
            <footer></footer>
        </>
    );
};

export default Search;