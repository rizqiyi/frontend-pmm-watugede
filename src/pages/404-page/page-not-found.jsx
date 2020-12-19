import { Box, Button, Typography } from "@material-ui/core";
import React from "react";
import pageNotFoundImage from "../../assets/images/page-not-found.svg";
import { useStyles } from "./page-not-found.style";
import { useHistory } from "react-router-dom";

export const PageNotFound = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        marginTop={7}
        flexDirection="column"
        margin="auto"
      >
        <Box>
          <img
            src={pageNotFoundImage}
            className={classes.imageSize}
            alt="Page Not Found"
          />
        </Box>
        <Box>
          <Typography variant="h4" style={{ fontWeight: 700, marginTop: 4 }}>
            PAGE NOT FOUND
          </Typography>
        </Box>
        <Box marginTop={1.5}>
          <Typography variant="subtitle2" style={{ fontWeight: 350 }}>
            Sorry, We couldn't find for that page
          </Typography>
        </Box>
        <Box marginTop={4}>
          <Button
            className={classes.backButton}
            color="primary"
            onClick={() => history.goBack()}
            variant="contained"
          >
            Go Back
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};
