import React from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useStyles } from "./dialog-insert.style";
import { Form, Formik } from "formik";
import { Box, FormHelperText, IconButton, Typography } from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { postKeteranganMasuk } from "../../../../reducers/penduduk_masuk/penduduk_masuk.actions";

const DialogInsertComponent = ({ ...props }) => {
  const { open, handleClose, paramsIdKK, postKeteranganMasukPenduduk } = props;
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
        <DialogTitle id="alert-dialog-title">
          {"Tambah Data Keterangan Masuk"}
        </DialogTitle>
        <Box p={3}>
          <Formik
            initialValues={{
              idKK: paramsIdKK,
              foto_kk: "",
              foto_surat_masuk: "",
            }}
            enableReinitialize={true}
            onSubmit={(values, { resetForm }) => {
              const { data } = DataSet(values);
              postKeteranganMasukPenduduk(data, values.idKK);
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
                  <Box marginTop={0.8}>
                    <Typography variant="body2" className={classes.fontCons}>
                      Upload Foto KK
                    </Typography>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="icon-button-file"
                      onChange={(e) => {
                        setFieldValue("foto_kk", e.currentTarget.files[0]);
                      }}
                      type="file"
                    />
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <label htmlFor="icon-button-file">
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
                    {Boolean(errors.foto_kk) && touched.foto_kk ? (
                      <FormHelperText className={classes.controlFileError}>
                        {errors.foto_kk}
                      </FormHelperText>
                    ) : (
                      <FormHelperText className={classes.controlFileName}>
                        {values.foto_kk.name}
                      </FormHelperText>
                    )}
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  margin="0 auto"
                  width="300px"
                  marginTop={3}
                  p={2}
                  border="2px dotted black"
                  borderRadius={20}
                >
                  <Box marginTop={0.8}>
                    <Typography variant="body2" className={classes.fontCons}>
                      Upload Foto Surat Masuk
                    </Typography>
                    <input
                      accept="image/*"
                      className={classes.input}
                      id="icon-button-file-2"
                      onChange={(e) => {
                        setFieldValue(
                          "foto_surat_masuk",
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
                    {Boolean(errors.foto_surat_masuk) &&
                    touched.foto_surat_masuk ? (
                      <FormHelperText className={classes.controlFileError}>
                        {errors.foto_surat_masuk}
                      </FormHelperText>
                    ) : (
                      <FormHelperText className={classes.controlFileName}>
                        {values.foto_surat_masuk.name}
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
                    color="primary"
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
                    Tambahkan
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

  data.set("foto_kk", val.foto_kk);

  data.append("foto_surat_masuk", val.foto_surat_masuk);

  return { data };
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    postKeteranganMasukPenduduk: (requests, idKK) =>
      dispatch(postKeteranganMasuk(requests, idKK)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogInsertComponent);
