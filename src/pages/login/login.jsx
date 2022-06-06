import { Box, Button, Paper, Snackbar, Typography } from "@material-ui/core";
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
import LinearProgComponent from "../../components/linear-progress/linear-progress";
import Alert from "@material-ui/lab/Alert";
import coverLogin from "../../assets/images/cover-login.svg";

const LoginPage = ({ loginAdmin, clearInfos }) => {
  const classes = useStyles();
  const history = useHistory();
  const isFirstRender = useRef(true);
  const isError = useSelector((state) => state.infos);
  const isLoading = useSelector((state) => state.users.isLoading);
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      clearInfos();
    }
  }, [clearInfos]);

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const onSuccess = () => history.push("/");
      loginAdmin(values, onSuccess);
      setState({ open: true, vertical: "bottom", horizontal: "left" });
      clearInfos();
    },
  });

  const change = (value, e) => {
    e.persist();
    formik.handleChange(e);
  };

  return (
    <React.Fragment>
      {isLoading ? <LinearProgComponent /> : null}
      <Box className={classes.padding}>
        <Paper className={classes.root}>
          {/* <Alert severity="info">
            For demos login using:
            <br />
            username: rizqiyi, password: 123456
          </Alert> */}
          <Box className={classes.controlContent}>
            <Box display="flex" justifyContent="center" alignItems="flex-end">
              <img
                src={coverLogin}
                className={classes.coverLogin}
                alt="Login Cover"
                width="auto"
                height="400px"
              />
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              justifyContent="flex-start"
              margin="0 auto"
              p={2}
              className={classes.rightContent}
            >
              <Box
                marginTop={3}
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
              >
                <Typography variant="h5" className={classes.font}>
                  SELAMAT DATANG
                </Typography>
                <Typography variant="h6" className={classes.fontCons}>
                  Silahkan login terlebih dahulu untuk masuk kedalam sistem
                  kependudukan Desa Watugede
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                justifyContent="flex-start"
                p={3}
                paddingLeft={0}
              >
                <StyledTextField
                  label="Username"
                  name="username"
                  size="small"
                  onChange={change.bind(null, "username")}
                  className={classes.margin}
                  variant="filled"
                />
                <PasswordField
                  label="Password"
                  name="password"
                  size="small"
                  onChange={change.bind(null, "password")}
                  className={classes.margin}
                  variant="filled"
                />
                <Button
                  variant="contained"
                  className={classes.controlButton}
                  color="primary"
                  type="submit"
                  onClick={formik.handleSubmit}
                >
                  Login
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
      {isError.id === "LOGIN_FAIL" ? (
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={open}
          autoHideDuration={4000}
          onClose={handleClose}
          key={vertical + horizontal}
        >
          <Alert variant="filled" severity="error" onClose={handleClose}>
            {isError.message.message}
          </Alert>
        </Snackbar>
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
