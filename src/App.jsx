import React from "react";
import i18n from "./i18n";
import router from "./router";
import { RouterProvider } from "react-router-dom";

export default function App() {
  return <RouterProvider router={router} />;
}
