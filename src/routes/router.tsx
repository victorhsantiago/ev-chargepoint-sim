import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Simulation from '../pages/Simulation';
import Visualizer from '../pages/Visualizer';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/simulation',
    element: <Simulation />,
  },
  {
    path: '/visualizer',
    element: <Visualizer />,
  },
]);
