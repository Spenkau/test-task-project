import React from 'react';

function Layout(props) {
    return (
        <>
            <header>
                <div className="logo">
                    <img src="/images/Union.png" alt="logo"/>
                    <span>Jobored</span>
                </div>
                <nav>
                    <ul className="pages">
                        <li>Поиск вакансий</li>
                        <li>Избранное</li>
                    </ul>
                </nav>
            </header>
            {props.children}
        </>
    )
}

export default Layout;