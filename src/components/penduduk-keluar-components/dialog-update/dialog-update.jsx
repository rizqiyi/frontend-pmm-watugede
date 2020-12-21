import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { FastField, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { updatePengikutKeluar } from "../../../reducers/penduduk_keluar/penduduk_keluar.actions";
import { TextFormField } from "../../styled-textfield/styled-textfield";
import { useStyles } from "../dialog-update/dialog-update.style";

const DialogUpdateComponent = ({ ...props }) => {
  const classes = useStyles();
  const { open, handleClose, data, idPengusul, updatePengikut } = props;
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={(e) => {
          e.preventDefault();
          handleClose(false);
        }}
        aria-labelledby="form-dialog-title"
      >
        <Formik
          initialValues={{
            id_pengikut_keluar: data._id,
            nama_lengkap_keluarga: data.nama_lengkap_keluarga,
            nik_keluarga: data.nik_keluarga,
            jenis_kelamin_keluarga: data.jenis_kelamin_keluarga,
            umur_keluarga: data.umur_keluarga,
            keterangan_dalam_keluarga: data.keterangan_dalam_keluarga,
            status_perkawinan_keluarga: data.status_perkawinan_keluarga,
          }}
          enableReinitialize={true}
          onSubmit={(values) => {
            updatePengikut(values, idPengusul, values.id_pengikut_keluar);
            handleClose(false);
          }}
        >
          {() => (
            <Form>
              <DialogTitle id="form-dialog-title">
                Update Data Pengikut Keluar
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Silakan perbarui field yang akan diubah, data yang akan diubah
                  atas nama{" "}
                  <span style={{ textDecoration: "underline" }}>
                    {data.nama_lengkap_keluarga}
                  </span>
                </DialogContentText>
                <Box>
                  <FastField
                    component={TextFormField}
                    label="NIK"
                    name="nik_keluarga"
                    fullWidth
                    className={classes.textField}
                    id="nik_keluarga"
                    variant="filled"
                  />
                  <FastField
                    component={TextFormField}
                    label="Nama Lengkap"
                    name="nama_lengkap_keluarga"
                    fullWidth
                    className={classes.textField}
                    id="nama_lengkap_keluarga"
                    variant="filled"
                  />
                  <FastField
                    component={TextFormField}
                    label="Umur"
                    name="umur_keluarga"
                    fullWidth
                    className={classes.textField}
                    id="umur_keluarga"
                    variant="filled"
                  />
                  <FastField
                    component={TextFormField}
                    label="Jenis Kelamin"
                    name="jenis_kelamin_keluarga"
                    fullWidth
                    className={classes.textField}
                    id="jenis_kelamin_keluarga"
                    variant="filled"
                  />
                  <FastField
                    component={TextFormField}
                    label="Posisi Dalam Keluarga"
                    name="keterangan_dalam_keluarga"
                    fullWidth
                    className={classes.textField}
                    id="keterangan_dalam_keluarga"
                    variant="filled"
                  />
                  <FastField
                    component={TextFormField}
                    label="Status Perkawinan"
                    name="status_perkawinan_keluarga"
                    fullWidth
                    className={classes.textField}
                    id="status_perkawinan_keluarga"
                    variant="filled"
                  />
                </Box>
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    handleClose(false);
                  }}
                  className={classes.backButton}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  className={classes.updateButton}
                  type="submit"
                  color="primary"
                >
                  Perbarui
                </Button>
              </DialogActions>
            </Form>
          )}
        </Formik>
      </Dialog>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePengikut: (values, idPenduduk, idPengikut) =>
      dispatch(updatePengikutKeluar(values, idPenduduk, idPengikut)),
  };
};

export default connect(null, mapDispatchToProps)(DialogUpdateComponent);
