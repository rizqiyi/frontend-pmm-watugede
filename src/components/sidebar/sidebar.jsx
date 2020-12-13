import { Drawer, IconButton, useTheme } from "@material-ui/core";
import React from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import useStyles from "./sidebar.style";
import { ListItemsComponent } from "../list-items/list-items";

export const ListItemComponent = ({ handleDrawerClose, open }) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <ListItemsComponent />
    </Drawer>
  );
};
