import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from "../App";
import Contact from "./Page/Contact";
import About from "./Page/About";
import EwalletPage from "./Page/EwalletPage";
import ErrorPage from "./Components/ErrorPage";
  
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <ErrorPage />,
    },
    {
      path: "/contact",
      element: <Contact/>,
      errorElement: <ErrorPage />,
    },
    {
        path: "/about",
        element: <About/>,
        errorElement: <ErrorPage />,
      },
      {
        path: "/ewallet",
        element: <EwalletPage/>,
        errorElement: <ErrorPage />,
      },
  ]);

export default router
  