import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        lazy: async () => {
          const { default: Component } = await import('./pages/HomePage');
          return {
            Component,
          };
        },
      },
      {
        path: '/catalog',
        lazy: async () => {
          const { default: Component } = await import('./pages/CatalogPage');
          return {
            Component,
          };
        },
      },
      {
        path: '/catalog/:id',
        lazy: async () => {
          const { default: Component } = await import('./pages/CamperPage');
          return {
            Component,
          };
        },
        children: [
          {
            path: '',
            lazy: async () => {
              const { default: Component } = await import('./components/Features');
              return {
                Component,
              };
            },
          },
          {
            path: 'reviews',
            lazy: async () => {
              const { default: Component } = await import('./components/Reviews');
              return {
                Component,
              };
            },
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
