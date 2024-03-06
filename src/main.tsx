import ReactDOM from "react-dom/client";
import "./globalStyles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./routes/layout";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./routes/Home";
import BlogPage from "./routes/BlogPage";
import ContactPage from "./routes/ContactPage";
import OurFleet from "./routes/OurFleet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <BlogPage/>
      },
      {
        path:"contact",
        element: <ContactPage/>
      },
      {
        path:"fleet",
        element: <OurFleet/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
