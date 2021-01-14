import { Dialog, Typography, Box, Button, Divider } from "@material-ui/core";
import { Formik, Form, FastField } from "formik";
import React from "react";
import { connect } from "react-redux";
import { updateKelahiran } from "../../../reducers/kelahiran/kelahiran.actions";
import { SelectFormField } from "../../select-menus/select-menus";
import { TextFormField } from "../../styled-textfield/styled-textfield";
import { useStyles } from "./dialog-edit.style";

const DialogEditKelahiranComponent = ({ ...props }) => {
  const { open, handleClose, data, updateKelahiran } = props;

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
              id: data._id,
              nik: data.nik,
              nama: data.nama,
              jenis_kelamin: data.jenis_kelamin,
              tempat_lahir: data.tempat_lahir,
              tanggal_lahir: data.tanggal_lahir,
              agama: data.agama,
              hari_kelahiran: data.hari_kelahiran,
              jam_lahir: data.jam_lahir,
              nomor_surat_kelahiran: data.nomor_surat_kelahiran,
              hubungan_pelapor: data.hubungan_pelapor,
            }}
            enableReinitialize={true}
            onSubmit={(values) => {
              updateKelahiran(values, values.id);
              handleClose(false);
            }}
          >
            {() => (
              <Form>
                <Typography variant="h6">Perbarui Data Kelahiran</Typography>
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
                        name="nik"
                        id="nik"
                        label="Nomor Induk Keluarga"
                        className={classes.controlInput}
                      />
                    </Box>
                    <Box>
                      <FastField
                        size="medium"
                        component={TextFormField}
                        variant="filled"
                        name="nama"
                        id="nama"
                        label="Nama Lengkap"
                        className={classes.controlInput}
                      />
                    </Box>
                    <Box marginTop={2}>
                      <FastField
                        name="jenis_kelamin"
                        component={SelectFormField}
                        className={classes.controlInput}
                        size="small"
                        id="jenis_kelamin"
                        label="Jenis Kelamin"
                        options={[
                          { label: "Laki laki", value: "Laki laki" },
                          { label: "Perempuan", value: "Perempuan" },
                        ]}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <FastField
                        size="medium"
                        component={TextFormField}
                        variant="filled"
                        name="tempat_lahir"
                        id="tempat_lahir"
                        label="Tempat Lahir"
                        className={classes.controlInput}
                      />
                    </Box>
                    <Box>
                      <FastField
                        size="medium"
                        component={TextFormField}
                        variant="filled"
                        name="tanggal_lahir"
                        id="tanggal_lahir"
                        label="Tanggal Lahir"
                        className={classes.controlInput}
                      />
                    </Box>
                    <Box>
                      <FastField
                        size="medium"
                        component={TextFormField}
                        variant="filled"
                        name="agama"
                        id="agama"
                        label="Agama"
                        className={classes.controlInput}
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box>
                      <FastField
                        size="medium"
                        component={TextFormField}
                        variant="filled"
                        name="hubungan_pelapor"
                        id="hubungan_pelapor"
                        label="Pelapor"
                        className={classes.controlInput}
                      />
                    </Box>
                    <Box>
                      <FastField
                        size="medium"
                        component={TextFormField}
                        variant="filled"
                        name="hari_kelahiran"
                        id="hari_kelahiran"
                        label="Hari Kelahiran"
                        className={classes.controlInput}
                      />
                    </Box>
                    <Box>
                      <FastField
                        size="medium"
                        component={TextFormField}
                        variant="filled"
                        name="jam_lahir"
                        id="jam_lahir"
                        label="Jam Kelahiran"
                        className={classes.controlInput}
                      />
                    </Box>
                    <Box>
                      <FastField
                        size="medium"
                        component={TextFormField}
                        variant="filled"
                        name="nomor_surat_kelahiran"
                        id="nomor_surat_kelahiran"
                        label="Nomor Surat Kelahiran"
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

const mapDispatchToProps = (dispatch) => {
  return {
    updateKelahiran: (requests, id) => dispatch(updateKelahiran(requests, id)),
  };
};

export default connect(null, mapDispatchToProps)(DialogEditKelahiranComponent);
