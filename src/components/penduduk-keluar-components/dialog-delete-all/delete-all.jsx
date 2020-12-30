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
import { useStyles } from "./delete-all.style";
import deleteDataImage from "../../../assets/images/delete-data.svg";
import { deleteAllDataPendudukKeluar } from "../../../reducers/penduduk_keluar/penduduk_keluar.actions";
import { useHistory } from "react-router-dom";

const DialogDeleteAllComponent = ({ ...props }) => {
  const { handleClose, open, id, deleteAllDataPendudukKeluar } = props;
  const classes = useStyles();
  const history = useHistory();

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
            id,
          }}
          enableReinitialize={true}
          onSubmit={(values) => {
            const onSuccess = () => history.push("/penduduk_keluar");
            deleteAllDataPendudukKeluar(values.id, onSuccess);
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
                    APAKAH ANDA YAKIN INGIN MENGHAPUS{" "}
                    <span
                      style={{
                        textDecoration: "underline",
                        fontWeight: "bold",
                      }}
                    >
                      SEMUA DATA
                    </span>{" "}
                    PENDUDUK KELUAR ?
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

const mapDispatchToProps = (dispatch) => {
  return {
    deleteAllDataPendudukKeluar: (id, onSuccess) =>
      dispatch(deleteAllDataPendudukKeluar(id, onSuccess)),
  };
};

export default connect(null, mapDispatchToProps)(DialogDeleteAllComponent);
