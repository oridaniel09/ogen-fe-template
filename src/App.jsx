import React from "react";
import { useRoutes } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./components/navbar";
import router from "./router";

export default function App() {
  const element = useRoutes(router);

  return (
    <>
      <Navbar>
        <Container maxWidth="0">{element}</Container>
      </Navbar>
    </>
  );
}
