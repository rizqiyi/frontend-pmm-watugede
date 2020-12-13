import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { AccountMenuComponent } from "../account-menu/account-menu";
import useStyles from "./appbar.style";

export const AppBarComponent = ({ handleDrawerOpen, open }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title} noWrap>
          Desa Watugede
        </Typography>
        <AccountMenuComponent />
      </Toolbar>
    </AppBar>
  );
};
