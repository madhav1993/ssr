import React from 'react';
import App from './components/App';
import UserList from './components/UsersList'

export default [
    {
        ...App,
        path: '/',
        exact: true
    },
    {
        ...UserList,
        path: '/users'
    }
]
