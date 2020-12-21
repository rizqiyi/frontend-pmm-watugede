import { Box, Button, Divider, Paper, Typography } from "@material-ui/core";
import { FastField, Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { TextFormField } from "../../../components/styled-textfield/styled-textfield";
import { clearInfos } from "../../../reducers/infos/info.actions";
import {
  fetchPendudukById,
  patchPenduduk,
} from "../../../reducers/penduduk/penduduk.actions";
import { useStyles } from "./details.style";
import DeleteActions from "./delete-actions/delete-actions";
import Alert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const PendudukDetailsPage = ({ ...props }) => {
  const {
    match,
    fetchPenduduk,
    admin,
    updatePenduduk,
    clearInfos,
    infos,
    isLoading,
  } = props;
  const paramsId = match.params.id;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Box display="flex" flexDirection="row" marginBottom={3}>
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
          <Typography variant="body1" className={classes.controlCurrentLink}>
            Detail Informasi Penduduk
          </Typography>
        </Box>
      </Box>
      <Paper>
        <Box p={3} paddingBottom={8}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="h6">
                Halaman Detail Informasi Penduduk
              </Typography>
            </Box>
            <Box>
              <Button
                variant="contained"
                className={classes.deleteButton}
                onClick={(e) => {
                  e.preventDefault();
                  handleClickOpen();
                }}
                endIcon={<DeleteIcon />}
              >
                Hapus Penduduk
              </Button>
            </Box>
          </Box>
          <Box marginTop={2} marginBottom={2}>
            <Divider />
          </Box>
          {infos.id === "UPDATED_PENDUDUK" ? (
            <Box width="95%" marginBottom={1}>
              <Alert icon={false}>{infos.message}</Alert>
            </Box>
          ) : null}
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
            {({ resetForm }) => (
              <Form>
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
                          className={classes.lastField}
                          size="small"
                          variant="filled"
                        />
                      )}
                    </Box>
                    <Box marginBottom={10}></Box>
                  </Box>
                </Box>
                <Box marginTop={2} marginBottom={2}>
                  <Divider />
                </Box>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                >
                  <Box>
                    <Button
                      component={Link}
                      to={`/penduduk/p/mutasi_keluar/${paramsId}`}
                      className={classes.mutasiButton}
                    >
                      Mutasi Keluar Penduduk
                    </Button>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-end"
                  >
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
                        endIcon={<EditIcon />}
                      >
                        Perbarui Penduduk
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Paper>
      <DeleteActions
        open={open}
        handleClose={handleClose}
        params={params}
        admin={admin}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    admin: state.penduduks.penduduk_obj,
    infos: state.infos,
    isLoading: state.penduduks.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPenduduk: (id) => dispatch(fetchPendudukById(id)),
    updatePenduduk: (values, id) => dispatch(patchPenduduk(values, id)),
    clearInfos: () => dispatch(clearInfos()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendudukDetailsPage);
