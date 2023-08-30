import React from 'react';
import { useSelector } from 'react-redux';

const A = () => {
    const pirate = useSelector((state) => state.pirateValuablesReducer)

    return (
        <div>
            {pirate.gold}
        </div>
    );
};

export default A;