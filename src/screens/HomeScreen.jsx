import React from "react";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

const HomeScreen = () => {
  

  const MainView = styled(Box)`
    display: flex;
    height: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    background-color: "#CCC";
  `;

  return (
    <MainView>
      <Button onClick={ () => { document.dir = document.dir == 'rtl' ? 'ltr' : 'rtl' } } >Change Direction</Button>
    </MainView>
  );
};

export default HomeScreen;
