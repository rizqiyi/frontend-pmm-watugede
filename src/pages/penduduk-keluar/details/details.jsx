import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Hidden,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import dataIsNull from "../../../assets/images/no-data-found.svg";
import { GreyText } from "../../../components/typography/typography";
import { useStyles } from "./details.style";
import KeteranganKeluarComponent from "../../../components/penduduk-keluar-components/keterangan-keluar/keterangan-keluar";
import { PengusulKeluarComponent } from "../../../components/penduduk-keluar-components/pengusul-keluar/pengusul-keluar";
import { Link, useHistory } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DialogDeleteComponent from "../../../components/penduduk-keluar-components/dialog-delete/dialog-delete";
import DialogDeleteAllComponent from "../../../components/penduduk-keluar-components/dialog-delete-all/delete-all";
import DialogDetailsComponent from "../../../components/penduduk-keluar-components/dialog-details/dialog-details";
import { getPendudukKeluarById } from "../../../reducers/penduduk_keluar/penduduk_keluar.actions";
import { Alert, Skeleton } from "@material-ui/lab";
import DialogEditComponent from "../../../components/penduduk-keluar-components/dialog-edit-keterangan/dialog-edit";
import DialogDeleteKeteranganComponent from "../../../components/penduduk-keluar-components/dialog-delete-keterangan/dialog-delete";
import { clearInfos } from "../../../reducers/infos/info.actions";
import AddIcon from "@material-ui/icons/Add";

