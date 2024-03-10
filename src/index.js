import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import Portfolio from "./Portf/Portfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />)
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
  }

]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);