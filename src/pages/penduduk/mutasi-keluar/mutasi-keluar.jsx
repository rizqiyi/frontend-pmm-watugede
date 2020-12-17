import { Box, Button, Container, Divider, Typography } from "@material-ui/core";
import { FastField, Form, Formik } from "formik";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { useStyles } from "./mutasi-keluar.style";
import { TextFormField } from "../../../components/styled-textfield/styled-textfield";

const MutasiKeluarPage = ({ ...props }) => {
  const { match } = props;
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
            to={`/penduduk/${paramsId}/d`}
            variant="body1"
            className={classes.controlLink}
          >
            Detail Penduduk
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
      <Box marginTop={2} marginBottom={2}>
        <Divider />
      </Box>
      <Container maxWidth="md">
        <Box marginLeft={1.4}>
          <Typography variant="h6">Tambah Pengikut Penduduk Keluar</Typography>
        </Box>
        <Box marginTop={2} marginBottom={2}>
          <Divider />
        </Box>
        <Formik
          initialValues={{
            nama_lengkap_keluarga: "",
            jenis_kelamin_keluarga: "",
            umur_keluarga: "",
            status_perkawinan_keluarga: "",
            pendidikan_terakhir_keluarga: "",
            nik_keluarga: "",
            keterangan_dalam_keluarga: "",
          }}
          onSubmit={(values) => {
            console.log(values);
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

export default connect(null, null)(MutasiKeluarPage);
