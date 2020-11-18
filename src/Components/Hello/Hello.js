import React, { useContext } from 'react';
import { UserContext } from '../../App';

const Hello = () => {
    const {loggedInUser} = useContext(UserContext);
    return (
        <div>
            <h1>{loggedInUser.name}</h1>
        </div>
    );
};

export default Hello;