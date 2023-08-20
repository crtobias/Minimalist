// main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './router';
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; 

// const BlackMode = store.getState().blackmode;

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <NextUIProvider>
            <main>
                <RouterProvider router={router} />
            </main>
        </NextUIProvider>
    </Provider>
);
