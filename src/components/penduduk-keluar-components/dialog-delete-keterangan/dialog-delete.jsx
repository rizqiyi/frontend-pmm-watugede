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
import { deleteKeteranganKeluar } from "../../../reducers/penduduk_keluar/penduduk_keluar.actions";

const DialogDeleteKeteranganComponent = ({ ...props }) => {
  const {
    open,
    handleClose,
    data,
    idDataKeluar,
    deleteKeteranganKeluar,
  } = props;
  const classes = useStyles();

  const checkValues = (val) => {
    return val ? val : "";
  };

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
            id: checkValues(data._id),
            idDataKeluar,
          }}
          enableReinitialize={true}
          onSubmit={(values) => {
            deleteKeteranganKeluar(values.idDataKeluar, values.id);
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
                    APAKAH ANDA YAKIN INGIN MENGHAPUS KETERANGAN PENDUDUK KELUAR
                    ?
                  </Typography>
                </Box>
                <DialogContent>
                  <Typography className={classes.consText}>
                    Data akan dihapus. Anda dapat menambahkan kembali pada
                    halaman ini.
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
    deleteKeteranganKeluar: (idDataKeluar, idKeterangan) =>
      dispatch(deleteKeteranganKeluar(idDataKeluar, idKeterangan)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DialogDeleteKeteranganComponent);
