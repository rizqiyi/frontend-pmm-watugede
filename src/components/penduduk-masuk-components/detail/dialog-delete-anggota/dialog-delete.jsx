import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { useStyles } from "./dialog-delete.style";
import deleteDataImage from "../../../../assets/images/delete-data.svg";
import { Form, Formik } from "formik";
import { deletePendudukMasukPadaKK } from "../../../../reducers/penduduk_masuk/penduduk_masuk.actions";

const DialogDeleteAnggotaComponent = ({ ...props }) => {
  const {
    open,
    handleClose,
    idToDelete,
    paramsIdKepala,
    paramsIdKK,
    deletePendudukMasukPadaKK,
  } = props;
  const classes = useStyles();

  console.log(idToDelete);
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
            idPendudukMasuk: idToDelete ? idToDelete._id : "",
            idKepala: paramsIdKepala,
            idKK: paramsIdKK,
          }}
          enableReinitialize={true}
          onSubmit={(values) => {
            deletePendudukMasukPadaKK(
              values.idKK,
              values.idPendudukMasuk,
              values.idKepala
            );
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
                <Box display="flex" justifyContent="center">
                  <img
                    src={deleteDataImage}
                    style={{ height: "130px", width: "auto" }}
                    alt="Delete Data"
                  />
                </Box>
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
                    APAKAH ANDA YAKIN INGIN MENGHAPUS DATA PENDUDUK MASUK ATAS
                    NAMA{" "}
                    <span style={{ textDecoration: "underline" }}>
                      {`${idToDelete.nama_lengkap}`.toUpperCase()}
                    </span>{" "}
                    ?
                  </Typography>
                </Box>
                <DialogContent>
                  <Typography className={classes.consText}>
                    Data akan dihapus permanen setelah anda menekan tombol
                    hapus.
                  </Typography>
                </DialogContent>
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
                    className={classes.deleteButton}
                  >
                    Hapus
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
    deletePendudukMasukPadaKK: (idKK, idPendudukMasuk, idKepala) =>
      dispatch(deletePendudukMasukPadaKK(idKK, idPendudukMasuk, idKepala)),
  };
};

export default connect(null, mapDispatchToProps)(DialogDeleteAnggotaComponent);
