import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Typography,
} from "@material-ui/core";
import { FastField, Form, Formik } from "formik";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useStyles } from "./dialog-kematian.style";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import localization from "moment/locale/id";
import moment from "moment";
import { TextFormField } from "../../styled-textfield/styled-textfield";
import { postKematian } from "../../../reducers/kematian/kematian.actions";

const DialogKematianComponent = ({ ...props }) => {
  const { open, handleClose, data, postKematian } = props;
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(moment());
  const [inputValueDate, setInputValueDate] = useState(
    moment().locale("id", localization).format("LL")
  );

  const handleDateChange = (date, value) => {
    setSelectedDate(date);
    setInputValueDate(value);
  };

  const dateFormatter = (str) => {
    return str;
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={(e) => {
          e.preventDefault();
          handleClose(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Formik
          initialValues={{
            idPenduduk: data._id,
            tanggal_meninggal: inputValueDate,
            tempat_meninggal: "",
            penyebab_meninggal: "",
          }}
          enableReinitialize={true}
          onSubmit={(values) => {
            postKematian(values, values.idPenduduk);
            handleClose(false);
          }}
        >
          {() => (
            <Form>
              <Box
                p={3}
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  textAlign="center"
                  maxWidth={400}
                  marginTop={3}
                  marginBottom={0.8}
                >
                  <Typography className={classes.questionText}>
                    APAKAH ANDA YAKIN INGIN MENAMBAHKAN{" "}
                    <span style={{ textDecoration: "underline" }}>
                      {`${data.nama_lengkap}`.toUpperCase()}
                    </span>{" "}
                    KE DATA KEMATIAN ?
                  </Typography>
                </Box>
                <Box p={3}>
                  <Typography className={classes.consText}>
                    Harap menambahkan arsip kematian pada halaman kematian.
                  </Typography>
                  <Box marginBottom={2}>
                    <MuiPickersUtilsProvider
                      libInstance={moment}
                      utils={MomentUtils}
                    >
                      <FastField
                        component={KeyboardDatePicker}
                        autoOk={true}
                        margin="normal"
                        id="date-picker-dialog"
                        label="Tanggal Meninggal"
                        format="LL"
                        name="tanggal_meninggal"
                        size="medium"
                        inputValue={inputValueDate}
                        value={selectedDate}
                        rifmFormatter={dateFormatter}
                        className={classes.controlInputDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                          "aria-label": "change date",
                        }}
                      />
                    </MuiPickersUtilsProvider>
                  </Box>
                  <Box marginBottom={1}>
                    <FastField
                      size="medium"
                      component={TextFormField}
                      variant="filled"
                      name="tempat_meninggal"
                      id="tempat_meninggal"
                      label="Tempat Meninggal"
                      className={classes.controlInput}
                    />
                  </Box>
                  <Box>
                    <FastField
                      size="medium"
                      component={TextFormField}
                      variant="filled"
                      name="penyebab_meninggal"
                      id="penyebab_meninggal"
                      label="Penyebab Meninggal"
                      className={classes.controlInput}
                    />
                  </Box>
                </Box>
                <DialogActions>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      handleClose(false);
                    }}
                    className={classes.backButton}
                  >
                    Batal
                  </Button>
                  <Box marginRight={1} marginLeft={1}></Box>
                  <Button
                    color="primary"
                    type="submit"
                    className={classes.insertButton}
                  >
                    Tambahkan
                  </Button>
                </DialogActions>
              </Box>
            </Form>
          )}
        </Formik>
      </Dialog>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postKematian: (requests, id) => dispatch(postKematian(requests, id)),
  };
};

export default connect(null, mapDispatchToProps)(DialogKematianComponent);
