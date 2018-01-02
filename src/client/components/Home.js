import React from 'react';
import {renderRoutes} from 'react-router-config';

const Home = () => {
    return (
        <div className='center-align' style={{marginTop: '200px'}}>
            <h3>Welcome</h3>
            <p>Checkout these awsome features!</p>
        </div>
    );
}

export default{
    component: Home
};
