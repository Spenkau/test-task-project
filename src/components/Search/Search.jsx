import React, {useEffect, useRef, useState} from 'react';
import {useGetVacanciesByKeywordQuery} from "../../store/apiSlice";
import {CiSearch} from "react-icons/ci";

const Search = ({setRenderJobs, setIsLoaded}) => {
    const [keyword, setKeyword] = useState('');
    const [shouldFetch, setShouldFetch] = useState(false)
    const searchInputRef = useRef(null);
    const {data: vacanciesByKeyword} = useGetVacanciesByKeywordQuery(keyword, {
        skip: shouldFetch === false
    });

    useEffect(() => {
        if (vacanciesByKeyword) {
            setRenderJobs(vacanciesByKeyword.objects);
            setIsLoaded(true);
            setShouldFetch(false);
            searchInputRef.current.value = '';
        }


    }, [vacanciesByKeyword])

    const getVacanciesByKeyword = (e) => {
        e.preventDefault();
        setIsLoaded(false)

        setKeyword(searchInputRef.current.value);
        setShouldFetch(true);
    }

    return (
        <form className="search" onSubmit={(e) => getVacanciesByKeyword(e)}>
            <CiSearch width={16} height={16}/>
            <input
                ref={searchInputRef}
                className="left"
                placeholder="Введите название вакансии"
                type="text"
                data-elem="search-input"/>
            <button
                className="btn-blue"
                type="submit"
                data-elem="search-button">
                Поиск
            </button>
        </form>
    );
};

export default Search;