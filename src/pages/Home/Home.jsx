import React, {useEffect, useState} from 'react';
import {NumberInput, Pagination, Select} from "@mantine/core";
import Vacancy from "../../components/Vacancy/Vacancy";
import {useGetVacanciesQuery} from "../../store/apiSlice";
import Search from "../../components/Search/Search";
import {usePagination} from "@mantine/hooks";

const Home = () => {
    const {data: vacancies, isSuccess} = useGetVacanciesQuery();
    const [renderJobs, setRenderJobs] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const [currentPageState, setCurrentPageState] = useState(1);
    const ITEMS_PER_PAGE = 4;
    const { from, to, currentPage, pagesCount, setPage } = usePagination({
        perPage: ITEMS_PER_PAGE,
        page: currentPageState,
        withControls: true
    });
    const paginatedItems = renderJobs.slice(from, to);

    useEffect(() => {
        const getRenderJobs = async () => {
            if (vacancies) {
                setRenderJobs(vacancies.objects)
                setIsLoaded(true)
            }
        }
        getRenderJobs()
    }, [isSuccess])

    let content, pages;
    if (isLoaded === false) {
        content = <div>Loading...</div>
    } else {
        content = paginatedItems.map(vac =>
                <Vacancy
                    key={vac.id}
                    profession={vac.profession}
                    firm_name={vac.firm_name}
                    type_of_work={vac.type_of_work.title}
                    payment_from={vac.payment_from}
                    payment_to={vac.payment_to}
                    town_title={vac.town.title}
                    id={vac.id}
                />
            )
        pages = <Pagination
                    id="pagination"
                    pagesCount={pagesCount}
                    currentPage={currentPageState}
                    onChange={(page) => {
                        setPage(page);
                        setCurrentPageState(page);
                    }}
                />
    }

    return (
        <>
            <main>
                <section className="filter-content" /**action="filter"**/>
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
                </section>
                <section className="main-content">
                    <Search setRenderJobs={setRenderJobs} isLoaded={isLoaded} setIsLoaded={setIsLoaded} />
                    <ul className="vacancy-list">
                        {content}
                        {pages}
                    </ul>
                </section>
            </main>
            <footer></footer>
        </>
    );
};

export default Home;