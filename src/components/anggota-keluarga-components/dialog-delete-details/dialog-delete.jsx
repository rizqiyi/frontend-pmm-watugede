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
import deleteDataImage from "../../../assets/images/delete-data.svg";
import { Form, Formik } from "formik";
import { deleteAnggotaKeluarga } from "../../../reducers/anggota_keluarga/anggota_keluarga.actions";

const DialogDeleteComponents = ({ ...props }) => {
  const {
    open,
    handleClose,
    idToDelete,
    deleteAnggotaKeluarga,
    paramsIdKK,
    idKepala,
  } = props;
  const classes = useStyles();

  console.log(idKepala);

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
            id: idToDelete._id,
            idKK: paramsIdKK,
            idKepalaKeluarga: idKepala,
          }}
          enableReinitialize={true}
          onSubmit={(values) => {
            deleteAnggotaKeluarga(
              values.id,
              values.idKK,
              values.idKepalaKeluarga
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
                    APAKAH ANDA YAKIN INGIN MENGHAPUS ANGGOTA KELUARGA ATAS NAMA{" "}
                    <span style={{ textDecoration: "underline" }}>
                      {`${idToDelete.nama_lengkap.toUpperCase()}`}
                    </span>{" "}
                    ?
                  </Typography>
                </Box>
                <DialogContent>
                  <Typography className={classes.consText}>
                    Data akan dihapus permanen setelah anda menekan tombol
                    delete.
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
    deleteAnggotaKeluarga: (idPenduduk, idKK, idKepalaKeluarga) =>
      dispatch(deleteAnggotaKeluarga(idPenduduk, idKK, idKepalaKeluarga)),
  };
};

export default connect(null, mapDispatchToProps)(DialogDeleteComponents);
