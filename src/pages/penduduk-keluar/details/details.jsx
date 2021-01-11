import {
  Box,
  Button,
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

const PendudukKeluarDetailPage = ({ ...props }) => {
  const classes = useStyles();
  const {
    getPendudukKeluarById,
    pendudukKeluarByID,
    match,
    isLoading,
    keteranganKeluar,
    infosStatus,
    infosMessage,
    infosID,
    clearInfos,
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
      {infosID === "DELETE_KETERANGAN_SUCCESS" && infosStatus === 200 ? (
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
              <Box>
                <Hidden
                  xlDown={
                    keteranganKeluar.length === 0 ||
                    keteranganKeluar === undefined
                  }
                >
                  <Button
                    color="primary"
                    type="submit"
                    className={classes.insertButton}
                  >
                    Download PDF
                  </Button>
                </Hidden>
              </Box>
            </Box>
            <Box marginTop={2} marginBottom={2}>
              <Divider />
            </Box>
            {keteranganKeluar.length === 0 || keteranganKeluar === undefined ? (
              isLoading ? null : (
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
                </Box>
              )
            ) : null}
            {keteranganKeluar.length !== 0 ? null : isLoading ? (
              <Box display="flex" justifyContent="center" alignItems="center">
                <Skeleton animation="wave" width="900px" height="300px" />
              </Box>
            ) : null}
            {keteranganKeluar.length !== 0 ? (
              <KeteranganKeluarComponent
                data={keteranganKeluar}
                isLoading={isLoading}
                setOpenDialogEdit={setOpenDialogEdit}
                setOpenDialogDeleteKeterangan={setOpenDialogDeleteKeterangan}
              />
            ) : null}
            <Box marginTop={3}>
              <Typography variant="h6">Pengusul Penduduk Keluar</Typography>
            </Box>
            <Box marginTop={2} marginBottom={2}>
              <Divider />
            </Box>
            <PengusulKeluarComponent data={firstData} isLoading={isLoading} />
            <Box marginTop={2} marginBottom={2}>
              <Divider />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              marginRight={2.3}
            >
              <Box marginRight={2}>
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
              </Box>
            </Box>
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
                    <Paper>
                      <Box display="flex" justifyContent="flex-end">
                        <IconButton
                          onClick={(e) => {
                            e.preventDefault();
                            setAnchorEl(e.currentTarget);
                          }}
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
                      <Box p={3} paddingTop={0}>
                        <Box>
                          <Typography style={{ lineHeight: 2 }}>
                            Nama Lengkap : {d.nama_lengkap}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography style={{ lineHeight: 2 }}>
                            Umur : {d.umur}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography style={{ lineHeight: 2 }}>
                            Pendidikan Terakhir : {d.pendidikan_terakhir}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography style={{ lineHeight: 2 }}>
                            Kedudukan dalam Keluarga : {d.posisi_dalam_keluarga}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography style={{ lineHeight: 2 }}>
                            Pekerjaan : {d.pekerjaan}
                          </Typography>
                        </Box>
                        <Box marginTop={2}>
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
    infosStatus: state.infos.status,
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
