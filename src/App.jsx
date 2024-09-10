import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CamperPage from './pages/CamperPage';
import Features from './components/Features';
import Reviews from './components/Reviews';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/catalog',
        element: <CatalogPage />,
      },
      {
        path: '/catalog/:id',
        element: <CamperPage />,
        children: [
          {
            path: 'features',
            element: <Features />,
          },
          {
            path: 'reviews',
            element: <Reviews />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} future={{ v7_startTransition: true }} />;
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default App;
