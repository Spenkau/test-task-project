import React, {useEffect, useState} from 'react';
import {NumberInput, Select} from "@mantine/core";
import Vacancy from "../../components/Vacancy/Vacancy";
import {useGetVacanciesQuery} from "../../store/apiSlice";
import Search from "../../components/Search/Search";

const Home = () => {
    const {data: vacancies, isLoading, isSuccess} = useGetVacanciesQuery();
    const [renderJobs, setRenderJobs] = useState([])

    useEffect(() => {
        const getRenderJobs = async () => {
            if (vacancies) setRenderJobs(vacancies.objects)
        }
        getRenderJobs()
    }, [isSuccess])

    let content;

    if (isLoading) {
        content = <div>Loading...</div>
    } else if (vacancies) {
        content = renderJobs.map((vac, index) =>
            <Vacancy
                key={index}
                profession={vac.profession}
                firm_name={vac.firm_name}
                type_of_work={vac.type_of_work.title}
                payment_from={vac.payment_from}
                payment_to={vac.payment_to}
                town_title={vac.town.title}
                id={vac.id}
                renderJobs={renderJobs}
                setRenderJobs={setRenderJobs}
            />
        )
    }

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
                                rightSection={<img src="/images/Down.png" sizes="1rem" alt=""/>}
                                style={{width: "275px"}}
                                data={['l']}/>
                        </li>
                        <li className="salary">
                            <p>Оклад</p>
                            <NumberInput
                                min={0}
                                step={5000}
                                placeholder="От"
                                style={{width: "275px"}}/>
                            <NumberInput
                                min={0}
                                step={5000}
                                placeholder="До"
                                style={{width: "275px", margin: "8px 0 20px 0"}}/>
                        </li>
                    </ul>
                    <div className="filters-bottom">
                        <button className="btn-blue">Применить</button>
                    </div>
                </div>
                <div className="main-content">
                    <Search renderJobs={renderJobs} setRenderJobs={setRenderJobs} />
                    <ul className="vacancy-list">
                        {content}
                    </ul>
                </div>
            </main>
            <footer></footer>
        </>
    );
};

export default Home;