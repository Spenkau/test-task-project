import React, {useState} from 'react';
import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import {Route, Routes} from 'react-router-dom'
import Layout from "./features/Layout/Layout";
import DetailedVacancy from "./pages/DetailedVacancy/DetailedVacancy";

function App() {
    return (
        <Layout>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
                <Route path="/vacancies/:id" element={<DetailedVacancy/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
