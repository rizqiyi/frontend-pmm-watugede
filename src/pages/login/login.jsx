import { Box, Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./login.style";
// import { useSelector } from "react-redux";
import {
  PasswordField,
  StyledTextField,
} from "../../components/styled-textfield/styled-textfield";
import { useHistory } from "react-router-dom";

export const LoginPage = () => {
  const classes = useStyles();
  const history = useHistory();
  // const a = useSelector((state) => state.users);
  // console.log(a);
  return (
    <React.Fragment>
      <Paper className={classes.root}>
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          p={3}
          paddingBottom={6}
        >
          <Box
            marginLeft={5}
            marginTop={3}
            display="flex"
            flexDirection="column"
            justifyContent="start"
          >
            <Typography variant="h5" className={classes.font}>
              Login Admin
            </Typography>
          </Box>
          <Box
            marginTop={2}
            display="flex"
            flexDirection="column"
            alignItems="center"
            className={classes.controlWidth}
          >
            <StyledTextField
              label="Username"
              className={classes.margin}
              variant="filled"
            />
            <PasswordField
              label="Password"
              className={classes.margin}
              variant="filled"
            />
            <Button
              variant="contained"
              className={classes.controlButton}
              color="secondary"
              onClick={() => history.push("/dashboard")}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Paper>
    </React.Fragment>
  );
};
