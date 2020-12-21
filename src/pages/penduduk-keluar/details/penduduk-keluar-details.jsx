import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useStyles } from "./penduduk-keluar-details.style";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { PengusulKeluarComponent } from "./pengusul-keluar/pengusul-keluar";
import { KeteranganKeluarComponent } from "./keterangan-keluar/keterangan-keluar";
import { connect } from "react-redux";
import {
  getKeteranganKeluarByID,
  getPendudukKeluarByID,
  getPengusulKeluarByID,
} from "../../../reducers/penduduk_keluar/penduduk_keluar.actions";
import { Link } from "react-router-dom";
import { DialogDetails } from "./dialog-details/dialog-details";
import { Skeleton } from "@material-ui/lab";
import GetAppIcon from "@material-ui/icons/GetApp";
import DialogUpdateComponent from "../../../components/penduduk-keluar-components/dialog-update/dialog-update";
import DialogDeleteComponent from "../../../components/penduduk-keluar-components/dialog-delete/dialog-delete";

const PendudukKeluarDetailsPage = ({ ...props }) => {
  const classes = useStyles();
  const {
    fetchKeterangan,
    fetchPengusulKeluar,
    fetchPendudukKeluar,
    match,
    pengusulKeluar,
    keteranganKeluar,
    pengikutKeluar,
    isLoading,
  } = props;
  const paramsId = match.params.id;

  const [open, setOpen] = useState(false);
  const [openDialogUpdatePengikut, setOpenDialogUpdatePengikut] = useState(
    false
  );
  const [openDialogDeletePengikut, setOpenDialogDeletePengikut] = useState(
    false
  );
  const [dataToComponents, setDataToComponents] = useState(false);
  const [data, setData] = useState([]);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchPengusulKeluar(paramsId);
    fetchKeterangan(paramsId);
    fetchPendudukKeluar(paramsId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsId]);

  return (
    <React.Fragment>
      <Box>
        <Paper>
          <Box p={4}>
            <Box display="flex" justifyContent="space-between">
              <Box>
                <Typography variant="h6">
                  Halaman Detail Penduduk Keluar
                </Typography>
              </Box>
              <Box display="flex" flexDirection="row">
                <Box marginRight={5}>
                  <Button
                    variant="contained"
                    className={classes.updateButton}
                    color="primary"
                    endIcon={<EditIcon />}
                  >
                    Perbarui Data
                  </Button>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    className={classes.deleteButton}
                    endIcon={<DeleteIcon />}
                  >
                    Hapus Data
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box marginTop={2} marginBottom={2}>
              <Divider />
            </Box>
            <Box marginLeft={4}>
              <Typography
                variant="subtitle1"
                style={{ textDecoration: "underline" }}
              >
                Data Pengusul Keluar
              </Typography>
            </Box>
            <PengusulKeluarComponent
              data={pengusulKeluar}
              isLoading={isLoading}
              path={keteranganKeluar}
            />
            <Box marginTop={4} marginBottom={2}>
              <Divider />
            </Box>
            <KeteranganKeluarComponent
              data={keteranganKeluar}
              isLoading={isLoading}
            />
          </Box>
        </Paper>
        <Box marginLeft={4} marginTop={4} paddingLeft={3}>
          <Typography
            variant="subtitle1"
            style={{ textDecoration: "underline" }}
          >
            Daftar Pengikut Keluar
          </Typography>
        </Box>
        <Grid container spacing={3}>
          {isLoading ? (
            <Grid container item spacing={3} justify="center" sm={12}>
              <Skeleton width={300} height={300} />
            </Grid>
          ) : (
            <Grid container item spacing={3} justify="center" sm={12}>
              {pengikutKeluar.map((d, idx) => (
                <Grid item key={idx}>
                  <Paper>
                    <Box
                      display="flex"
                      marginTop={3}
                      p={1}
                      justifyContent="flex-end"
                    >
                      <Box>
                        <IconButton
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenDialogUpdatePengikut(true);
                            setDataToComponents(d);
                          }}
                          className={classes.editIconButton}
                        >
                          <EditIcon />
                        </IconButton>
                      </Box>
                      <Box>
                        <IconButton
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenDialogDeletePengikut(true);
                            setDataToComponents(d);
                          }}
                          className={classes.deleteIconButton}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Box>
                    <Box p={3} paddingTop={0}>
                      <Box>
                        <Typography>
                          Nama Lengkap : {d.nama_lengkap_keluarga}
                        </Typography>
                      </Box>
                      <Box marginTop={3}>
                        <Typography>
                          Jenis Kelamin : {d.jenis_kelamin_keluarga}
                        </Typography>
                      </Box>
                      <Box marginTop={3}>
                        <Typography>Umur : {d.umur_keluarga}</Typography>
                      </Box>
                      <Box marginTop={3}>
                        <Typography>
                          Posisi dalam Keluarga : {d.keterangan_dalam_keluarga}
                        </Typography>
                      </Box>
                      <Box marginTop={2} marginBottom={1}>
                        <Divider />
                      </Box>
                      <Box display="flex" justifyContent="flex-end">
                        <Typography
                          variant="subtitle2"
                          component={Link}
                          to="#!"
                          onClick={(e) => {
                            e.preventDefault();
                            setData(d);
                            handleClick();
                          }}
                          className={classes.textLink}
                        >
                          Lihat Detail
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
        <Box marginTop={2} marginBottom={2}>
          <Divider />
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Box>
            <Button
              variant="contained"
              className={classes.updateButton}
              color="primary"
              endIcon={<GetAppIcon />}
            >
              Unduh PDF
            </Button>
          </Box>
        </Box>
      </Box>
      <DialogDetails
        dataPengusul={pengusulKeluar}
        data={data}
        open={open}
        handleClose={handleClose}
      />
      <DialogUpdateComponent
        data={dataToComponents}
        handleClose={setOpenDialogUpdatePengikut}
        open={openDialogUpdatePengikut}
        idPengusul={paramsId}
      />
      <DialogDeleteComponent
        idPengusul={paramsId}
        idPengikut={dataToComponents}
        open={openDialogDeletePengikut}
        handleClose={setOpenDialogDeletePengikut}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    pengusulKeluar: state.penduduk_keluar.penduduk_keluar_detail,
    keteranganKeluar: state.penduduk_keluar.keterangan_keluar,
    pengikutKeluar: state.penduduk_keluar.pengikut_keluar,
    isLoading: state.penduduk_keluar.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchKeterangan: (id) => dispatch(getKeteranganKeluarByID(id)),
    fetchPengusulKeluar: (id) => dispatch(getPengusulKeluarByID(id)),
    fetchPendudukKeluar: (id) => dispatch(getPendudukKeluarByID(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendudukKeluarDetailsPage);
