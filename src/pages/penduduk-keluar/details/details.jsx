import DateFnsUtils from "@date-io/date-fns";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React, { useState } from "react";
import { connect } from "react-redux";
import { StyledTextField } from "../../../components/styled-textfield/styled-textfield";
import { useStyles } from "./details.style";

const PendudukKeluarDetailPage = (props) => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateLeave, setSelectedDateLeave] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDateChangeLeave = (date) => {
    setSelectedDateLeave(date);
  };

  return (
    <React.Fragment>
      <Paper>
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
                <StyledTextField
                  size="medium"
                  variant="filled"
                  label="Nomor Surat"
                  className={classes.controlInput}
                />
              </Box>
              <Box>
                <StyledTextField
                  size="medium"
                  variant="filled"
                  label="Alamat Pindah"
                  className={classes.controlInput}
                />
              </Box>
              <Box>
                <StyledTextField
                  size="medium"
                  variant="filled"
                  label="Alasan Pindah"
                  className={classes.controlInput}
                />
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" marginLeft={2}>
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
                    size="medium"
                    value={selectedDate}
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
                  name="meninggalkan_desa_pada"
                  utils={DateFnsUtils}
                >
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Tanggal Meninggalkan Desa"
                    name="meninggalkan_desa_pada"
                    format="dd/MM/yyyy"
                    size="medium"
                    value={selectedDateLeave}
                    className={classes.controlInputDate}
                    onChange={handleDateChangeLeave}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Box>
            </Box>
            <Box display="flex" flexDirection="column" marginLeft={3}>
              <Box>
                <StyledTextField
                  size="medium"
                  variant="filled"
                  label="Catatan"
                  multiline
                  rows={5}
                  rowsMax={5}
                  className={classes.controlInputCatatan}
                />
              </Box>
              <Box marginTop={0.8}>
                <Typography variant="body2" className={classes.fontCons}>
                  Upload Foto Pengusul
                </Typography>
                <input
                  accept="image/*"
                  className={classes.input}
                  id="icon-button-file"
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
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            marginRight={2.3}
          >
            <Box marginRight={2}>
              <Button className={classes.cancelButton}>Kembali</Button>
            </Box>
            <Box>
              <Button color="primary" className={classes.insertButton}>
                Tambahkan
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendudukKeluarDetailPage);
