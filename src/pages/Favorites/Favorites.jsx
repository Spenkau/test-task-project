import React from 'react';
import Vacancy from "../../components/Vacancy/Vacancy";

const Favorites = () => {
    return (
        <main>
            <ul className="favorites">
                <Vacancy />
            </ul>
        </main>
    );
};

export default Favorites;