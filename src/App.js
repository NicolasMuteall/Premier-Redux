import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addGold, addDiamonds, addPearls, addTreasureMap, editGold } from './actions/pirate.action';
import { useState } from 'react';
import A from './components/A';


function App() {
  const dispatch = useDispatch();
  const pirate = useSelector((state) => state.pirateValuablesReducer);
  const [inputG, setInputG] = useState('');

  const handleAddGoldClick = () => {
    dispatch(addGold(10));
  };

  const handleAddDiamondsClick = () => {
    dispatch(addDiamonds(5));
  };

  const handleAddPearlsClick = () => {
    dispatch(addPearls(3));
  };

  const handleAddTreasureMapClick = () => {
    dispatch(addTreasureMap({
      location: 'Island X',
      clues: 'Look for the big palm tree with a red X painted on it.'
    }));
  };

  const handleChange = (e) => {
    setInputG(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputG);
    dispatch(editGold(inputG));
  }

  return (
    <div>
      <button onClick={handleAddGoldClick}>Add 10 gold</button>
      <button onClick={handleAddDiamondsClick}>Add 5 diamonds</button>
      <button onClick={handleAddPearlsClick}>Add 3 pearls</button>
      <button onClick={handleAddTreasureMapClick}>Add treasure map</button>
      <p>{pirate.gold}</p>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="" id="" value={inputG} onChange={handleChange} />
        <input type="submit" />
      </form>
      <A />
    </div>
  );
};


export default App;
