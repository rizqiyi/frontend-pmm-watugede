import {
  Box,
  Collapse,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { ListItem, useStyles } from "./list-items.style";
import { Link } from "react-router-dom";
import {
  listMenu,
  controlSpace,
  controlTextMenu,
} from "../../utilities/list-items";

export const ListItemsComponent = () => {
  const [selected, setSelected] = useState(0);
  const classes = useStyles();

  const updateSelected = (event, selectedIndex) => {
    setSelected(selectedIndex);
  };

  React.useEffect(() => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <React.Fragment>
      <List>
        {listMenu.map((list, idx) => (
          <Box key={list.id}>
            <Box marginTop={controlSpace(list)}>
              <Typography className={classes.controlText} variant="subtitle1">
                {controlTextMenu(list)}
              </Typography>
              <Link to={list.link} className={classes.itemText}>
                {idx > 3 && idx < 6 ? (
                  <Collapse key={idx} in={true}>
                    <List component="div" disablePadding>
                      <ListItem
                        button
                        className={classes.selectedBorderRadiusNested}
                        selected={selected === idx}
                        onClick={(event) => updateSelected(event, idx)}
                      >
                        <ListItemIcon
                          className={
                            selected === idx
                              ? classes.selectedIcons
                              : classes.notSelectedIcons
                          }
                        >
                          {selected === idx
                            ? list.icons.containedIcon
                            : list.icons.outlinedIcon}
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography
                              className={classes.controlFont}
                              variant="subtitle2"
                            >
                              {list.name}
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                  </Collapse>
                ) : (
                  <ListItem
                    button
                    selected={selected === idx}
                    className={
                      selected === idx ? classes.selectedBorderRadius : null
                    }
                    onClick={(event) => updateSelected(event, idx)}
                  >
                    <ListItemIcon
                      className={
                        selected === idx
                          ? classes.selectedIcons
                          : classes.notSelectedIcons
                      }
                    >
                      {selected === idx
                        ? list.icons.containedIcon
                        : list.icons.outlinedIcon}
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          className={classes.controlFont}
                          variant="subtitle2"
                        >
                          {list.name}
                        </Typography>
                      }
                    />
                  </ListItem>
                )}
              </Link>
            </Box>
          </Box>
        ))}
      </List>
    </React.Fragment>
  );
};
