import React from "react";
import i18n from "./i18n";
import HomeScreen from "./screens/HomeScreen";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
