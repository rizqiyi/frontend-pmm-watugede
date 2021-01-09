import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useStyles } from "./dialog-edit.style";
import { Form, Formik } from "formik";
import { Box, FormHelperText, IconButton, Typography } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { updateArsipKematian } from "../../../../reducers/kematian/kematian.actions";

const DialogEditImageComponent = ({ ...props }) => {
  const classes = useStyles();
  const { open, handleClose, data, idData, updateArsipKematian } = props;

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
        <DialogTitle id="alert-dialog-title">
          {"Perbarui Data Arsip Kematian"}
        </DialogTitle>
        <Box p={3}>
          <Formik
            initialValues={{
              idData,
              id: data,
              arsip_kematian: "",
            }}
            enableReinitialize={true}
            onSubmit={(values, { resetForm }) => {
              const { data } = DataSet(values);
              updateArsipKematian(data, values.id, values.idData);
              handleClose(false);
              resetForm({});
            }}
          >
            {({ errors, touched, values, setFieldValue }) => (
              <Form>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  margin="0 auto"
                  width="300px"
                  p={2}
                  border="2px dotted black"
                  borderRadius={20}
                >
                  <Box>
                    <Typography variant="body2" className={classes.fontCons}>
                      Upload Arsip Kematian
                    </Typography>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="icon-button-file-2"
                      onChange={(e) => {
                        setFieldValue(
                          "arsip_kematian",
                          e.currentTarget.files[0]
                        );
                      }}
                      type="file"
                    />
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <label htmlFor="icon-button-file-2">
                        <IconButton
                          color="primary"
                          aria-label="upload picture"
                          component="span"
                        >
                          <PhotoCamera />
                        </IconButton>
                      </label>
                    </Box>
                  </Box>
                  <Box>
                    {Boolean(errors.arsip_kematian) &&
                    touched.arsip_kematian ? (
                      <FormHelperText className={classes.controlFileError}>
                        {errors.arsip_kematian}
                      </FormHelperText>
                    ) : (
                      <FormHelperText className={classes.controlFileName}>
                        {values.arsip_kematian.name}
                      </FormHelperText>
                    )}
                  </Box>
                </Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  marginTop={3}
                >
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
                    className={classes.insertButton}
                  >
                    Perbarui
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Dialog>
    </React.Fragment>
  );
};

const DataSet = (val) => {
  let data = new FormData();

  data.append("arsip_kematian", val.arsip_kematian);

  return { data };
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateArsipKematian: (request, id, idData) =>
      dispatch(updateArsipKematian(request, id, idData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogEditImageComponent);
