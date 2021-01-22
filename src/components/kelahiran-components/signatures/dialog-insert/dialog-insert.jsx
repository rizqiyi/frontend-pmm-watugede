import { Dialog, Typography, Box, Button, Divider } from "@material-ui/core";
import { Formik, Form, FastField } from "formik";
import React from "react";
import { connect } from "react-redux";
import { postSignatureKelahiran } from "../../../../reducers/signatures/signatures.actions";
import { TextFormField } from "../../../styled-textfield/styled-textfield";
import { useStyles } from "./dialog-insert.style";

const DialogInsertSignatureComponent = ({ ...props }) => {
  const { open, handleClose, postSignatureKelahiran, dataKelahiran } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={(e) => {
          e.preventDefault();
          handleClose(false);
        }}
        maxWidth={"lg"}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Box p={3}>
          <Formik
            initialValues={{
              id: dataKelahiran._id,
              nama_lengkap: "",
              nama_jabatan: "",
            }}
            enableReinitialize={true}
            onSubmit={(values) => {
              postSignatureKelahiran(values, values.id);
              handleClose(false);
            }}
          >
            {() => (
              <Form>
                <Typography variant="h6">Tambahkan Data TTD</Typography>
                <Box marginTop={0.5} marginBottom={1}>
                  <Divider />
                </Box>
                <Box className={classes.controlForm}>
                  <Box>
                    <Box>
                      <FastField
                        size="medium"
                        component={TextFormField}
                        variant="filled"
                        name="nama_jabatan"
                        id="nama_jabatan"
                        label="Nama Jabatan"
                        className={classes.controlInput}
                      />
                    </Box>
                    <Box>
                      <FastField
                        size="medium"
                        component={TextFormField}
                        variant="filled"
                        name="nama_lengkap"
                        id="nama_lengkap"
                        label="Nama Lengkap"
                        className={classes.controlInput}
                      />
                    </Box>
                  </Box>
                </Box>
                <Box marginTop={1} marginBottom={1}>
                  <Divider />
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="flex-end"
                >
                  <Box marginRight={2}>
                    <Button
                      className={classes.cancelButton}
                      onClick={(e) => {
                        e.preventDefault();
                        handleClose(false);
                      }}
                    >
                      Kembali
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      color="primary"
                      type="submit"
                      className={classes.insertButton}
                    >
                      Tambahkan
                    </Button>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Dialog>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postSignatureKelahiran: (requests, idKelahiran) =>
      dispatch(postSignatureKelahiran(requests, idKelahiran)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DialogInsertSignatureComponent);
