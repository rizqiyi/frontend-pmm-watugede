import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { deletePengikutKeluar } from "../../../reducers/penduduk_keluar/penduduk_keluar.actions";
import { useStyles } from "./dialog-delete.style";

const DialogDeleteComponent = ({ ...props }) => {
  const {
    idPengusul,
    idPengikut,
    open,
    handleClose,
    deletePengikutKeluar,
  } = props;
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
        <Formik
          initialValues={{ idPengusul, idPengikut: idPengikut._id }}
          enableReinitialize={true}
          onSubmit={(values) => {
            deletePengikutKeluar(idPengusul, values.idPengikut);
            handleClose(false);
          }}
        >
          {() => (
            <Form>
              <DialogTitle id="alert-dialog-title">
                Hapus Pengikut Keluar
              </DialogTitle>
              <DialogContent>
                <DialogContentText
                  id="alert-dialog-description"
                  style={{ lineHeight: 1.8 }}
                >
                  Apakah anda yakin ingin menghapus pengikut keluar atas nama{" "}
                  <span style={{ textDecoration: "underline" }}>
                    {idPengikut.nama_lengkap_keluarga}
                  </span>
                  . Anda dapat menambahkan pengikut keluar kembali pada halaman
                  mutasi keluar.
                </DialogContentText>
              </DialogContent>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                p={2}
              >
                <Box marginRight={2}>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      handleClose(false);
                    }}
                    className={classes.backButton}
                  >
                    KEMBALI
                  </Button>
                </Box>
                <Box marginLeft={2}>
                  <Button type="submit" className={classes.deleteButton}>
                    HAPUS
                  </Button>
                </Box>
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
    deletePengikutKeluar: (idPenduduk, idPengikut) =>
      dispatch(deletePengikutKeluar(idPenduduk, idPengikut)),
  };
};

export default connect(null, mapDispatchToProps)(DialogDeleteComponent);
