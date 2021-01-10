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
import { deleteDataKelahiran } from "../../../reducers/kelahiran/kelahiran.actions";

const DialogDeleteKelahiranComponent = ({ ...props }) => {
  const { open, handleClose, data, deleteDataKelahiran } = props;
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
          initialValues={{ idToDelete: data._id }}
          enableReinitialize={true}
          onSubmit={(values) => {
            deleteDataKelahiran(values.idToDelete);
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
                    APAKAH ANDA YAKIN INGIN MENGHAPUS DATA KELAHIRAN ATAS NAMA{" "}
                    <span style={{ textDecoration: "underline" }}>
                      {`${data.nama}`.toUpperCase()}
                    </span>{" "}
                    ?
                  </Typography>
                </Box>
                <DialogContent>
                  <Typography className={classes.consText}>
                    Data akan dihapus. Anda dapat menambahkan kembali pada
                    halaman kelahiran.
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
    deleteDataKelahiran: (id) => dispatch(deleteDataKelahiran(id)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DialogDeleteKelahiranComponent);
