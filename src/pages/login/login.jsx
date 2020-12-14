import { Box, Button, Paper, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./login.style";
import {
  PasswordField,
  StyledTextField,
} from "../../components/styled-textfield/styled-textfield";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { loginAdmin } from "../../reducers/users/users.actions";
import { connect } from "react-redux";

const LoginPage = ({ loginAdmin }) => {
  const classes = useStyles();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      const onSuccess = () => setTimeout(() => history.push("/"), 500);
      loginAdmin(values, onSuccess);
    },
  });

  const change = (value, e) => {
    e.persist();
    formik.handleChange(e);
  };

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
              name="username"
              onChange={change.bind(null, "username")}
              className={classes.margin}
              variant="filled"
            />
            <PasswordField
              label="Password"
              name="password"
              onChange={change.bind(null, "password")}
              className={classes.margin}
              variant="filled"
            />
            <Button
              variant="contained"
              className={classes.controlButton}
              color="secondary"
              type="submit"
              onClick={formik.handleSubmit}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Paper>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAdmin: (values, onSuccess) => dispatch(loginAdmin(values, onSuccess)),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
