import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./Layout.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.jsx";
import Favorite from "./pages/Favorite.jsx";
import About from "./pages/About.jsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/favorite",
        element: <Favorite />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
