import {
  Box,
  Button,
  Dialog,
  DialogActions,
  Typography,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import mutasiDataImage from "../../../assets/images/delete-data.svg";
import { postManyPendudukKeluar } from "../../../reducers/penduduk_keluar/penduduk_keluar.actions";
import { useStyles } from "./mutasi-dialogs-all.style";

const MutasiDialogAll = ({ ...props }) => {
  const { handleClose, open, postManyPendudukKeluar, idKK, idKepala } = props;
  const classes = useStyles();

  console.log(idKK);

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
          initialValues={{ idKK, idKepala }}
          onSubmit={(values) => {
            postManyPendudukKeluar(values.idKK, values.idKepala);
            handleClose(false);
          }}
        >
          {() => (
            <Form>
              <Box
                p={3}
                display="flex"
                paddingLeft={10}
                paddingRight={10}
                justifyContent="center"
                alignItems="center"
                flexDirection="column"
              >
                <Box display="flex" justifyContent="center">
                  <img
                    src={mutasiDataImage}
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
                  marginBottom={2}
                >
                  <Typography className={classes.questionText}>
                    APAKAH ANDA YAKIN INGIN MELAKUKAN PROSES MUTASI{" "}
                    <span style={{ textDecoration: "underline" }}>
                      SELURUH KELUARGA
                    </span>{" "}
                    ?
                  </Typography>
                </Box>
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
    postManyPendudukKeluar: (idKK, idKepala) =>
      dispatch(postManyPendudukKeluar(idKK, idKepala)),
  };
};

export default connect(null, mapDispatchToProps)(MutasiDialogAll);
