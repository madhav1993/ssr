import React from 'react';
import App from './App';
import Home from './components/Home';
import UserList from './components/UsersList'

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
                ...UserList,
                path: '/users'
            }
        ]
    }
];
