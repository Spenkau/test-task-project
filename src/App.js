import React, {useState} from 'react';
import Search from "./pages/Search/Search";
import Favorites from "./pages/Favorites/Favorites";
import {Route, Routes} from 'react-router-dom'
import Layout from "./features/Layout/Layout";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Search/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
