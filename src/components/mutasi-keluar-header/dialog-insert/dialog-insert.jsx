import React, { useState } from "react";
import { useStyles } from "./dialog-insert.style";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextFormField } from "../../styled-textfield/styled-textfield";
import { FastField, Form, Formik } from "formik";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import {
  Box,
  IconButton,
  FormControl,
  InputLabel,
  FilledInput,
  FormHelperText,
} from "@material-ui/core";
import { connect } from "react-redux";
import { postKeteranganKeluar } from "../../../reducers/pengikut_keluar/pengikut_keluar.actions";

const KeteranganKeluarInsert = ({ ...props }) => {
  const classes = useStyles();
  const {
    postKeteranganKeluar,
    open,
    handleClose,
    dataPengikutKeluar,
    data,
    change,
  } = props;
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [selectedDateLeave, setSelectedDateLeave] = useState(new Date());

  const handleDateChangeLeave = (date) => {
    setSelectedDateLeave(date);
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Tambah Keterangan Keluar
        </DialogTitle>
        <DialogContent>
          <Formik
            initialValues={{
              id: data._id,
              pengikut: dataPengikutKeluar.length,
              tanggal_ktp: selectedDate
                .toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })
                .replace(/\//g, " "),
              alamat_pindah: "",
              meninggalkan_desa_pada: selectedDateLeave
                .toLocaleDateString("id-ID", {
                  year: "numeric",
                  month: "long",
                  day: "2-digit",
                })
                .replace(/\//g, " "),
              foto_pengusul: "",
              alasan_pindah: "",
              catatan: "",
            }}
            enableReinitialize={true}
            onSubmit={(values) => {
              const { data } = DataSet(values);
              postKeteranganKeluar(data, values.id);
            }}
          >
            {({ handleChange, setFieldValue, values }) => (
              <Form>
                <DialogContentText>
                  Tambah Keterangan Keluar untuk Pengusul yang bernama{" "}
                  <span style={{ textDecoration: "underline" }}>
                    {data.nama_lengkap}
                  </span>
                </DialogContentText>
                <Box>
                  <FormControl
                    disabled
                    className={classes.pengikutTextField}
                    onChange={handleChange}
                    variant="filled"
                  >
                    <InputLabel htmlFor="component-disabled">Name</InputLabel>
                    <FilledInput
                      id="component-disabled"
                      name="pengikut"
                      onChange={handleChange}
                      value={dataPengikutKeluar.length}
                    />
                  </FormControl>
                </Box>
                <Box>
                  <MuiPickersUtilsProvider
                    name="tanggal_ktp"
                    utils={DateFnsUtils}
                  >
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="Tanggal KTP"
                      name="tanggal_ktp"
                      format="dd/MM/yyyy"
                      value={selectedDate}
                      style={{ marginLeft: "2px" }}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Box>
                <Box>
                  <MuiPickersUtilsProvider
                    name="meninggalkan_desa_pada"
                    utils={DateFnsUtils}
                  >
                    <KeyboardDatePicker
                      margin="normal"
                      id="date-picker-dialog"
                      label="Meninggalkan Desa Pada"
                      name="tanggal_ktp"
                      format="dd/MM/yyyy"
                      value={selectedDateLeave}
                      style={{ marginLeft: "2px" }}
                      onChange={handleDateChangeLeave}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Box>
                <Box>
                  <FastField
                    margin="dense"
                    component={TextFormField}
                    label="Alamat Pindah"
                    name="alamat_pindah"
                    size="small"
                    id="alamat_pindah"
                    fullWidth
                    variant="filled"
                  />
                </Box>
                <Box>
                  <FastField
                    margin="dense"
                    component={TextFormField}
                    label="Alasan Pindah"
                    name="alasan_pindah"
                    size="small"
                    id="alasan_pindah"
                    fullWidth
                    variant="filled"
                  />
                </Box>
                <Box>
                  <FastField
                    margin="dense"
                    component={TextFormField}
                    label="Catatan"
                    name="catatan"
                    size="small"
                    id="catatan"
                    fullWidth
                    variant="filled"
                  />
                </Box>
                <Box marginTop={2}>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-file"
                    type="file"
                    name="foto_pengusul"
                    onChange={(e) => {
                      change.bind();
                      setFieldValue("foto_pengusul", e.currentTarget.files[0]);
                    }}
                  />
                  <label htmlFor="icon-button-file">
                    <Box marginBottom={1}>
                      <InputLabel
                        style={{ fontSize: "14px", marginLeft: "1px" }}
                        htmlFor="icon-button-file"
                      >
                        Foto Pengusul
                      </InputLabel>
                    </Box>
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      style={{ width: "80px", height: "80px" }}
                    >
                      <PhotoCamera style={{ width: "35px", height: "35px" }} />
                    </IconButton>
                  </label>
                  <FormHelperText className={classes.controlFileName}>
                    {values.foto_pengusul.name}
                  </FormHelperText>
                </Box>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose} color="primary" type="submit">
                    Tambahkan
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

const DataSet = (values) => {
  let data = new FormData();

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
    postKeteranganKeluar: (val, id) => dispatch(postKeteranganKeluar(val, id)),
  };
};

export default connect(null, mapDispatchToProps)(KeteranganKeluarInsert);
