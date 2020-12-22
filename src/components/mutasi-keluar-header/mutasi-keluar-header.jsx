import React, { useEffect } from "react";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./mutasi-keluar-header.style";
import { connect } from "react-redux";
import {
  getPengikutKeluar,
  getKeteranganKeluar,
  getPengusulKeluar,
} from "../../reducers/pengikut_keluar/pengikut_keluar.actions";
import { PaperPengikutKeluar } from "./pengikut-keluar/pengikut-keluar";
import KeteranganKeluarComponent from "./keterangan-keluar/keterangan-keluar";
import { Skeleton } from "@material-ui/lab";
import { photoPath } from "../../helpers/getAvatars";
import dataIsNullImage from "../../assets/images/no-data-found.svg";

const MutasiKeluarHeader = ({ ...props }) => {
  const classes = useStyles();

  const {
    getPengikutKeluar,
    paramsId,
    getKeteranganKeluar,
    getPengusulKeluar,
    pengikutKeluar,
    pengusulKeluar,
    isLoading,
    keteranganKeluar,
  } = props;

  useEffect(() => {
    getPengikutKeluar(paramsId);
    getKeteranganKeluar(paramsId);
    getPengusulKeluar(paramsId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramsId, getPengikutKeluar, getKeteranganKeluar, getPengusulKeluar]);

  const isNull = pengikutKeluar.length === 0;
  const path =
    keteranganKeluar === undefined || keteranganKeluar.length === 0
      ? "//"
      : keteranganKeluar[0].foto_pengusul;

  return (
    <React.Fragment>
      <Box marginTop={2} marginBottom={2}>
        <Divider />
      </Box>
      <Container maxWidth="md">
        <Paper>
          <Box display="flex" flexDirection="column">
            <Box marginTop={1} marginLeft={3}>
              <Typography variant="h6" style={{ textDecoration: "underline" }}>
                Pengusul Keluar Desa
              </Typography>
            </Box>
            <Box display="flex" p={3} flexDirection="row">
              <Box>
                {isLoading ? (
                  <Skeleton
                    variant="circle"
                    animation="wave"
                    width={140}
                    height={140}
                  />
                ) : (
                  <Avatar
                    style={{ height: "140px", width: "140px" }}
                    src={photoPath(path)}
                  ></Avatar>
                )}
              </Box>
              <Box marginLeft={5} display="flex" flexDirection="column">
                <Box>
                  {isLoading ? (
                    <Skeleton animation="wave" width={300} />
                  ) : (
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      Nama Pengusul : {pengusulKeluar.nama_lengkap}
                    </Typography>
                  )}
                </Box>
                <Box marginTop={1}>
                  {isLoading ? (
                    <Skeleton animation="wave" width={300} />
                  ) : (
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      NIK : {pengusulKeluar.nik}
                    </Typography>
                  )}
                </Box>
                <Box marginTop={1}>
                  {isLoading ? (
                    <Skeleton animation="wave" width={300} />
                  ) : (
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      Umur : {pengusulKeluar.umur}
                    </Typography>
                  )}
                </Box>
                <Box marginTop={1}>
                  {isLoading ? (
                    <Skeleton animation="wave" width={300} />
                  ) : (
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      Tempat Tgl. Lahir : {pengusulKeluar.tempat_tanggal_lahir}
                    </Typography>
                  )}
                </Box>
                <Box marginTop={1}>
                  {isLoading ? (
                    <Skeleton animation="wave" width={300} />
                  ) : (
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      Agama : {pengusulKeluar.agama}
                    </Typography>
                  )}
                </Box>
                <Box marginTop={1}>
                  {isLoading ? (
                    <Skeleton animation="wave" width={300} />
                  ) : (
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      Alamat Asal : {pengusulKeluar.alamat_asal}
                    </Typography>
                  )}
                </Box>
                <Box marginTop={1}>
                  {isLoading ? (
                    <Skeleton animation="wave" width={300} />
                  ) : (
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      Pekerjaan : {pengusulKeluar.pekerjaan}
                    </Typography>
                  )}
                </Box>
                <Box marginTop={1}>
                  {isLoading ? (
                    <Skeleton animation="wave" width={300} />
                  ) : (
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      Posisi Dalam Keluarga :{" "}
                      {pengusulKeluar.posisi_dalam_keluarga}
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </Box>
          <Box marginTop={2}>
            <Divider />
          </Box>
          <Box marginTop={2} marginLeft={3}>
            <Typography variant="h6" style={{ textDecoration: "underline" }}>
              Keterangan Keluar
            </Typography>
          </Box>
          <KeteranganKeluarComponent
            dataPengikutKeluar={pengikutKeluar}
            data={keteranganKeluar}
            id={paramsId}
          />
        </Paper>
      </Container>
      <Box marginTop={2} marginBottom={2}>
        <Divider />
      </Box>
      <Box marginTop={2} marginBottom={2} marginLeft={6}>
        <Container maxWidth="md">
          <Typography variant="h6">Pengikut Keluar</Typography>
        </Container>
      </Box>
      <Grid container spacing={3}>
        {isLoading ? (
          <Grid container item justify="center" sm={12}>
            <Skeleton animation="wave" width="80%" height={60} />
          </Grid>
        ) : isNull ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            margin="0 auto"
            marginTop={3}
            marginBottom={4}
            flexDirection="column"
          >
            <Box>
              <img src={dataIsNullImage} alt="Data Not Found" />
            </Box>
            <Box display="flex" justifyContent="center">
              <Typography className={classes.textIsNull}>
                Data Kosong
              </Typography>
            </Box>
          </Box>
        ) : null}
        {isLoading ? (
          <Grid container item justify="center" sm={12}>
            <Skeleton animation="wave" width="80%" height={60} />
          </Grid>
        ) : (
          <Grid container item spacing={3} justify="center" sm={12}>
            {pengikutKeluar.map((d, idx) => (
              <Grid item key={idx}>
                <PaperPengikutKeluar
                  fixedData={pengusulKeluar}
                  d={d}
                  key={idx}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Grid>
      {pengikutKeluar.length !== 0 ? (
        <Box marginTop={3}>
          <Typography
            variant="subtitle2"
            style={{
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: 12,
              wordWrap: "break-word",
              maxWidth: 400,
            }}
          >
            *Jika ingin update pengikut setelah input pengikut keluar harap
            update kolom pada halaman penduduk keluar.
          </Typography>
        </Box>
      ) : null}
      <Box marginTop={1} marginBottom={2}>
        <Divider />
      </Box>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    pengikutKeluar: state.pengikut_keluar.pengikut_keluar,
    pengusulKeluar: state.pengikut_keluar.pengusul_keluar,
    isLoading: state.pengikut_keluar.isLoading,
    keteranganKeluar: state.pengikut_keluar.keterangan_keluar_fix,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPengikutKeluar: (id) => dispatch(getPengikutKeluar(id)),
    getKeteranganKeluar: (id) => dispatch(getKeteranganKeluar(id)),
    getPengusulKeluar: (id) => dispatch(getPengusulKeluar(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MutasiKeluarHeader);
