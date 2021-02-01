import React, { useEffect, useRef, useState } from "react";
import { Box, LinearProgress } from "@material-ui/core";
import useStyles from "./drawer.style";
import { AppBarComponent } from "../appbar/appbar";
import { ListItemComponent } from "../sidebar/sidebar";
import clsx from "clsx";
import { useSelector } from "react-redux";

export const MiniDrawer = ({ children }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const isLoadingLogout = useSelector((state) => state.admin_activity.isLogout);
  const isFirstRender = useRef(true);
  const [progress, setProgress] = React.useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      {isLoadingLogout ? (
        <Box zIndex={10000} position="relative" width="100%">
          <LinearProgress
            variant="determinate"
            style={{
              backgroundColor: "#212121",
            }}
            value={progress}
          />
        </Box>
      ) : null}
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
    </React.Fragment>
  );
};
