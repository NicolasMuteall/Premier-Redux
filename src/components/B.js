import React from 'react';
import { useSelector } from 'react-redux';
import './B.css';

const B = () => {
    const pirate = useSelector((state) => state.pirateValuablesReducer)
    return (
        <div className='B'>
            <h2>Composant B</h2>
            {pirate.gold} gold
            <p>{pirate.diamonds} diamant</p>
            <p>{pirate.pearls} perle</p>
        </div>
    );
};

export default B;