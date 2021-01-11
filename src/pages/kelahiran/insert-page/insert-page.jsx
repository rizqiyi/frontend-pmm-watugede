import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import {
  Paper,
  Box,
  Typography,
  Divider,
  Button,
  LinearProgress,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStyles } from "./insert-page.style";
import { FastField, Form, Formik } from "formik";
import { TextFormField } from "../../../components/styled-textfield/styled-textfield";
import MomentUtils from "@date-io/moment";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import moment from "moment";
import localization from "moment/locale/id";
import { postKelahiran } from "../../../reducers/kelahiran/kelahiran.actions";
import { Alert } from "@material-ui/lab";
import { clearInfos } from "../../../reducers/infos/info.actions";

const KelahiranInsertPage = ({ ...props }) => {
  const history = useHistory();
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(moment());
  const [inputValueDate, setInputValueDate] = useState(
    moment().locale("id", localization).format("LL")
  );
  const isFirstRender = useRef(true);
  const {
    infosStatus,
    infosMessage,
    isLoading,
    postKelahiran,
    clearInfos,
  } = props;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    if (isFirstRender.current) {
      isFirstRender.current = false;
      clearInfos();
    }

    return () => {
      clearInterval(timer);
    };
  }, [clearInfos]);

  const handleDateChange = (date, value) => {
    setSelectedDate(date);
    setInputValueDate(value);
  };

  const dateFormatter = (str) => {
    return str;
  };

  return (
    <React.Fragment>
      {infosStatus === 201 ? (
        <Box className={classes.controlAlert}>
          <Alert severity="success" icon={false}>
            {infosMessage}
          </Alert>
        </Box>
      ) : null}
      {infosStatus === 404 ? (
        <Box className={classes.controlAlert}>
          <Alert severity="error" icon={false}>
            {infosMessage}
          </Alert>
        </Box>
      ) : null}
      {infosStatus === 400 ? (
        <Box className={classes.controlAlert}>
          <Alert severity="error" icon={false}>
            {infosMessage}
          </Alert>
        </Box>
      ) : null}
      {isLoading ? (
        <Box className={classes.controlAlert}>
          <LinearProgress
            variant="determinate"
            color="primary"
            value={progress}
          />
        </Box>
      ) : null}
      <Paper className={classes.controlWidth}>
        <Box p={3} paddingTop={1}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={2}
            paddingLeft={0}
          >
            <Box>
              <Typography variant="h6">
                Halaman Tambah Data Kelahiran
              </Typography>
            </Box>
          </Box>
          <Box marginTop={1} marginBottom={1}>
            <Divider />
          </Box>
          <Formik
            initialValues={{
              nik: "",
              nama: "",
              tanggal_lahir: inputValueDate,
              tempat_lahir: "",
              hubungan_pelapor: "",
              agama: "",
              jenis_kelamin: "",
              nik_ayah: "",
              nik_ibu: "",
            }}
            enableReinitialize={true}
            onSubmit={(values, { resetForm }) => {
              const onSuccess = () => resetForm();

              postKelahiran(values, onSuccess);
            }}
          >
            {() => (
              <Form>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-around"
                  alignItems="center"
                >
                  <Box>
                    <Box>
                      <FastField
                        component={TextFormField}
                        variant="filled"
                        name="nik"
                        id="nik"
                        label="Nomor Induk Keluarga"
                        className={classes.controlInput}
                      />
                    </Box>
                    <Box>
                      <FastField
                        component={TextFormField}
                        variant="filled"
                        name="nama"
                        id="nama"
                        label="Nama Lengkap"
                        className={classes.controlInput}
                      />
                    </Box>
                    <Box>
                      <FastField
                        component={TextFormField}
                        variant="filled"
                        name="tempat_lahir"
                        id="tempat_lahir"
                        label="Tempat Lahir"
                        className={classes.controlInput}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <MuiPickersUtilsProvider
                        libInstance={moment}
                        utils={MomentUtils}
                      >
                        <FastField
                          component={KeyboardDatePicker}
                          autoOk={true}
                          margin="normal"
                          id="date-picker-dialog"
                          label="Tanggal Lahir"
                          format="LL"
                          name="tanggal_lahir"
                          size="medium"
                          inputValue={inputValueDate}
                          value={selectedDate}
                          rifmFormatter={dateFormatter}
                          className={classes.controlInput}
                          style={{ marginBottom: 0 }}
                          onChange={handleDateChange}
                          KeyboardButtonProps={{
                            "aria-label": "change date",
                          }}
                        />
                      </MuiPickersUtilsProvider>
                    </Box>
                    <Box marginTop={2.2}>
                      <FastField
                        component={TextFormField}
                        variant="filled"
                        name="agama"
                        id="agama"
                        label="Agama"
                        className={classes.controlInput}
                      />
                    </Box>
                    <Box>
                      <FastField
                        component={TextFormField}
                        variant="filled"
                        name="jenis_kelamin"
                        id="jenis_kelamin"
                        label="Jenis Kelamin"
                        className={classes.controlInput}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <FastField
                        component={TextFormField}
                        variant="filled"
                        name="hubungan_pelapor"
                        id="hubungan_pelapor"
                        label="Hubungan Pelapor"
                        className={classes.controlInput}
                      />
                    </Box>
                    <Box>
                      <FastField
                        component={TextFormField}
                        variant="filled"
                        name="nik_ayah"
                        id="nik_ayah"
                        label="NIK Ayah"
                        className={classes.controlInput}
                      />
                    </Box>
                    <Box>
                      <FastField
                        component={TextFormField}
                        variant="filled"
                        name="nik_ibu"
                        id="nik_ibu"
                        label="NIK Ibu"
                        className={classes.controlInput}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box marginTop={2} marginBottom={2}>
                  <Divider />
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Box>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        history.push("/kelahiran");
                      }}
                      className={classes.backButton}
                    >
                      Kembali
                    </Button>
                  </Box>
                  <Box marginLeft={1} marginRight={1}></Box>
                  <Box>
                    <Button type="submit" className={classes.insertButton}>
                      Tambahkan
                    </Button>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Paper>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    infosStatus: state.infos.status,
    infosMessage: state.infos.message,
    isLoading: state.kelahiran.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postKelahiran: (requests, onSuccess) =>
      dispatch(postKelahiran(requests, onSuccess)),
    clearInfos: () => dispatch(clearInfos()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KelahiranInsertPage);