import {
  Box,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import InsertComponents from "../../../components/penduduk-keluar-components/insert-keterangan-keluar/insert";
import dataIsNull from "../../../assets/images/no-data-found.svg";
import { GreyText } from "../../../components/typography/typography";
import { useStyles } from "./details.style";
import KeteranganKeluarComponent from "../../../components/penduduk-keluar-components/keterangan-keluar/keterangan-keluar";
import { PengusulKeluarComponent } from "../../../components/penduduk-keluar-components/pengusul-keluar/pengusul-keluar";
import { Link } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DialogDeleteComponent from "../../../components/penduduk-keluar-components/dialog-delete/dialog-delete";
import DialogEditComponent from "../../../components/penduduk-keluar-components/dialog-edit/dialog-edit";
import DialogDetailsComponent from "../../../components/penduduk-keluar-components/dialog-details/dialog-details";
import { getPendudukKeluarById } from "../../../reducers/penduduk_keluar/penduduk_keluar.actions";
import { Skeleton } from "@material-ui/lab";

const PendudukKeluarDetailPage = ({ ...props }) => {
  const classes = useStyles();
  const {
    getPendudukKeluarById,
    pendudukKeluarByID,
    match,
    isLoading,
    keteranganKeluar,
  } = props;
  const paramsId = match.params.id;
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const [openDialogDetails, setOpenDialogDetails] = useState(false);
  const [dataToDetails, setDataToDetails] = useState([]);
  useEffect(() => {
    getPendudukKeluarById(paramsId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsId]);

  const firstData = pendudukKeluarByID.length === 0 ? [{}] : pendudukKeluarByID;

  return (
    <React.Fragment>
      {keteranganKeluar === undefined ? (
        isLoading ? (
          <Box display="flex" justifyContent="center" alignItems="center">
            <Skeleton animation="wave" width="1000px" height="300px" />
          </Box>
        ) : (
          <InsertComponents dataId={paramsId} />
        )
      ) : null}
      <Box marginTop={3}>
        <Paper>
          <Box p={3}>
            <Typography variant="h6">
              Detail Informasi Penduduk Keluar
            </Typography>
            <Box marginTop={2} marginBottom={2}>
              <Divider />
            </Box>
            {keteranganKeluar === undefined ? (
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
            ) : null}
            {keteranganKeluar !== undefined ? (
              <KeteranganKeluarComponent
                data={keteranganKeluar}
                isLoading={isLoading}
              />
            ) : null}
            <Box marginTop={3}>
              <Typography variant="h6">Pengusul Penduduk Keluar</Typography>
            </Box>
            <Box marginTop={2} marginBottom={2}>
              <Divider />
            </Box>
            <PengusulKeluarComponent data={firstData} isLoading={isLoading} />
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
                  text="Anda dapat menambahkan pengikut keluar melalui halaman edit anggota keluarga"
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
                              setOpenDialogEdit(true);
                            }}
                          >
                            Edit
                          </MenuItem>
                          <MenuItem
                            onClick={(e) => {
                              e.preventDefault();
                              setAnchorEl(null);
                              setOpenDialogDelete(true);
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
      />
      <DialogEditComponent
        open={openDialogEdit}
        handleClose={setOpenDialogEdit}
      />
      <DialogDetailsComponent
        open={openDialogDetails}
        handleClose={setOpenDialogDetails}
        data={dataToDetails}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    pendudukKeluarByID: state.penduduk_keluar.penduduk_keluar_by_id,
    keteranganKeluar: state.penduduk_keluar.keterangan_keluar_by_id,
    isLoading: state.penduduk_keluar.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPendudukKeluarById: (id) => dispatch(getPendudukKeluarById(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendudukKeluarDetailPage);
