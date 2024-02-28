import React from 'react'
import ReactDOM from 'react-dom/client'
import './globalStyles.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './routes/layout';
import '@mantine/core/styles.css'
import { MantineProvider } from '@mantine/core';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <MantineProvider>
      <RouterProvider router={router} />
  </MantineProvider>,
)
