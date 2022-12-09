import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Appbar = ({ setOpenDrawer }) => {
  return (
    <AppBar position="relative" elevation={0}>
      <Toolbar>
        <Button
          onClick={() => {
            console.log('clicked');
            setOpenDrawer(false);
          }}>
          <Typography color="#FFF" variant="body">Press Here</Typography>
          {/* <MenuIcon /> */}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
