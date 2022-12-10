import React from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import router from "../../router";
import { useTranslation } from 'react-i18next';

const Drawer = ({ openDrawer, setOpenDrawer }) => {

  const { t } = useTranslation();

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  return (
    <SwipeableDrawer
      open={openDrawer}
      onClose={() => {
        setOpenDrawer(false);
      }}
      onOpen={() => {
        setOpenDrawer(true);
      }}
      anchor={document.dir === "rtl" ? "right" : "left"}
      sx={{
        width: "240px",
      }}
    >
      <Box sx={{ width: 250 }}
      >
        <List>
          {router.map((element, index) => {
            return (
              <ListItem key={index} disablePadding>
                <Link to={element.path}>
                  <ListItemButton onClick={() => { setOpenDrawer(false) }} >
                    <ListItemText primary={t(element.title)} />
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </SwipeableDrawer>
  );
};

export default Drawer;
