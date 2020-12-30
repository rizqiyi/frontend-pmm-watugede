import React, { useState } from "react";
import { connect } from "react-redux";
import { useStyles } from "./insert.style";
import {
  Box,
  Button,
  Divider,
  FormHelperText,
  Grow,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { TextFormField } from "../../styled-textfield/styled-textfield";
import { FastField, Form, Formik } from "formik";
import { postKeteranganKeluar } from "../../../reducers/penduduk_keluar/penduduk_keluar.actions";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import localization from "moment/locale/id";
import { useHistory } from "react-router-dom";
import { keteranganKeluarInsertValidation } from "../../../validations/mutasi-keluar";

const InsertComponents = ({ ...props }) => {
  const classes = useStyles();
  const { postKeterangan, dataId } = props;
  const [selectedDate, setSelectedDate] = useState(moment());
  const [inputValueDate, setInputValueDate] = useState(
    moment().locale("id", localization).format("LL")
  );
  const [selectedDateLeave, setSelectedDateLeave] = useState(new Date());
  const [inputValueDateLeave, setInputValueDateLeave] = useState(
    moment().locale("id", localization).format("LL")
  );
  const history = useHistory();

  const handleDateChange = (date, value) => {
    setSelectedDate(date);
    setInputValueDate(value);
  };

  const handleDateChangeLeave = (date, value) => {
    setSelectedDateLeave(date);
    setInputValueDateLeave(value);
  };

  const dateFormatter = (str) => {
    return str;
  };

  return (
    <React.Fragment>
      <Grow in>
        <Paper>
          <Formik
            initialValues={{
              id: dataId,
              nomor_surat: "",
              alamat_pindah: "",
              alasan_pindah: "",
              pengikut: "",
              tanggal_ktp: inputValueDate,
              meninggalkan_desa_pada: inputValueDateLeave,
              catatan: "",
              foto_pengusul: "",
            }}
            validationSchema={keteranganKeluarInsertValidation}
            enableReinitialize={true}
            onSubmit={(values) => {
              const { data } = DataSet(values);
              postKeterangan(data, values.id);
            }}
          >
            {({ setFieldValue, values, touched, errors }) => (
              <Form>
                <Box p={3}>
                  <Typography variant="h6">
                    Tambahkan Keterangan Penduduk Keluar
                  </Typography>
                  <Box marginTop={2} marginBottom={2}>
                    <Divider />
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="space-evenly"
                  >
                    <Box display="flex" flexDirection="column">
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
                            label="Tanggal KTP"
                            format="LL"
                            name="tanggal_ktp"
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
                            label="Tanggal Meninggalkan Desa"
                            format="LL"
                            name="meninggalkan_desa_pada"
                            size="medium"
                            inputValue={inputValueDateLeave}
                            value={selectedDateLeave}
                            rifmFormatter={dateFormatter}
                            className={classes.controlInputDate}
                            onChange={handleDateChangeLeave}
                            KeyboardButtonProps={{
                              "aria-label": "change date",
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      </Box>
                      <Box>
                        <FastField
                          size="medium"
                          component={TextFormField}
                          variant="filled"
                          name="alasan_pindah"
                          id="alasan_pindah"
                          label="Alasan Pindah"
                          className={classes.controlInput}
                        />
                      </Box>
                    </Box>
                    <Box display="flex" flexDirection="column" marginLeft={2}>
                      <Box>
                        <FastField
                          size="medium"
                          component={TextFormField}
                          variant="filled"
                          name="nomor_surat"
                          id="nomor_surat"
                          label="Nomor Surat"
                          className={classes.controlInput}
                        />
                      </Box>
                      <Box>
                        <FastField
                          size="medium"
                          component={TextFormField}
                          variant="filled"
                          name="alamat_pindah"
                          id="alamat_pindah"
                          label="Alamat Pindah"
                          className={classes.controlInput}
                        />
                      </Box>
                      <Box marginTop={1}>
                        <FastField
                          size="medium"
                          component={TextFormField}
                          variant="filled"
                          name="pengikut"
                          id="pengikut"
                          label="Pengikut"
                          className={classes.controlInput}
                        />
                      </Box>
                    </Box>
                    <Box display="flex" flexDirection="column" marginLeft={3}>
                      <Box>
                        <FastField
                          size="medium"
                          component={TextFormField}
                          variant="filled"
                          label="Catatan"
                          name="catatan"
                          id="catatan"
                          multiline
                          rows={5}
                          rowsMax={5}
                          className={classes.controlInputCatatan}
                        />
                      </Box>
                      <Box marginTop={0.8}>
                        <Typography
                          variant="body2"
                          className={classes.fontCons}
                        >
                          Upload Foto Pengusul
                        </Typography>
                        <input
                          accept="image/*"
                          className={classes.input}
                          id="icon-button-file"
                          onChange={(e) => {
                            setFieldValue(
                              "foto_pengusul",
                              e.currentTarget.files[0]
                            );
                          }}
                          type="file"
                        />
                        <label htmlFor="icon-button-file">
                          <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="span"
                          >
                            <PhotoCamera />
                          </IconButton>
                        </label>
                        {Boolean(errors.foto_pengusul) &&
                        touched.foto_pengusul ? (
                          <FormHelperText className={classes.controlFileError}>
                            {errors.foto_pengusul}
                          </FormHelperText>
                        ) : (
                          <FormHelperText className={classes.controlFileName}>
                            {values.foto_pengusul.name}
                          </FormHelperText>
                        )}
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-end"
                    marginRight={2.3}
                    marginTop={
                      Boolean(errors.foto_pengusul) && touched.foto_pengusul
                        ? 3
                        : 0
                    }
                  >
                    <Box marginRight={2}>
                      <Button
                        className={classes.cancelButton}
                        onClick={(e) => {
                          e.preventDefault();
                          history.push("/penduduk_keluar");
                        }}
                      >
                        Kembali
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        color="primary"
                        type="submit"
                        className={classes.insertButton}
                      >
                        Tambahkan
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grow>
    </React.Fragment>
  );
};

const DataSet = (values) => {
  let data = new FormData();

  data.set("nomor_surat", values.nomor_surat);
  data.set("alamat_pindah", values.alamat_pindah);
  data.set("alasan_pindah", values.alasan_pindah);
  data.set("pengikut", values.pengikut);
  data.set("tanggal_ktp", values.tanggal_ktp);
  data.set("meninggalkan_desa_pada", values.meninggalkan_desa_pada);
  data.set("catatan", values.catatan);

  data.append("foto_pengusul", values.foto_pengusul);

  return { data };
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    postKeterangan: (val, id) => dispatch(postKeteranganKeluar(val, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InsertComponents);
