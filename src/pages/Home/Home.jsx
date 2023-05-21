import React, {useEffect, useState} from 'react';
import {Loader, Pagination} from "@mantine/core";
import Vacancy from "../../components/Vacancy/Vacancy";
import {useGetVacanciesQuery} from "../../store/apiSlice";
import Search from "../../components/Search/Search";
import {usePagination} from "@mantine/hooks";
import Filters from "../../components/Filters/Filters";
import {useSelector} from "react-redux";
import {selectFavorites} from "../../store/favoritesSlice";

const Home = () => {
    const {data: vacancies, isSuccess} = useGetVacanciesQuery();
    const [renderJobs, setRenderJobs] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);

    const favorites = useSelector(selectFavorites)

    const [total, setTotal] = useState(1);
    const ITEMS_PER_PAGE = 4;
    const {active} = usePagination({
        initialPage: 1,
        page: total,
        total: renderJobs.length / ITEMS_PER_PAGE
    })

    const startIndex = (total - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const displayedVacancies = renderJobs.slice(startIndex, endIndex)

    useEffect(() => {
        const getRenderJobs = async () => {
            if (vacancies) {
                setRenderJobs(vacancies.objects);
                setIsLoaded(true);
            }
        }
        getRenderJobs()
    }, [isSuccess])

    let content, pages;
    if (isLoaded === false) {
        content = <Loader id="loader" variant="dots"/>
    } else {
        content = displayedVacancies.map(vac =>
            <Vacancy
                key={vac.id}
                profession={vac.profession}
                firm_name={vac.firm_name}
                type_of_work={vac.type_of_work.title}
                payment_from={vac.payment_from}
                payment_to={vac.payment_to}
                town_title={vac.town.title}
                id={vac.id}
                favorited={favorites.some(item => vac.id === item.id)}
            />
        )

        pages = <Pagination
            id="pagination"
            value={active}
            total={Math.ceil(renderJobs.length / 5)}
            onChange={page => setTotal(page)}
            position={"center"}
        />
    }

    return (
        <>
            <main>
                <Filters
                    setRenderJobs={setRenderJobs}
                    setIsLoaded={setIsLoaded}/>
                <section className="main-content">
                    <Search
                        setRenderJobs={setRenderJobs}
                        isLoaded={isLoaded}
                        setIsLoaded={setIsLoaded}/>
                    <ul className="vacancy-list">
                        {content}
                        {pages}
                    </ul>
                </section>
            </main>
        </>
    );
};

export default Home;