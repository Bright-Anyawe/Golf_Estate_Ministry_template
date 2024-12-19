import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./;
import "./App.css";

import routes from "./Router/route.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
