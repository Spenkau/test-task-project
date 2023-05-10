import React, {useState} from 'react';
import Search from "./pages/Search/Search";
import Favorites from "./pages/Favorites/Favorites";
import {Route, Routes} from 'react-router-dom'
import Layout from "./features/Layout/Layout";
import DetailedVacancy from "./pages/DetailedVacancy/DetailedVacancy";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Search/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/vacancy_details" element={<DetailedVacancy/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
