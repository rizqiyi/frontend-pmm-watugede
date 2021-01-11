import {
  Box,
  LinearProgress,
  Paper,
  Typography,
  Button,
  Divider,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { FastField, Form, Formik } from "formik";
import React, { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { useStyles } from "./insert.style";
import { TextFormField } from "../../../../components/styled-textfield/styled-textfield";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { postAnggotaKeluarga } from "../../../../reducers/anggota_keluarga/anggota_keluarga.actions";
import { clearInfos } from "../../../../reducers/infos/info.actions";
import { pendudukInsertValidation } from "../../../../validations/penduduk";
import { SelectFormField } from "../../../../components/select-menus/select-menus";

const DetailKartuKeluargaInsertPage = ({ ...props }) => {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const {
    match,
    postAnggotaKeluarga,
    isLoading,
    infoStatus,
    infos,
    clearInfos,
  } = props;
  const paramsIdKK = match.params.id_kk;
  const isFirstRender = useRef(true);

  const progressRef = useRef(() => {});
  useEffect(() => {
    progressRef.current = () => {
      if (progress > 100) {
        setProgress(0);
        setBuffer(10);
      } else {
        const diff = Math.random() * 10;
        const diff2 = Math.random() * 10;
        setProgress(progress + diff);
        setBuffer(progress + diff + diff2);
      }
    };
  });

  useEffect(() => {
    const timer = setInterval(() => {
      progressRef.current();
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

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
          <Typography variant="h6">Halaman Tambah Anggota Keluarga</Typography>
          <Box marginTop={2} marginBottom={2}>
            <Divider />
          </Box>
          <Formik
            validationSchema={pendudukInsertValidation}
            initialValues={{
              id: paramsIdKK,
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
            enableReinitialize={true}
            onSubmit={(values, { resetForm }) => {
              postAnggotaKeluarga(values, values.id);
            }}
          >
            {({ resetForm, isSubmitting }) => (
              <Form>
                {infoStatus === 200 ? (
                  <Box width="90%">
                    <Alert icon={false}>{infos}</Alert>
                  </Box>
                ) : null}
                {infoStatus === 400 ? (
                  <Box width="90%">
                    <Alert icon={false} severity="error">
                      {infos}
                    </Alert>
                  </Box>
                ) : null}
                {isLoading ? (
                  <Box className={classes.root}>
                    <LinearProgress
                      variant="buffer"
                      value={progress}
                      valueBuffer={buffer}
                    />
                  </Box>
                ) : null}
                <Box
                  display="flex"
                  flexDirection="row"
                  alignItems="baseline"
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
                        id="nik"
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
                        id="umur"
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
                        id="pekerjaan"
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
                          id="status_perkawinan"
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
                          id="posisi_dalam_keluarga"
                          className={classes.largeTextField}
                          size="small"
                          variant="filled"
                        />
                      </Box>
                      <FastField
                        component={TextFormField}
                        label="Alamat"
                        name="alamat_asal"
                        id="alamat_asal"
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
                        label="Agama"
                        name="agama"
                        id="agama"
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
                        id="pendidikan_terakhir"
                        className={classes.lastField}
                        style={{ marginBottom: 25 }}
                        size="small"
                        variant="filled"
                      />
                    </Box>
                    <Box>
                      <FastField
                        name="jenis_kelamin"
                        className={classes.lastField}
                        component={SelectFormField}
                        size="small"
                        id="jenis_kelamin"
                        label="Jenis Kelamin"
                        options={[
                          { label: "Laki laki", value: "Laki laki" },
                          { label: "Perempuan", value: "Perempuan" },
                        ]}
                      />
                    </Box>
                    <Box marginBottom={10}></Box>
                  </Box>
                </Box>
                <Box marginTop={1} marginBottom={2}>
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
                        to={`/kartu_keluarga/${paramsIdKK}/d`}
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
                        Tambahkan
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
    isLoading: state.anggota_keluarga.isLoading,
    infoStatus: state.infos.status,
    infos: state.infos.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postAnggotaKeluarga: (request, id) =>
      dispatch(postAnggotaKeluarga(request, id)),
    clearInfos: () => dispatch(clearInfos()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailKartuKeluargaInsertPage);
