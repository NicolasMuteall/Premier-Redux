import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPlaying } from './store'; // Importez l'action

const A = () => {
    const playing = useSelector(state => state.playing);
    const [A, setA] = useState(useSelector(state => state.A))
    const dispatch = useDispatch();

    const togglePlaying = () => {
        dispatch(setPlaying(!playing)); // Utilisez l'action pour mettre à jour "playing"
    };

    const handleChangeA = (e) => {
        setA(e.target.value);
    }

    return (
        <div>
            <h1>Player Component</h1>
            <p>Playing: {playing ? 'Yes' : 'No'}</p>
            <button onClick={togglePlaying}>Toggle Playing</button><br />
            <input type="text" value={A} onChange={handleChangeA} />
        </div>
    );
};

export default A;