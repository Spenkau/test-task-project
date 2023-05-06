import React from 'react';
import {Select} from "@mantine/core";
import Vacancy from "../../components/Vacancy/Vacancy";

const Search = () => {
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
                            <Select
                                data={['10', '20', '50', '100', '150', '200', '250', '300', '350', '400', '450', '500', '600', '700', '800', '900', '1000']}
                                placeholder="От"
                                style={{width: "275px"}} />
                            <Select
                                placeholder="До"
                                style={{width: "275px", margin: "8px 0 20px 0"}}
                                data={['10', '20', '50', '100', '150', '200', '250', '300', '350', '400', '450', '500', '600', '700', '800', '900', '1000']} />
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
                        <Vacancy />
                    </ul>
                </div>
            </main>
            <footer></footer>
        </>
    );
};

export default Search;