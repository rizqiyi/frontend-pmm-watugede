import {
  Box,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
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

  const isUndefined = (val) => controlSpace(controlTextMenu(val)) === undefined;

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

  return (
    <React.Fragment>
      <List>
        {listMenu.map((list, idx) => (
          <Box key={list.id}>
            <Box
              marginTop={
                isUndefined(list) ? 0 : controlSpace(controlTextMenu(list))
              }
            >
              <Typography className={classes.controlText} variant="subtitle1">
                {controlTextMenu(list)}
              </Typography>
              <Box marginTop={idx === 3 || idx === 6 ? 2 : 0}>
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
