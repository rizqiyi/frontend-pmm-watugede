import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { useStyles } from "./dialog-delete.style";
import deleteDataImage from "../../../assets/images/delete-data.svg";
import { deletePendudukKeluar } from "../../../reducers/penduduk_keluar/penduduk_keluar.actions";

const DialogDeleteComponent = ({ ...props }) => {
  const {
    open,
    handleClose,
    id,
    dataPendudukKeluar,
    deletePendudukKeluar,
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
          initialValues={{
            idPendudukKeluar: id,
            dataPendudukKeluarID: dataPendudukKeluar._id,
          }}
          enableReinitialize={true}
          onSubmit={(values) => {
            deletePendudukKeluar(
              values.dataPendudukKeluarID,
              values.idPendudukKeluar
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
                    APAKAH ANDA YAKIN INGIN MENGHAPUS PENDUDUK KELUAR ATAS NAMA
                    <span style={{ textDecoration: "underline" }}>
                      {`${dataPendudukKeluar.nama_lengkap}`.toUpperCase()}
                    </span>{" "}
                    ?
                  </Typography>
                </Box>
                <DialogContent>
                  <Typography className={classes.consText}>
                    Data akan dihapus. Anda dapat menambahkan kembali pada
                    halaman edit anggota keluarga.
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePendudukKeluar: (idPenduduk, idData) =>
      dispatch(deletePendudukKeluar(idPenduduk, idData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogDeleteComponent);
