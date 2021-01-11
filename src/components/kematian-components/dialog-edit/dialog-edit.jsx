import { Dialog, Typography, Box, Button, Divider } from "@material-ui/core";
import { Formik, Form, FastField } from "formik";
import { connect } from "react-redux";
import { TextFormField } from "../../styled-textfield/styled-textfield";
import React from "react";
import { useStyles } from "./dialog-edit.style";
import { updateDataKematian } from "../../../reducers/kematian/kematian.actions";

const DialogEditComponent = ({ ...props }) => {
  const { open, handleClose, updateDataKematian, data } = props;
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
        <Box p={3}>
          <Formik
            initialValues={{
              idData: data._id,
              tanggal_meninggal: data.tanggal_meninggal,
              tempat_meninggal: data.tempat_meninggal,
              penyebab_meninggal: data.penyebab_meninggal,
            }}
            enableReinitialize={true}
            onSubmit={(values) => {
              updateDataKematian(values, values.idData);
              handleClose(false);
            }}
          >
            {() => (
              <Form>
                <Typography variant="h6">
                  Perbarui Keterangan Penduduk Meninggal
                </Typography>
                <Box marginTop={2} marginBottom={2}>
                  <Divider />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Box>
                    <FastField
                      size="medium"
                      component={TextFormField}
                      variant="filled"
                      name="tanggal_meninggal"
                      id="tanggal_meninggal"
                      label="Tanggal Meninggal"
                      className={classes.controlInput}
                    />
                  </Box>
                  <Box>
                    <FastField
                      size="medium"
                      component={TextFormField}
                      variant="filled"
                      name="tempat_meninggal"
                      id="tempat_meninggal"
                      label="Tempat Meninggal"
                      className={classes.controlInput}
                    />
                  </Box>
                  <Box>
                    <FastField
                      size="medium"
                      component={TextFormField}
                      variant="filled"
                      name="penyebab_meninggal"
                      id="penyebab_meninggal"
                      label="Penyebab Meninggal"
                      className={classes.controlInput}
                    />
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="center"
                  alignItems="center"
                  marginTop={2}
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
                      Perbarui
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateDataKematian: (requests, id) =>
      dispatch(updateDataKematian(requests, id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogEditComponent);
