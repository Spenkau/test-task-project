import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.scss';
import {BrowserRouter} from "react-router-dom";
import {MantineProvider} from "@mantine/core";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <MantineProvider withGlobalStyles>
                <App/>
            </MantineProvider>
        </BrowserRouter>
    </React.StrictMode>
);
