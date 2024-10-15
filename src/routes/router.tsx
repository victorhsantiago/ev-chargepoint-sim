import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from '@/App';
import Simulation from '@/pages/Simulation';
import Visualizer from '@/pages/Visualizer';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/visualizer" replace />,
      },
      {
        path: '/simulation',
        element: <Simulation />,
      },
      {
        path: '/visualizer',
        element: <Visualizer />,
      },
    ],
  },
]);
