import './App.css';
import { useDispatch } from 'react-redux';
import { addGold, addDiamonds, addPearls, addTreasureMap } from './actions/pirate.action';



function App() {
  const dispatch = useDispatch();

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

  return (
    <div>
      <button onClick={handleAddGoldClick}>Add 10 gold</button>
      <button onClick={handleAddDiamondsClick}>Add 5 diamonds</button>
      <button onClick={handleAddPearlsClick}>Add 3 pearls</button>
      <button onClick={handleAddTreasureMapClick}>Add treasure map</button>
    </div>
  );
};


export default App;
