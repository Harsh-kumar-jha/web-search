import React, { Component, Fragment } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { Outlet, Link } from 'react-router-dom';
import { ApiProvider } from '@reduxjs/toolkit/query/react';

import Header from './layout/Header';
import UserList from '../features/profiles/UserList';
import Homepage from './layout/Homepage';
import { getStore } from '../store';

const App = () => (
  <Provider store={getStore()}>
     <Homepage />
  </Provider >
);

export const renderApp = () => {
  createRoot(document.getElementById('app')).
    render(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="header" element={<Header />} />
                    <Route path="users" element={<UserList />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
