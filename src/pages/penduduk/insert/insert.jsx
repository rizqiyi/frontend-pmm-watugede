import { Box, Button, Divider, Paper, Typography } from "@material-ui/core";
import { FastField, Form, Formik } from "formik";
import React, { useEffect, useRef } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postPenduduk } from "../../../reducers/penduduk/penduduk.actions";
import { useStyles } from "./insert.style";
import { pendudukInsertValidation } from "../../../validations/penduduk";
import { TextFormField } from "../../../components/styled-textfield/styled-textfield";
import Alert from "@material-ui/lab/Alert";
import { clearInfos } from "../../../reducers/infos/info.actions";

import AddIcon from "@material-ui/icons/Add";

const PendudukInsertPage = ({ clearInfos, infos }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      clearInfos();
    }
  }, [clearInfos]);

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Box p={3} paddingBottom={10}>
          <Typography variant="h6">Halaman Tambah Penduduk</Typography>
          <Box marginTop={2} marginBottom={2}>
            <Divider />
          </Box>
          <Formik
            validationSchema={pendudukInsertValidation}
            initialValues={{
              nik: "",
              nama_lengkap: "",
              jenis_kelamin: "",
              tempat_tanggal_lahir: "",
              umur: "",
              agama: "",
              status_perkawinan: "",
              pekerjaan: "",
              pendidikan_terakhir: "",
              posisi_dalam_keluarga: "",
              alamat_asal: "",
            }}
            onSubmit={(values, { resetForm }) => {
              dispatch(postPenduduk(values));
              resetForm({});
            }}
          >
            {({ resetForm }) => (
              <Form>
                {infos.status === 200 ? (
                  <Box marginLeft={1.4} width="95%" marginBottom={2}>
                    <Alert>{infos.message}</Alert>
                  </Box>
                ) : null}
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="baseline"
                  // position="relative"
                  // left={-80}
                  justifyContent="flex-start"
                >
                  <Box
                    display="flex"
                    flexDirection="column"
                    marginBottom={7.5}
                    marginRight={10}
                  >
                    <Box>
                      <FastField
                        component={TextFormField}
                        label="Nomor Induk Keluarga"
                        name="nik"
                        className={classes.largeTextField}
                        size="small"
                        variant="filled"
                      />
                    </Box>

                    <Box>
                      <FastField
                        component={TextFormField}
                        label="Nama Lengkap"
                        name="nama_lengkap"
                        className={classes.largeTextField}
                        size="small"
                        id="nama_lengkap"
                        variant="filled"
                      />
                    </Box>
                    <Box>
                      <FastField
                        component={TextFormField}
                        label="Umur"
                        name="umur"
                        className={classes.largeTextField}
                        size="small"
                        variant="filled"
                      />
                    </Box>
                    <Box>
                      <FastField
                        component={TextFormField}
                        label="Pekerjaan"
                        name="pekerjaan"
                        className={classes.largeTextField}
                        size="small"
                        variant="filled"
                      />
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="column" marginLeft={10}>
                    <Box>
                      <Box>
                        <FastField
                          component={TextFormField}
                          label="Tempat Tanggal Lahir"
                          name="tempat_tanggal_lahir"
                          className={classes.largeTextField}
                          size="small"
                          id="tempat_tanggal_lahir"
                          variant="filled"
                        />
                      </Box>
                      <Box>
                        <FastField
                          component={TextFormField}
                          label="Status Perkawinan"
                          name="status_perkawinan"
                          className={classes.largeTextField}
                          size="small"
                          variant="filled"
                        />
                      </Box>
                      <Box>
                        <FastField
                          component={TextFormField}
                          label="Posisi Dalam Keluarga"
                          name="posisi_dalam_keluarga"
                          className={classes.largeTextField}
                          size="small"
                          variant="filled"
                        />
                      </Box>
                      <FastField
                        component={TextFormField}
                        label="Alamat"
                        name="alamat_asal"
                        size="small"
                        multiline
                        rows={4}
                        rowsMax={4}
                        className={classes.alamatTextField}
                        variant="filled"
                      />
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    marginLeft={20}
                    marginBottom={7.5}
                  >
                    <Box>
                      <FastField
                        component={TextFormField}
                        label="Jenis Kelamin"
                        name="jenis_kelamin"
                        className={classes.lastField}
                        size="small"
                        id="jenis_kelamin"
                        variant="filled"
                      />
                    </Box>
                    <Box>
                      <FastField
                        component={TextFormField}
                        label="Agama"
                        name="agama"
                        className={classes.lastField}
                        size="small"
                        variant="filled"
                      />
                    </Box>
                    <Box>
                      <FastField
                        component={TextFormField}
                        label="Pendidikan Terakhir"
                        name="pendidikan_terakhir"
                        className={classes.lastField}
                        size="small"
                        variant="filled"
                      />
                    </Box>
                    <Box marginBottom={10}></Box>
                  </Box>
                </Box>
                <Box marginTop={2} marginBottom={2}>
                  <Divider />
                </Box>
                <Box display="flex" justifyContent="space-between">
                  <Box>
                    <Typography
                      component={Link}
                      to="#!"
                      className={classes.resetText}
                      onClick={(e) => {
                        e.preventDefault();
                        resetForm({});
                      }}
                    >
                      Reset Form
                    </Typography>
                  </Box>
                  <Box display="flex" flexDirection="row">
                    <Box marginRight={3}>
                      <Button
                        component={Link}
                        to="/penduduk"
                        className={classes.backButton}
                      >
                        Kembali
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        variant="contained"
                        className={classes.controlButton}
                        color="primary"
                        type="submit"
                        endIcon={<AddIcon />}
                      >
                        Tambahkan Penduduk
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Paper>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    infos: state.infos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearInfos: () => dispatch(clearInfos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PendudukInsertPage);
