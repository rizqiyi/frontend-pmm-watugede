import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  fetchAnggotaKeluargaPendudukMasukByID,
  updateAnggotaKeluargaPendudukMasuk,
} from "../../../../reducers/penduduk_masuk/penduduk_masuk.actions";
import { Box, Button, Divider, Paper, Typography } from "@material-ui/core";
import { clearInfos } from "../../../../reducers/infos/info.actions";
import { FastField, Form, Formik } from "formik";
import { Alert, Skeleton } from "@material-ui/lab";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";
import { TextFormField } from "../../../../components/styled-textfield/styled-textfield";
import { useStyles } from "./update.style";
import { pendudukInsertValidation } from "../../../../validations/penduduk";
import { SelectFormField } from "../../../../components/select-menus/select-menus";

export const UpdateAnggotaPendudukMasukPage = ({ ...props }) => {
  const {
    match,
    fetchAnggotaKeluargaPendudukMasukByID,
    anggotaKeluargaPendudukMasuk,
    clearInfos,
    isLoading,
    updateAnggotaKeluargaPendudukMasuk,
    infosStatus,
    infosMessage,
  } = props;
  const data = anggotaKeluargaPendudukMasuk;
  const isFirstRender = useRef(true);
  const paramsIdPendudukMasuk = match.params.id;
  const paramsIdKK = match.params.id_kk;
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (isFirstRender.current) {
      clearInfos();
      fetchAnggotaKeluargaPendudukMasukByID(paramsIdPendudukMasuk);
    }
  }, [
    fetchAnggotaKeluargaPendudukMasukByID,
    paramsIdPendudukMasuk,
    clearInfos,
  ]);

  const params = (data) => {
    return data ? data : "";
  };

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Box p={3} paddingBottom={10}>
          <Typography variant="h6">
            Halaman Edit Data Anggota Keluarga
          </Typography>
          <Box marginTop={2} marginBottom={2}>
            <Divider />
          </Box>
          <Formik
            validationSchema={pendudukInsertValidation}
            initialValues={{
              nik: params(data.nik),
              nama_lengkap: params(data.nama_lengkap),
              jenis_kelamin: params(data.jenis_kelamin),
              tempat_tanggal_lahir: params(data.tempat_tanggal_lahir),
              umur: params(data.umur),
              agama: params(data.agama),
              status_perkawinan: params(data.status_perkawinan),
              pekerjaan: params(data.pekerjaan),
              pendidikan_terakhir: params(data.pendidikan_terakhir),
              posisi_dalam_keluarga: params(data.posisi_dalam_keluarga),
              alamat_asal: params(data.alamat_asal),
            }}
            enableReinitialize={true}
            onSubmit={(values, { resetForm }) => {
              updateAnggotaKeluargaPendudukMasuk(values, paramsIdPendudukMasuk);
              resetForm({});
            }}
          >
            {() => (
              <Form>
                {isLoading ? (
                  <Skeleton animation="wave" width="90%" height={70} />
                ) : infosStatus === 200 ? (
                  <Box width="90%">
                    <Alert icon={false}>{infosMessage}</Alert>
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
                      {isLoading ? (
                        <Skeleton animation="wave" width={280} height={70} />
                      ) : (
                        <FastField
                          component={TextFormField}
                          label="Nomor Induk Keluarga"
                          id="nik"
                          name="nik"
                          className={classes.largeTextField}
                          size="small"
                          variant="filled"
                        />
                      )}
                    </Box>
                    <Box>
                      {isLoading ? (
                        <Skeleton animation="wave" width={280} height={70} />
                      ) : (
                        <FastField
                          component={TextFormField}
                          label="Nama Lengkap"
                          name="nama_lengkap"
                          className={classes.largeTextField}
                          size="small"
                          id="nama_lengkap"
                          variant="filled"
                        />
                      )}
                    </Box>
                    <Box>
                      {isLoading ? (
                        <Skeleton animation="wave" width={280} height={70} />
                      ) : (
                        <FastField
                          component={TextFormField}
                          label="Umur"
                          name="umur"
                          id="umur"
                          className={classes.largeTextField}
                          size="small"
                          variant="filled"
                        />
                      )}
                    </Box>
                    <Box>
                      {isLoading ? (
                        <Skeleton animation="wave" width={280} height={70} />
                      ) : (
                        <FastField
                          component={TextFormField}
                          label="Pekerjaan"
                          name="pekerjaan"
                          id="pekerjaan"
                          className={classes.largeTextField}
                          size="small"
                          variant="filled"
                        />
                      )}
                    </Box>
                  </Box>
                  <Box display="flex" flexDirection="column" marginLeft={10}>
                    <Box>
                      <Box>
                        {isLoading ? (
                          <Skeleton animation="wave" width={280} height={70} />
                        ) : (
                          <FastField
                            component={TextFormField}
                            label="Tempat Tanggal Lahir"
                            name="tempat_tanggal_lahir"
                            className={classes.largeTextField}
                            size="small"
                            id="tempat_tanggal_lahir"
                            variant="filled"
                          />
                        )}
                      </Box>
                      <Box>
                        {isLoading ? (
                          <Skeleton animation="wave" width={280} height={70} />
                        ) : (
                          <FastField
                            component={TextFormField}
                            label="Status Perkawinan"
                            name="status_perkawinan"
                            id="status_perkawinan"
                            className={classes.largeTextField}
                            size="small"
                            variant="filled"
                          />
                        )}
                      </Box>
                      <Box>
                        {isLoading ? (
                          <Skeleton animation="wave" width={280} height={70} />
                        ) : (
                          <FastField
                            component={TextFormField}
                            label="Posisi Dalam Keluarga"
                            name="posisi_dalam_keluarga"
                            id="posisi_dalam_keluarga"
                            className={classes.largeTextField}
                            size="small"
                            variant="filled"
                          />
                        )}
                      </Box>
                      {isLoading ? null : (
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
                      )}
                    </Box>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="column"
                    marginLeft={20}
                    marginBottom={7.5}
                  >
                    <Box>
                      {isLoading ? (
                        <Skeleton animation="wave" width={280} height={70} />
                      ) : (
                        <FastField
                          component={TextFormField}
                          label="Agama"
                          name="agama"
                          id="agama"
                          className={classes.lastField}
                          size="small"
                          variant="filled"
                        />
                      )}
                    </Box>
                    <Box>
                      {isLoading ? (
                        <Skeleton animation="wave" width={280} height={70} />
                      ) : (
                        <FastField
                          component={TextFormField}
                          label="Pendidikan Terakhir"
                          name="pendidikan_terakhir"
                          id="pendidikan_terakhir"
                          style={{ marginBottom: 25 }}
                          className={classes.lastField}
                          size="small"
                          variant="filled"
                        />
                      )}
                    </Box>
                    <Box>
                      {isLoading ? (
                        <Skeleton animation="wave" width={280} height={70} />
                      ) : (
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
                      )}
                    </Box>
                    <Box marginBottom={10}></Box>
                  </Box>
                </Box>
                <Box marginTop={1} marginBottom={2}>
                  <Divider />
                </Box>
                {isLoading ? (
                  <Skeleton animation="wave" width="90%" height={70} />
                ) : (
                  <Box display="flex" justifyContent="flex-end">
                    <Box marginRight={3}>
                      <Button
                        onClick={(e) => {
                          e.preventDefault();
                          history.push(`/penduduk_masuk/${paramsIdKK}/d`);
                        }}
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
                        endIcon={<EditIcon />}
                      >
                        Perbarui Data
                      </Button>
                    </Box>
                  </Box>
                )}
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
    anggotaKeluargaPendudukMasuk: state.penduduk_masuk.anggota_keluarga,
    isLoading: state.penduduk_masuk.isLoading,
    infosStatus: state.infos.status,
    infosMessage: state.infos.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAnggotaKeluargaPendudukMasukByID: (id) =>
      dispatch(fetchAnggotaKeluargaPendudukMasukByID(id)),
    clearInfos: () => dispatch(clearInfos()),
    updateAnggotaKeluargaPendudukMasuk: (requests, id) =>
      dispatch(updateAnggotaKeluargaPendudukMasuk(requests, id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateAnggotaPendudukMasukPage);
