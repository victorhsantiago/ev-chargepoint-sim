import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Link to={`simulation`}>Simulation</Link>
      <Link to={`visualizer`}>Visualizer</Link>
    </>
  );
}

export default App;
