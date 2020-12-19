import React from "react";
import { Box } from "@material-ui/core";
import useStyles from "./drawer.style";
import { AppBarComponent } from "../appbar/appbar";
import { ListItemComponent } from "../sidebar/sidebar";
import clsx from "clsx";

export const MiniDrawer = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box className={classes.root}>
      <AppBarComponent handleDrawerOpen={handleDrawerOpen} open={open} />
      <ListItemComponent handleDrawerClose={handleDrawerClose} open={open} />
      <Box
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Box className={classes.toolbar} />
        {children}
      </Box>
    </Box>
  );
};
