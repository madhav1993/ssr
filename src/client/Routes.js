import React from 'react';
import App from './App';
import Home from './components/Home';
import UserList from './components/UsersList';
import NotFound from './components/notfound/NotFound';
import AdminsList from './components/AdminsList';

export default [
    {
        ...App,
        routes: [
            {
                ...Home,
                path: '/',
                exact: true
            },
            {
                ...AdminsList,
                path: '/admins'
            },
            {
                ...UserList,
                path: '/users'
            },
            {
                ...NotFound
            }
        ]
    }
];
