import {
  Box,
  Container,
  IconButton,
  FormControl,
  InputLabel,
  FilledInput,
} from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { useStyles } from "./keterangan-keluar.style";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { StyledTextField } from "../../styled-textfield/styled-textfield";
import { Form, Formik } from "formik";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export const KeteranganKeluarComponent = ({ data, dataPengikutKeluar }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(
    new Date("2020-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <React.Fragment>
          <Box
            marginTop={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="2px dotted #9e9e9e"
            borderRadius="20px"
            p={3}
          >
            <IconButton
              color="primary"
              onClick={handleClickOpen}
              className={classes.iconButton}
            >
              <AddIcon color="primary" className={classes.addIcon} />
            </IconButton>
          </Box>
          <Box p={2}></Box>
        </React.Fragment>
        {/* <Box display="flex" flexDirection="column">
              <Box display="flex" p={3} flexDirection="row">
                <Box marginLeft={1} display="flex" flexDirection="column">
                  <Box>
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      Tanggal KTP : 21 Maret 2020
                    </Typography>
                  </Box>
                  <Box marginTop={1}>
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      Alamat Pindah : Menteng, Jakarta
                    </Typography>
                  </Box>
                  <Box marginTop={1}>
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      Pengikut : 4 Orang
                    </Typography>
                  </Box>
                  <Box marginTop={1}>
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      Alasan Pindah : Dinas
                    </Typography>
                  </Box>
                  <Box marginTop={1}>
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      Catatan : Tidak ada
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box> */}
      </Container>
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
              pengikut: dataPengikutKeluar.length,
              tanggal_ktp: selectedDate.toISOString().split("T")[0],
              alamat_pindah: "",
              catatan: "",
            }}
            enableReinitialize={true}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ handleChange }) => (
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
                      format="MM/dd/yyyy"
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
                  <StyledTextField
                    margin="dense"
                    id="alamat_pindah"
                    name="alamat_pindah"
                    label="Alamat Pindah"
                    type="text"
                    onChange={handleChange}
                    variant="filled"
                    fullWidth
                    size="small"
                  />
                </Box>
                <Box>
                  <StyledTextField
                    margin="dense"
                    id="catatan"
                    name="catatan"
                    label="Catatan"
                    type="text"
                    variant="filled"
                    onChange={handleChange}
                    fullWidth
                    size="small"
                  />
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