const PendudukKeluarDetailPage = ({ ...props }) => {
  const classes = useStyles();
  const {
    getPendudukKeluarById,
    pendudukKeluarByID,
    match,
    isLoading,
    keteranganKeluar,
    infosMessage,
    infosID,
    clearInfos,
    isLoadingKeterangan,
  } = props;
  const paramsId = match.params.id;
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [openDialogDeleteKeterangan, setOpenDialogDeleteKeterangan] = useState(
    false
  );
  const [openDialogDetails, setOpenDialogDetails] = useState(false);
  const [openDialogDeleteAll, setOpenDialogDeleteAll] = useState(false);
  const [dataToDetails, setDataToDetails] = useState([]);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const isFirstRender = useRef(true);

  const history = useHistory();

  useEffect(() => {
    if (isFirstRender.current) {
      clearInfos();
      getPendudukKeluarById(paramsId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsId, clearInfos]);

  const firstData = pendudukKeluarByID.length === 0 ? [{}] : pendudukKeluarByID;

  return (
    <React.Fragment>
      {infosID === "DELETE_KETERANGAN_SUCCESS" ? (
        <Box marginBottom={2} width="50%">
          <Alert icon={false} severity="success">
            {infosMessage}
          </Alert>
        </Box>
      ) : null}
      <Box marginTop={3}>
        <Paper>
          <Box p={3}>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="baseline"
            >
              <Box>
                <Typography variant="h6">
                  Detail Informasi Penduduk Keluar
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row">
                <Box>
                  <Button
                    className={classes.backButton}
                    onClick={(e) => {
                      e.preventDefault();
                      history.push("/penduduk_keluar");
                    }}
                  >
                    Kembali
                  </Button>
                </Box>
                <Box>
                  <Hidden
                    xlDown={
                      keteranganKeluar.length === 0 ||
                      keteranganKeluar === undefined
                    }
                  >
                    <Button
                      onClick={() =>
                        history.push(`/penduduk_keluar/${paramsId}/d/preview`)
                      }
                      className={classes.downloadButton}
                    >
                      Lihat PDF
                    </Button>
                  </Hidden>
                </Box>
              </Box>
            </Box>
            <Box marginTop={2} marginBottom={2}>
              <Divider />
            </Box>
            {keteranganKeluar.length === 0 || keteranganKeluar === undefined ? (
              isLoadingKeterangan ? null : (
                <Box display="flex" flexDirection="column">
                  <Box>
                    <img
                      src={dataIsNull}
                      className={classes.dataIsNull}
                      alt="Data Keterangan Keluar Not Found"
                    />
                  </Box>
                  <Box display="flex" marginTop={4} justifyContent="center">
                    <Typography className={classes.textIsNull}>
                      DATA KETERANGAN KELUAR KOSONG
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    marginTop={2}
                    marginBottom={1}
                    justifyContent="center"
                  >
                    <GreyText
                      text="Silakan tambah data keterangan keluar penduduk terlebih dahulu"
                      className={classes.textCons}
                    />
                  </Box>
                  <Box display="flex" justifyContent="center" marginBottom={5}>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        history.push(`/penduduk_keluar/${paramsId}/i/k`);
                      }}
                      startIcon={<AddIcon />}
                      className={classes.goToButton}
                    >
                      Tambah Keterangan
                    </Button>
                  </Box>
                </Box>
              )
            ) : null}
            {keteranganKeluar.length === 0 ? (
              isLoadingKeterangan ? (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  margin="10rem auto 10rem auto"
                >
                  <CircularProgress color="primary" />
                </Box>
              ) : null
            ) : null}
            <Hidden
              xlDown={
                keteranganKeluar.length === 0 || keteranganKeluar === undefined
              }
            >
              <KeteranganKeluarComponent
                data={keteranganKeluar}
                isLoading={isLoadingKeterangan}
                setOpenDialogEdit={setOpenDialogEdit}
                setOpenDialogDeleteKeterangan={setOpenDialogDeleteKeterangan}
              />
            </Hidden>
            <Box marginTop={2} marginBottom={2}>
              <Divider />
            </Box>
            <Box marginTop={2} marginBottom={2}>
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography variant="h6">Pengusul Penduduk Keluar</Typography>
                </Box>
                <Box>
                  {isLoadingKeterangan ? null : (
                    <Button
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenDialogDeleteAll(true);
                      }}
                      className={classes.deleteButton}
                    >
                      Hapus Semua Data
                    </Button>
                  )}
                </Box>
              </Box>
            </Box>
            <Box marginTop={2} marginBottom={2}>
              <Divider />
            </Box>
            <PengusulKeluarComponent
              data={firstData}
              isLoading={isLoadingKeterangan}
            />
          </Box>
        </Paper>
        <Box marginTop={3} marginLeft={3}>
          <Typography variant="h6">Pengikut Keluar Desa</Typography>
        </Box>
        <Box marginTop={2} marginBottom={2}>
          <Divider />
        </Box>
        {pendudukKeluarByID.length - 1 === 0 ? (
          isLoading ? null : (
            <Box display="flex" flexDirection="column" marginBottom={2}>
              <Box>
                <img
                  src={dataIsNull}
                  className={classes.dataIsNull}
                  alt="Data Keterangan Keluar Not Found"
                />
              </Box>
              <Box display="flex" marginTop={4} justifyContent="center">
                <Typography className={classes.textIsNull}>
                  TIDAK ADA PENGIKUT KELUAR
                </Typography>
              </Box>
              <Box
                display="flex"
                marginTop={2}
                marginBottom={1}
                justifyContent="center"
              >
                <GreyText
                  text="Anda dapat menambahkan pengikut keluar melalui halaman edit anggota keluarga. Dan harus satu Kartu Keluarga."
                  className={classes.textCons}
                />
              </Box>
            </Box>
          )
        ) : null}
        {isLoading ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <Skeleton animation="wave" width="350px" height="400px" />
          </Box>
        ) : null}
        <Grid container spacing={1}>
          <Grid container justify="center" item xs={12} spacing={2}>
            {pendudukKeluarByID.map((d, idx) => {
              return idx > 0 ? (
                isLoading ? null : (
                  <Grid item key={idx}>
                    <Paper
                      style={{
                        borderRadius: 10,
                        width: "380px",
                        backgroundColor: "#F0F0F0",
                        boxShadow: "none",
                      }}
                    >
                      <Box position="absolute" marginTop={1.4} marginLeft={3}>
                        <Typography className={classes.textHeader}>
                          {d.nama_lengkap}
                        </Typography>
                      </Box>
                      <Box>
                        <Box
                          display="flex"
                          justifyContent="flex-end"
                          className={classes.cardHeader}
                        >
                          <IconButton
                            onClick={(e) => {
                              e.preventDefault();
                              setAnchorEl(e.currentTarget);
                            }}
                            style={{ color: "#fff" }}
                          >
                            <MoreVertIcon />
                          </IconButton>
                          <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={(e) => {
                              e.preventDefault();
                              setAnchorEl(null);
                            }}
                          >
                            <MenuItem
                              onClick={(e) => {
                                e.preventDefault();
                                setAnchorEl(null);
                                setOpenDialogDelete(true);
                                setDataToDetails(d);
                              }}
                            >
                              Hapus
                            </MenuItem>
                          </Menu>
                        </Box>
                      </Box>
                      <Box p={3} paddingTop={2} paddingBottom={2}>
                        <Box
                          display="flex"
                          flexDirection="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Box>
                            <Box marginBottom={2}>
                              <Box marginBottom={1}>
                                <Typography className={classes.header}>
                                  Umur
                                </Typography>
                              </Box>
                              <Box>
                                <Typography className={classes.values}>
                                  100
                                </Typography>
                              </Box>
                            </Box>
                            <Box marginBottom={2}>
                              <Box marginBottom={1}>
                                <Typography className={classes.header}>
                                  Pekerjaan
                                </Typography>
                              </Box>
                              <Box>
                                <Typography className={classes.values}>
                                  Web Developer
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                          <Box>
                            <Box marginBottom={2}>
                              <Box marginBottom={1}>
                                <Typography className={classes.header}>
                                  Pendidikan Terakhir
                                </Typography>
                              </Box>
                              <Box>
                                <Typography className={classes.values}>
                                  S3
                                </Typography>
                              </Box>
                            </Box>
                            <Box marginBottom={2}>
                              <Box marginBottom={1}>
                                <Typography className={classes.header}>
                                  Kedudukan Keluarga
                                </Typography>
                              </Box>
                              <Box>
                                <Typography className={classes.values}>
                                  Anak
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <Box
                          display="flex"
                          justifyContent="center"
                          margin="0 auto"
                        >
                          <Typography
                            component={Link}
                            to="#!"
                            className={classes.textLink}
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenDialogDetails(true);
                              setDataToDetails(d);
                            }}
                          >
                            Lihat Detail
                          </Typography>
                        </Box>
                      </Box>
                    </Paper>
                  </Grid>
                )
              ) : (
                []
              );
            })}
          </Grid>
        </Grid>
      </Box>
      <DialogDeleteComponent
        open={openDialogDelete}
        handleClose={setOpenDialogDelete}
        id={paramsId}
        dataPendudukKeluar={dataToDetails}
      />
      <DialogDetailsComponent
        open={openDialogDetails}
        handleClose={setOpenDialogDetails}
        data={dataToDetails}
      />
      <DialogDeleteAllComponent
        open={openDialogDeleteAll}
        handleClose={setOpenDialogDeleteAll}
        id={paramsId}
      />
      <DialogEditComponent
        open={openDialogEdit}
        handleClose={setOpenDialogEdit}
        data={keteranganKeluar}
        paramsId={paramsId}
      />
      <DialogDeleteKeteranganComponent
        open={openDialogDeleteKeterangan}
        handleClose={setOpenDialogDeleteKeterangan}
        data={keteranganKeluar}
        idDataKeluar={paramsId}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    pendudukKeluarByID: state.penduduk_keluar.penduduk_keluar_by_id,
    keteranganKeluar: state.penduduk_keluar.keterangan_keluar_by_id,
    isLoading: state.penduduk_keluar.isLoading,
    isLoadingKeterangan: state.penduduk_keluar.isLoadingKeterangan,
    infosMessage: state.infos.message,
    infosID: state.infos.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPendudukKeluarById: (id) => dispatch(getPendudukKeluarById(id)),
    clearInfos: () => dispatch(clearInfos()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendudukKeluarDetailPage);
