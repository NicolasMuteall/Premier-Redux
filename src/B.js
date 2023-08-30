import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const B = () => {
    const [B, setB] = useState(useSelector(state => state.B))

    const handleChangeB = (e) => {
        setB(e.target.value);
    }

    return (
        <div>
            <input type="text" value={B} onChange={handleChangeB} />
        </div>
    );
};

export default B;