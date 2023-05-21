import React, {useEffect} from 'react';
import Home from "./pages/Home/Home";
import {Route, Routes} from 'react-router-dom'
import Layout from "./features/Layout/Layout";
import DetailedVacancy from "./pages/DetailedVacancy/DetailedVacancy";
import EmptyState from "./components/EmptyState/EmptyState";
import Favorites from "./pages/Favorites/Favorites";
import {selectFavorites} from "./store/favoritesSlice";
import {useSelector} from "react-redux";

function App() {
    const favorites = useSelector(selectFavorites)

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favorites))
    }, [favorites])

    return (
        <Layout>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/favorites" element={<Favorites />}/>
                <Route path="/empty_page" element={<EmptyState/>}/>
                <Route path="/vacancies/:id" element={<DetailedVacancy/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
