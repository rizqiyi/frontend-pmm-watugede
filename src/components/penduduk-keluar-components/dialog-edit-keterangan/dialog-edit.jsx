import {
  Dialog,
  Typography,
  Box,
  Button,
  Divider,
  IconButton,
  FormHelperText,
} from "@material-ui/core";
import { Formik, Form, FastField } from "formik";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React, { useState } from "react";
import { connect } from "react-redux";
import moment from "moment";
import MomentUtils from "@date-io/moment";
import localization from "moment/locale/id";
import { TextFormField } from "../../styled-textfield/styled-textfield";
import { PhotoCamera } from "@material-ui/icons";
import { keteranganKeluarUpdateValidation } from "../../../validations/mutasi-keluar";
import { useStyles } from "./dialog-edit.style";
import { updateKeteranganKeluar } from "../../../reducers/penduduk_keluar/penduduk_keluar.actions";

const DialogEditComponent = ({ ...props }) => {
  const { open, handleClose, data, updateKeteranganKeluar, paramsId } = props;
  const [selectedDate, setSelectedDate] = useState(moment());
  const [inputValueDate, setInputValueDate] = useState(
    moment().locale("id", localization).format("LL")
  );
  const [selectedDateLeave, setSelectedDateLeave] = useState(new Date());
  const [inputValueDateLeave, setInputValueDateLeave] = useState(
    moment().locale("id", localization).format("LL")
  );

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

  const classes = useStyles();

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
        <Box p={3}>
          <Formik
            validationSchema={keteranganKeluarUpdateValidation}
            initialValues={{
              idPendudukKeluar: paramsId,
              id: data._id,
              nomor_surat: data.nomor_surat,
              alamat_pindah: data.alamat_pindah,
              alasan_pindah: data.alasan_pindah,
              pengikut: data.pengikut,
              tanggal_ktp: inputValueDate,
              meninggalkan_desa_pada: inputValueDateLeave,
              catatan: data.catatan,
              foto_pengusul: data.foto_pengusul,
            }}
            enableReinitialize={true}
            onSubmit={(values) => {
              const { data } = DataSet(values);
              updateKeteranganKeluar(data, values.id, values.idPendudukKeluar);
              handleClose(false);
            }}
          >
            {({ errors, touched, setFieldValue, values }) => (
              <Form>
                <Typography variant="h6">
                  Perbarui Keterangan Penduduk Keluar
                </Typography>
                <Box marginTop={2} marginBottom={2}>
                  <Divider />
                </Box>
                <Box marginBottom={1}>
                  <Typography
                    style={{
                      fontSize: 12,
                      textDecoration: "underline",
                      fontStyle: "italic",
                      fontWeight: 600,
                    }}
                  >
                    *Harap Memperhatikan Tanggal KTP dan Tanggal Meninggalkan
                    Desa
                  </Typography>
                </Box>
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
                <FastField
                  size="medium"
                  component={TextFormField}
                  variant="filled"
                  name="alasan_pindah"
                  id="alasan_pindah"
                  label="Alasan Pindah"
                  className={classes.controlInput}
                />
                <FastField
                  size="medium"
                  component={TextFormField}
                  variant="filled"
                  name="nomor_surat"
                  id="nomor_surat"
                  label="Nomor Surat"
                  className={classes.controlInput}
                />
                <FastField
                  size="medium"
                  component={TextFormField}
                  variant="filled"
                  name="alamat_pindah"
                  id="alamat_pindah"
                  label="Alamat Pindah"
                  className={classes.controlInput}
                />
                <FastField
                  size="medium"
                  component={TextFormField}
                  variant="filled"
                  name="pengikut"
                  id="pengikut"
                  label="Pengikut"
                  className={classes.controlInput}
                />
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
                <Box marginTop={0.8}>
                  <Typography variant="body2" className={classes.fontCons}>
                    Upload Foto Pengusul
                  </Typography>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-file"
                    onChange={(e) => {
                      setFieldValue("foto_pengusul", e.currentTarget.files[0]);
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
                </Box>
                {Boolean(errors.foto_pengusul) && touched.foto_pengusul ? (
                  <FormHelperText className={classes.controlFileError}>
                    {errors.foto_pengusul}
                  </FormHelperText>
                ) : (
                  <FormHelperText className={classes.controlFileName}>
                    {values.foto_pengusul.name}
                  </FormHelperText>
                )}

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
                        handleClose(false);
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
                      Perbarui
                    </Button>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Dialog>
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateKeteranganKeluar: (request, id, idPendudukKeluar) =>
      dispatch(updateKeteranganKeluar(request, id, idPendudukKeluar)),
  };
};

export default connect(null, mapDispatchToProps)(DialogEditComponent);
