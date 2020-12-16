import {
  Box,
  Button,
  IconButton,
  Paper,
  Snackbar,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { useStyles } from "./login.style";
import {
  PasswordField,
  StyledTextField,
} from "../../components/styled-textfield/styled-textfield";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import { loginAdmin } from "../../reducers/users/users.actions";
import { connect, useSelector } from "react-redux";
import { clearInfos } from "../../reducers/infos/info.actions";
import { LinearProgComponent } from "../../components/linear-progress/linear-progress";
import MuiAlert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LoginPage = ({ loginAdmin, clearInfos }) => {
  const classes = useStyles();
  const history = useHistory();
  const isFirstRender = useRef(true);
  const isError = useSelector((state) => state.infos);

  console.log(isError);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      clearInfos();
    }
  }, [clearInfos]);

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      const onSuccess = () => history.push("/");
      loginAdmin(values, onSuccess);
      handleClick();
      clearInfos();
    },
  });

  const change = (value, e) => {
    e.persist();
    formik.handleChange(e);
  };

  return (
    <React.Fragment>
      <LinearProgComponent />
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
      {isError.id === "LOGIN_FAIL" ? (
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={`${isError.message.message}`}
          action={
            <React.Fragment>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      ) : null}
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAdmin: (values, onSuccess) => dispatch(loginAdmin(values, onSuccess)),
    clearInfos: () => dispatch(clearInfos()),
  };
};

export default connect(null, mapDispatchToProps)(LoginPage);
