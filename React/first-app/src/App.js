import React from 'react';
import User from './components/User';

export function App (){

    const users = [
        {
            "name": "Santiago",
            "work": "Developer",
        },
        {
            "name": "Jessica",
            "work": "Developer",
        },
        {
            "name": "Facundo",
            "work": "Developer",
        },
        {
            "name": "Jeremias",
            "work": "Developer",
        },
    ];

    function List(){
        return(
            users.map(user => (
                <User name={user.name} work={user.work} />
            ))
        );
    }

    return(
        <List />
    );
}