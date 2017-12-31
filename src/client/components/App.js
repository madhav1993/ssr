import React from 'react';

const App = () => {
    return (
        <div>
            <div>I am a Home component</div>
            <button onClick = {() => console.log("Hi")}>Click me!</button>
        </div>
    );
}

export default{
    component: App
};
