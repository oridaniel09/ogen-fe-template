import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  AppBar as MuiAppBar,
  Toolbar,
  Button,
  Typography,
} from "@mui/material";
import Drawer from "./Drawer";

const Navbar = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const Appbar = () => {
    return (
      <MuiAppBar position="relative" elevation={0}>
        <Toolbar>
          <Button
            onClick={() => {
              setOpenDrawer(true);
            }}
          >
            <Typography color="#FFF" variant="body">
              Press Here
            </Typography>
            {/* <MenuIcon /> */}
          </Button>
        </Toolbar>
      </MuiAppBar>
    );
  };

  console.log(openDrawer);

  return (
    <Box>
      <Appbar />
      <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      {props.children}
    </Box>
  );
};

export default Navbar;