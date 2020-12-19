import { Box, Button, Divider, Typography } from "@material-ui/core";
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
        {() => (
          <Form>
            {infos.status === 200 ? (
              <Box marginLeft={1.4} width="95%" marginBottom={2}>
                <Alert>{infos.message}</Alert>
              </Box>
            ) : null}
            <FastField
              component={TextFormField}
              label="Nomor Induk Keluarga"
              name="nik"
              size="small"
              className={classes.largeTextField}
              variant="filled"
            />
            <FastField
              component={TextFormField}
              label="Nama Lengkap"
              name="nama_lengkap"
              size="small"
              id="nama_lengkap"
              className={classes.largeTextField}
              variant="filled"
            />
            <FastField
              component={TextFormField}
              label="Jenis Kelamin"
              name="jenis_kelamin"
              size="small"
              id="jenis_kelamin"
              className={classes.smallTextField}
              variant="filled"
            />
            <FastField
              component={TextFormField}
              label="Tempat Tanggal Lahir"
              name="tempat_tanggal_lahir"
              size="small"
              id="tempat_tanggal_lahir"
              className={classes.largeTextField}
              variant="filled"
            />
            <FastField
              component={TextFormField}
              label="Umur"
              name="umur"
              size="small"
              className={classes.smallTextField}
              variant="filled"
            />
            <FastField
              component={TextFormField}
              label="Agama"
              name="agama"
              size="small"
              className={classes.smallTextField}
              variant="filled"
            />
            <FastField
              component={TextFormField}
              label="Status Perkawinan"
              name="status_perkawinan"
              size="small"
              className={classes.smallTextField}
              variant="filled"
            />
            <FastField
              component={TextFormField}
              label="Pekerjaan"
              name="pekerjaan"
              size="small"
              className={classes.pekerjaanField}
              variant="filled"
            />
            <FastField
              component={TextFormField}
              label="Pendidikan Terakhir"
              name="pendidikan_terakhir"
              size="small"
              className={classes.mediumTextField}
              variant="filled"
            />
            <FastField
              component={TextFormField}
              label="Posisi Dalam Keluarga"
              name="posisi_dalam_keluarga"
              size="small"
              className={classes.mediumTextField}
              variant="filled"
            />
            <FastField
              component={TextFormField}
              label="Alamat"
              name="alamat_asal"
              size="small"
              className={classes.largeTextField}
              variant="filled"
            />

            <Box marginTop={2} marginBottom={2}>
              <Divider />
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Box marginRight={3}>
                <Button variant="contained" component={Link} to="/penduduk">
                  Kembali
                </Button>
              </Box>
              <Box>
                <Button
                  variant="contained"
                  className={classes.controlButton}
                  color="primary"
                  type="submit"
                >
                  Tambahkan Penduduk
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
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
