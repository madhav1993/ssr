import React from 'react';

const NotFound = ({staticContext = {}}) => {
    staticContext.notFound = true;
    return (
        <div>
            <h3>Oooops, Page Not Found</h3>
        </div>
    );
};

export default {
    component: NotFound
};
