import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useStyles } from "./insert.style";
import {
  Box,
  Button,
  Divider,
  LinearProgress,
  Paper,
  Typography,
} from "@material-ui/core";
import { FastField, Form, Formik } from "formik";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import { TextFormField } from "../../../components/styled-textfield/styled-textfield";
import { postKKPendudukMasuk } from "../../../reducers/penduduk_masuk/penduduk_masuk.actions";
import { clearInfos } from "../../../reducers/infos/info.actions";
import { Alert } from "@material-ui/lab";
import { kartuKeluargaInsertValidation } from "../../../validations/kartu-keluarga";

const PendudukMasukInsertPage = ({ ...props }) => {
  const classes = useStyles();
  const {
    postKKPendudukMasuk,
    infosStatus,
    infosMessage,
    infosID,
    isLoading,
  } = props;
  const [progress, setProgress] = useState(0);
  const [buffer, setBuffer] = useState(10);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      clearInfos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Box p={3} paddingBottom={10}>
          <Typography variant="h6">
            Halaman Tambah Kartu Keluarga Penduduk Masuk
          </Typography>
          <Box marginTop={2} marginBottom={2}>
            <Divider />
          </Box>
          <Formik
            validationSchema={kartuKeluargaInsertValidation}
            initialValues={{
              no_kk: "",
              nik: "",
              nama_lengkap: "",
              jenis_kelamin: "",
              tempat_tanggal_lahir: "",
              umur: "",
              agama: "",
              status_perkawinan: "",
              pekerjaan: "",
              pendidikan_terakhir: "",
              posisi_dalam_keluarga: "Kepala Keluarga",
              alamat_asal: "",
            }}
            enableReinitialize={true}
            onSubmit={(values, { resetForm }) => {
              postKKPendudukMasuk(values);
            }}
          >
            {({ resetForm, isSubmitting }) => (
              <Form>
                {infosStatus === 201 &&
                infosID === "POST_KK_PENDUDUK_MASUK_SUCCESS" ? (
                  <Box width="90%">
                    <Alert icon={false}>{infosMessage}</Alert>
                  </Box>
                ) : null}
                {infosStatus === 400 ||
                infosID === "POST_KK_PENDUDUK_MASUK_FAILED" ? (
                  <Box width="90%">
                    <Alert icon={false} severity="error">
                      {infosMessage}
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
                        label="Nomor Kartu Keluarga"
                        id="no_kk"
                        name="no_kk"
                        className={classes.largeTextField}
                        size="small"
                        variant="filled"
                      />
                    </Box>
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
                          label="Pekerjaan"
                          name="pekerjaan"
                          className={classes.largeTextField}
                          size="small"
                          variant="filled"
                        />
                      </Box>
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
                <Box marginTop={2}>
                  <Typography variant="subtitle2" className={classes.constText}>
                    *Default posisi dalam keluarga adalah Kepala Keluarga
                  </Typography>
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
                        to="/penduduk_masuk"
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
    infosStatus: state.infos.status,
    infosMessage: state.infos.message,
    infosID: state.infos.id,
    isLoading: state.penduduk_masuk.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postKKPendudukMasuk: (val) => dispatch(postKKPendudukMasuk(val)),
    clearInfos: () => dispatch(clearInfos()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendudukMasukInsertPage);
