import React from 'react';
import { useSelector } from 'react-redux';
import './A.css';

const A = () => {
    const pirate = useSelector((state) => state.pirateValuablesReducer)

    return (
        <div className='A'>
            <h2>Composant A</h2>
            {pirate.gold} gold
            <p>{pirate.diamonds} diamant</p>
            <p>{pirate.pearls} perle</p>
        </div>
    );
};

export default A;