import React from "react";
import { connect } from "react-redux";
import {
  Dialog,
  DialogActions,
  DialogContent,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import { useStyles } from "./dialog-delete.style";
import deleteDataImage from "../../../assets/images/delete-data.svg";
import { Form, Formik } from "formik";
import { deleteDataKematian } from "../../../reducers/kematian/kematian.actions";

const DialogDeleteComponent = ({ ...props }) => {
  const classes = useStyles();
  const { open, handleClose, data, childData, deleteDataKematian } = props;

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
            idData: data._id,
          }}
          enableReinitialize={true}
          onSubmit={(values) => {
            deleteDataKematian(values.idData);
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
                    APAKAH ANDA YAKIN INGIN MENGHAPUS DATA KEMATIAN ATAS NAMA{" "}
                    <span style={{ textDecoration: "underline" }}>
                      {`${childData.nama_lengkap}`.toUpperCase()}
                    </span>{" "}
                    ?
                  </Typography>
                </Box>
                <DialogContent>
                  <Typography className={classes.consText}>
                    Anda dapat menambahkan kembali pada halaman edit penduduk.
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
    deleteDataKematian: (id) => dispatch(deleteDataKematian(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogDeleteComponent);
