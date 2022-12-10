import React from "react";
import { useRoutes } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/navbar";
import router from "./router";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resources from "./i18n/resources";

export default function App() {

  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources,
      lng: "he",
      interpolation: {
        escapeValue: false, // react already safes from xss
      },
    });

  const element = useRoutes(router);

  return (
    <>
      <Navbar>
        <Container maxWidth="0">{element}</Container>
      </Navbar>
    </>
  );
}
