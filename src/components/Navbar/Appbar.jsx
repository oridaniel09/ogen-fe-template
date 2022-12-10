import React from "react";
import { AppBar as MuiAppBar, Toolbar, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Appbar = ( {setOpenDrawer} ) => {
  return (
    <MuiAppBar position="relative" elevation={0}>
      <Toolbar>
        <Button
          onClick={() => {
            setOpenDrawer(true);
          }}
        >
          <MenuIcon color="text"/>
        </Button>
      </Toolbar>
    </MuiAppBar>
  );
};

export default Appbar;
