import { Box, Button, Divider, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import {
  fetchAnggotaKeluargaByID,
  updateAnggotaKeluarga,
} from "../../../../reducers/anggota_keluarga/anggota_keluarga.actions";
import { useHistory } from "react-router-dom";
import { FastField, Form, Formik } from "formik";
import { Alert, Skeleton } from "@material-ui/lab";
import { TextFormField } from "../../../../components/styled-textfield/styled-textfield";
import { useStyles } from "./update-keluarga.style";
import EditIcon from "@material-ui/icons/Edit";
import { clearInfos } from "../../../../reducers/infos/info.actions";
import { pendudukInsertValidation } from "../../../../validations/penduduk";
import MutasiDialogPerson from "../../../../components/anggota-keluarga-components/mutasi-dialogs-person/mutasi-dialogs-person";

const DetailKartuKeluargaUpdatePage = ({ ...props }) => {
  const {
    match,
    fetchAnggotaKeluargaByID,
    dataAnggotaKeluarga,
    isLoading,
    infoStatus,
    infos,
    updateAnggotaKeluarga,
    clearInfos,
  } = props;

  const paramsId = match.params.id;
  const classes = useStyles();
  const isFirstRender = useRef(true);
  const history = useHistory();
  const [dialogMutasiPerson, setDialogMutasiPerson] = useState(false);
  const [dataMutasiPerson, setDataMutasiPerson] = useState([]);
  const [nomorKartuKeluarga, setNomorKartuKeluarga] = useState([]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      clearInfos();
    }
    fetchAnggotaKeluargaByID(paramsId);
  }, [fetchAnggotaKeluargaByID, paramsId, clearInfos]);

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
              id: paramsId,
              nik: params(dataAnggotaKeluarga.nik),
              nama_lengkap: params(dataAnggotaKeluarga.nama_lengkap),
              jenis_kelamin: params(dataAnggotaKeluarga.jenis_kelamin),
              tempat_tanggal_lahir: params(
                dataAnggotaKeluarga.tempat_tanggal_lahir
              ),
              umur: params(dataAnggotaKeluarga.umur),
              agama: params(dataAnggotaKeluarga.agama),
              status_perkawinan: params(dataAnggotaKeluarga.status_perkawinan),
              pekerjaan: params(dataAnggotaKeluarga.pekerjaan),
              pendidikan_terakhir: params(
                dataAnggotaKeluarga.pendidikan_terakhir
              ),
              posisi_dalam_keluarga: params(
                dataAnggotaKeluarga.posisi_dalam_keluarga
              ),
              alamat_asal: params(dataAnggotaKeluarga.alamat_asal),
            }}
            enableReinitialize={true}
            onSubmit={(values) => {
              updateAnggotaKeluarga(values, values.id);
            }}
          >
            {() => (
              <Form>
                {isLoading ? (
                  <Skeleton animation="wave" width="90%" height={70} />
                ) : infoStatus === 200 ? (
                  <Box width="90%">
                    <Alert icon={false}>{infos}</Alert>
                  </Box>
                ) : null}
                {isLoading ? null : infoStatus === 400 ? (
                  <Box width="90%">
                    <Alert icon={false} severity="error">
                      {infos}
                    </Alert>
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
                          label="Jenis Kelamin"
                          name="jenis_kelamin"
                          className={classes.lastField}
                          size="small"
                          id="jenis_kelamin"
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
                          className={classes.lastField}
                          size="small"
                          variant="filled"
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
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Box>
                      <Button
                        variant="contained"
                        className={classes.mutasiButton}
                        onClick={(e) => {
                          e.preventDefault();
                          setDialogMutasiPerson(true);
                          setDataMutasiPerson(dataAnggotaKeluarga);
                          setNomorKartuKeluarga(
                            dataAnggotaKeluarga.keluarga_dari.no_kk
                          );
                        }}
                      >
                        Mutasi
                      </Button>
                    </Box>
                    <Box display="flex" justifyContent="flex-end">
                      <Box marginRight={3}>
                        <Button
                          onClick={(e) => {
                            e.preventDefault();
                            history.goBack();
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
                  </Box>
                )}
              </Form>
            )}
          </Formik>
        </Box>
      </Paper>
      <MutasiDialogPerson
        data={dataMutasiPerson}
        open={dialogMutasiPerson}
        handleClose={setDialogMutasiPerson}
        nomorKartuKeluarga={nomorKartuKeluarga}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    dataAnggotaKeluarga: state.anggota_keluarga.anggota_keluarga_obj,
    isLoading: state.anggota_keluarga.isLoading,
    infoStatus: state.infos.status,
    infos: state.infos.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAnggotaKeluargaByID: (id) => dispatch(fetchAnggotaKeluargaByID(id)),
    updateAnggotaKeluarga: (request, id) =>
      dispatch(updateAnggotaKeluarga(request, id)),
    clearInfos: () => dispatch(clearInfos()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailKartuKeluargaUpdatePage);
