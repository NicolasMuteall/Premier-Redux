import A from './A';
import './App.css';
import B from './B';
import { useSelector } from 'react-redux';
import { compareValues } from './store';

function App() {
  const state = useSelector(state => state);
  const comparisonResult = compareValues(state.A, state.B);
  return (
    <div className="App">
      <A />
      <B />
      <p>Comparison Result: {comparisonResult}</p>
    </div>
  );
}

export default App;
