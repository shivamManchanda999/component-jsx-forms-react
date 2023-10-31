import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import NewShop from "./Components/NewShop";
import NewProduct from "./Components/NewProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/newshop",
    element: <NewShop />,
  },
  {
    path: "/newproduct",
    element: <NewProduct />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
