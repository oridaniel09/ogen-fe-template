import React, { useState } from "react";
import { Box } from "@mui/system";
import Drawer from "./Drawer";
import Appbar from "./Appbar";

const Navbar = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Box>
      <Appbar setOpenDrawer={setOpenDrawer} />
      <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      {props.children}
    </Box>
  );
};

export default Navbar;
