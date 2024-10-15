import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="md:grid grid-cols-12">
      <nav className="col-span-2 p-2" role="navigation">
        <ul className="flex md:flex-col gap-2">
          <li>
            <Link className="nav-link" to={`simulation`}>
              Simulation
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={`visualizer`}>
              Visualizer
            </Link>
          </li>
        </ul>
      </nav>

      <main className="col-span-10 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
