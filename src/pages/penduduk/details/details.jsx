import { Box, Button, Divider, Typography } from "@material-ui/core";
import { FastField, Form, Formik } from "formik";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextFormField } from "../../../components/styled-textfield/styled-textfield";
import { clearInfos } from "../../../reducers/infos/info.actions";
import {
  deletePenduduk,
  fetchPendudukById,
  patchPenduduk,
} from "../../../reducers/penduduk/penduduk.actions";
import { useStyles } from "./details.style";

const PendudukDetailsPage = ({ ...props }) => {
  const {
    match,
    fetchPenduduk,
    admin,
    updatePenduduk,
    deletePenduduk,
    clearInfos,
  } = props;
  const paramsId = match.params.id;
  const classes = useStyles();
  const isFirstRender = useRef(true);

  useEffect(() => {
    fetchPenduduk(paramsId);
    if (isFirstRender.current) {
      isFirstRender.current = false;
      clearInfos();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsId, fetchPenduduk, clearInfos]);

  const params = (data) => {
    return data ? data : "";
  };

  const history = useHistory();

  return (
    <React.Fragment>
      <Box display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h6">
            Halaman Detail Informasi Penduduk
          </Typography>
        </Box>
        <Formik
          initialValues={{
            id: params(admin._id),
          }}
          enableReinitialize={true}
          onSubmit={(values) => {
            const onSuccess = () => history.push("/penduduk");
            deletePenduduk(values.id, onSuccess);
          }}
        >
          {() => (
            <Form>
              <Box>
                <Button
                  size="small"
                  className={classes.deleteButton}
                  variant="contained"
                  type="submit"
                >
                  Delete Penduduk
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
      <Box marginTop={2} marginBottom={2}>
        <Divider />
      </Box>
      <Formik
        // validationSchema={pendudukInsertValidation}
        initialValues={{
          id: params(admin._id),
          nik: params(admin.nik),
          nama_lengkap: params(admin.nama_lengkap),
          jenis_kelamin: params(admin.jenis_kelamin),
          tempat_tanggal_lahir: params(admin.tempat_tanggal_lahir),
          umur: params(admin.umur),
          agama: params(admin.agama),
          status_perkawinan: params(admin.status_perkawinan),
          pekerjaan: params(admin.pekerjaan),
          pendidikan_terakhir: params(admin.pendidikan_terakhir),
          posisi_dalam_keluarga: params(admin.posisi_dalam_keluarga),
          alamat_asal: params(admin.alamat_asal),
        }}
        enableReinitialize={true}
        onSubmit={(values) => {
          updatePenduduk(values, values.id);
        }}
      >
        {() => (
          <Form>
            <FastField
              component={TextFormField}
              label="Nomor Induk Keluarga"
              name="nik"
              id="nik"
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
              <Box>
                <Button variant="contained" color="primary" type="submit">
                  Update Penduduk
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
    admin: state.penduduks.penduduk_obj,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPenduduk: (id) => dispatch(fetchPendudukById(id)),
    updatePenduduk: (values, id) => dispatch(patchPenduduk(values, id)),
    deletePenduduk: (id, onSuccess) => dispatch(deletePenduduk(id, onSuccess)),
    clearInfos: () => dispatch(clearInfos()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendudukDetailsPage);
