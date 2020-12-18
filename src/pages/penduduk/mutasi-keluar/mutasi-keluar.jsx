import { Box, Button, Container, Divider, Typography } from "@material-ui/core";
import { FastField, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useStyles } from "./mutasi-keluar.style";
import { TextFormField } from "../../../components/styled-textfield/styled-textfield";
import { postPengikutKeluar } from "../../../reducers/pengikut_keluar/pengikut_keluar.actions";
import MutasiKeluarHeader from "../../../components/mutasi-keluar-header/mutasi-keluar-header";
import { mutasiKeluarInsertValidation } from "../../../validations/mutasi-keluar";

const MutasiKeluarPage = ({ ...props }) => {
  const { match, postPengikutKeluar } = props;
  const paramsId = match.params.id;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box display="flex" flexDirection="row">
        <Box marginRight={1}>
          <Typography>/</Typography>
        </Box>
        <Box>
          <Typography
            component={Link}
            to="/penduduk"
            variant="body1"
            className={classes.controlLink}
          >
            Halaman Penduduk
          </Typography>
        </Box>
        <Box marginLeft={1} marginRight={1}>
          <Typography>/</Typography>
        </Box>
        <Box>
          <Typography
            component={Link}
            to={`/penduduk/${paramsId}/d`}
            variant="body1"
            className={classes.controlLink}
          >
            Detail Informasi Penduduk
          </Typography>
        </Box>
        <Box marginLeft={1} marginRight={1}>
          <Typography>/</Typography>
        </Box>
        <Box>
          <Typography variant="body1" className={classes.controlCurrentLink}>
            Mutasi Keluar Penduduk
          </Typography>
        </Box>
      </Box>
      <MutasiKeluarHeader paramsId={paramsId} />
      <Container maxWidth="md">
        <Box marginLeft={1.4}>
          <Typography variant="h6">Tambah Pengikut Penduduk Keluar</Typography>
        </Box>
        <Formik
          validationSchema={mutasiKeluarInsertValidation}
          initialValues={{
            id: paramsId,
            nama_lengkap_keluarga: "",
            jenis_kelamin_keluarga: "",
            umur_keluarga: "",
            status_perkawinan_keluarga: "",
            pendidikan_terakhir_keluarga: "",
            nik_keluarga: "",
            keterangan_dalam_keluarga: "",
          }}
          enableReinitialize={true}
          onSubmit={(values, { resetForm }) => {
            postPengikutKeluar(values, values.id);
            resetForm({});
          }}
        >
          {() => (
            <Form>
              <FastField
                label="Nama Lengkap"
                name="nama_lengkap_keluarga"
                size="small"
                component={TextFormField}
                className={classes.namaLengkapTextField}
                variant="filled"
              />
              <FastField
                label="NIK"
                name="nik_keluarga"
                size="small"
                component={TextFormField}
                className={classes.mediumTextField}
                variant="filled"
              />
              <FastField
                label="Pendidikan Terakhir"
                name="pendidikan_terakhir_keluarga"
                size="small"
                component={TextFormField}
                className={classes.smallTextField}
                variant="filled"
              />
              <FastField
                label="Jenis Kelamin"
                name="jenis_kelamin_keluarga"
                size="small"
                component={TextFormField}
                className={classes.smallTextField}
                variant="filled"
              />
              <FastField
                label="Umur"
                name="umur_keluarga"
                size="small"
                component={TextFormField}
                className={classes.smallTextField}
                variant="filled"
              />
              <FastField
                label="Status Perkawinan"
                name="status_perkawinan_keluarga"
                size="small"
                component={TextFormField}
                className={classes.mediumTextField}
                variant="filled"
              />

              <FastField
                label="Status Dalam Keluarga"
                name="keterangan_dalam_keluarga"
                size="small"
                component={TextFormField}
                className={classes.smallTextField}
                variant="filled"
              />
              <Box marginTop={2} marginBottom={2}>
                <Divider />
              </Box>
              <Box display="flex" justifyContent="flex-end">
                <Button variant="contained" color="primary" type="submit">
                  Tambahkan
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Container>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postPengikutKeluar: (val, id) => dispatch(postPengikutKeluar(val, id)),
  };
};

export default connect(null, mapDispatchToProps)(MutasiKeluarPage);
