import ReactDOM from 'react-dom/client'
import './globalStyles.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './routes/layout';
import 'bootstrap/dist/css/bootstrap.min.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
      <RouterProvider router={router} />
)
