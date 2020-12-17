import { Box, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./text-link.style";

export const TextLink = ({ data, link, component }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box display="flex" flexDirection="row">
        {component}
        <Box>
          <Typography
            component={Link}
            to={link}
            variant="body1"
            className={classes.controlLink}
          >
            {data}
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
};
