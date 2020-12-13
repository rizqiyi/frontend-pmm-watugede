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
import StarBorder from "@material-ui/icons/StarBorder";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { listMenu, listMenuNested } from "../../utilities/list-items";

export const ListItemsComponent = () => {
  const [selected, setSelected] = useState(0);
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

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
            {idx === 1 ? (
              <Box>
                <ListItem button onClick={handleClick}>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText primary="Kependudukan" />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                {listMenuNested.map((l, idx) => (
                  <Collapse key={idx} in={open} timeout="auto" unmountOnExit>
                    <Link to={l.link} className={classes.itemText}>
                      <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                          <ListItemIcon>
                            <StarBorder />
                          </ListItemIcon>
                          <ListItemText primary={l.name} />
                        </ListItem>
                      </List>
                    </Link>
                  </Collapse>
                ))}
              </Box>
            ) : null}
            <Link to={list.link} className={classes.itemText}>
              <ListItem
                button
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
                  primary={<Typography variant="body1">{list.name}</Typography>}
                />
              </ListItem>
            </Link>
          </Box>
        ))}
      </List>
    </React.Fragment>
  );
};
