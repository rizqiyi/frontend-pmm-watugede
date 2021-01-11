import { IconButton, Menu, MenuItem } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postDataAdminWhenLogout } from "../../reducers/aktifitas_admin/admin_activity.actions";
import { logoutAdmin } from "../../reducers/users/users.actions";
import { useStyles } from "./account-menu.style";

export const AccountMenuComponent = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const openAccountMenu = Boolean(anchorEl);
  const dispatch = useDispatch();
  const adminID = useSelector((state) => state.users.id);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        className={classes.iconButton}
        color="inherit"
      >
        <AccountCircle className={classes.typography} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={openAccountMenu}
        onClose={handleClose}
      >
        <MenuItem
          onClick={(e) => {
            e.preventDefault();
            const onAdminLogout = () => logoutAdmin();
            dispatch(postDataAdminWhenLogout(adminID, onAdminLogout));
            handleClose();
          }}
          component={Link}
          to="/login"
        >
          Log Out
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};
