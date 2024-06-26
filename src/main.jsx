import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Form from "./pages/Form.jsx";
import Home from "./pages/Home.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Form />,
      },
      {
        path: "home/:id",
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <RouterProvider router={route}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);