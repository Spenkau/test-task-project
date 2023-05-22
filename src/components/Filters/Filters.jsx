import React, {useEffect, useState} from 'react';
import {RxCross1} from "react-icons/rx";
import {NumberInput, Select} from "@mantine/core";
import catalogues from "./catalogues";
import {useGetVacanciesByFilterQuery} from "../../store/apiSlice";

const Filters = ({setRenderJobs, setIsLoaded}) => {
    const [shouldFetch, setShouldFetch] = useState(false)
    const [value, setValue] = useState({
        from: 0,
        to: 0,
        catalogue: 0
    });

    const {data} = useGetVacanciesByFilterQuery([value.from, value.to, value.catalogue], {
        skip: shouldFetch === false
    });

    useEffect(() => {
        if (data) {
            setRenderJobs(data.objects)
            setIsLoaded(true)
            setShouldFetch(false)
        }
    }, [data])

    const fetchByFilters = () => {
        if (value.from > value.to) return;
        setIsLoaded(false);

        setShouldFetch(true)
    }

    return (
        <section className="filter-content">
            <div className="filters-top">
                <h2>Фильтры</h2>
                <button className="filters-reset" onClick={() => window.location.reload()}>
                    <span>Сбросить все</span>
                    <RxCross1/>
                </button>
            </div>
            <ul className="filters-center">
                <li className="industry">
                    <p>Отрасль</p>
                    <Select
                        data-elem="industry-select"
                        value={value.catalogue}
                        onChange={(val) => setValue({...value, catalogue: val})}
                        placeholder='Выберите отсраль'
                        rightSection={<img src="/images/down.png" sizes="1rem" alt=""/>}
                        className="work-branch"
                        data={catalogues}/>
                </li>
                <li className="salary">
                    <p>Оклад</p>
                    <NumberInput
                        data-elem="salary-from-input"
                        min={0}
                        step={5000}
                        // value={value.from}
                        onChange={(val) => setValue({...value, from: val})}
                        placeholder="От"
                        className="input-from"/>
                    <NumberInput
                        data-elem="salary-to-input"
                        min={0}
                        step={5000}
                        // value={value.to}
                        onChange={(val) => setValue({...value, to: val})}
                        placeholder="До"
                        className="input-to"/>
                </li>
            </ul>
            <div className="filters-bottom">
                <button
                    className="btn-blue"
                    onClick={() => fetchByFilters()}
                    data-elem="search-button"
                >
                    Применить
                </button>
            </div>
        </section>
    );
};

export default Filters;