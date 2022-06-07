import {
  Box,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import decode from "jwt-decode";
import React, { useEffect, useState } from "react";
import { ListItem, useStyles } from "./list-items.style";
import { Link } from "react-router-dom";
import {
  listMenu,
  controlSpace,
  controlTextMenu,
} from "../../utilities/list-items";
import { GreyText } from "../typography/typography";

export const ListItemsComponent = () => {
  const [selected, setSelected] = useState(0);
  const classes = useStyles();

  const updateSelected = (event, selectedIndex) => {
    setSelected(selectedIndex);
  };

  useEffect(() => {
    const linkPath = () => {
      let path = window.location.pathname;
      let menuPath = [];

      for (let index = 0; index < listMenu.length; index++) {
        menuPath.push(listMenu[index].link);
      }

      for (let index = 0; index < menuPath.length; index++) {
        if (path === menuPath[index] && selected !== index) setSelected(index);
      }
    };

    linkPath();
  }, [selected]);

  let tempArr = [];
  let isAdmin = false;

  const jwtToken = localStorage.getItem("token");

  if (jwtToken) {
    const d = decode(jwtToken);

    isAdmin = d.role === "Admin";

    if (isAdmin) tempArr = listMenu.filter((data) => data.name !== "Users");
  }

  return (
    <React.Fragment>
      <List>
        {(isAdmin ? tempArr : listMenu).map((list, idx) => (
          <Box key={list.id}>
            <Box>
              <Box marginTop={`${controlSpace(controlTextMenu(list))}px`}>
                <Typography className={classes.controlText} variant="subtitle1">
                  {controlTextMenu(list)}
                </Typography>
              </Box>
              <Box>
                <Link to={list.link} className={classes.itemText}>
                  <ListItem
                    button
                    selected={selected === idx}
                    onClick={(event) => updateSelected(event, idx)}
                  >
                    <ListItemIcon className={classes.controlIcons}>
                      {list.icons.outlinedIcon}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <GreyText variant="subtitle2" text={list.name} />
                      }
                    />
                  </ListItem>
                </Link>
              </Box>
            </Box>
          </Box>
        ))}
      </List>
    </React.Fragment>
  );
};
