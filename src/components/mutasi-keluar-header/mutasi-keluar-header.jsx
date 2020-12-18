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
import { connect, useSelector } from "react-redux";
import {
  getPengikutKeluar,
  getKeteranganKeluar,
} from "../../reducers/pengikut_keluar/pengikut_keluar.actions";
import { PaperPengikutKeluar } from "./pengikut-keluar/pengikut-keluar";
import KeteranganKeluarComponent from "./keterangan-keluar/keterangan-keluar";
import { Skeleton } from "@material-ui/lab";
import { photoPath } from "../../helpers/getAvatars";

const MutasiKeluarHeader = ({ ...props }) => {
  const classes = useStyles();
  const dataPengusul = useSelector(
    (state) => state.pengikut_keluar.pengikut_keluar.t
  );
  const isLoading = useSelector((state) => state.pengikut_keluar.isLoading);
  const keteranganPengusul = useSelector(
    (state) => state.pengikut_keluar.keterangan_keluar.data
  );

  const { getPengikutKeluar, paramsId, getKeteranganKeluar } = props;

  useEffect(() => {
    const fetchData = async () => {
      await getPengikutKeluar(paramsId);
      await getKeteranganKeluar(paramsId);
    };
    fetchData();
  }, [getPengikutKeluar, paramsId, getKeteranganKeluar]);

  const params = (data) => {
    return data ? data : "";
  };

  const fixedData = params(dataPengusul);

  const fixedDataKeterangan = params(keteranganPengusul);

  const pengikutKeluar =
    fixedData.pengikut_keluar === undefined ? [{}] : fixedData.pengikut_keluar;

  const mappedDataPengusul =
    fixedDataKeterangan === "" ? [{}] : fixedDataKeterangan;

  const path = isLoading
    ? "//"
    : keteranganPengusul
    ? keteranganPengusul[0].foto_pengusul
    : "//";

  console.log(mappedDataPengusul);

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
                      Nama Pengusul : {fixedData.nama_lengkap}
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
                      NIK : {fixedData.nik}
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
                      Umur : {fixedData.umur}
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
                      Tempat Tgl. Lahir : {fixedData.tempat_tanggal_lahir}
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
                      Agama : {fixedData.agama}
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
                      Alamat Asal : {fixedData.alamat_asal}
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
                      Pekerjaan : {fixedData.pekerjaan}
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
                      Posisi Dalam Keluarga : {fixedData.posisi_dalam_keluarga}
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
            <Typography variant="h6">Keterangan Keluar</Typography>
          </Box>
          {mappedDataPengusul.map((d, idx) => (
            <KeteranganKeluarComponent
              key={idx}
              dataPengikutKeluar={pengikutKeluar}
              data={fixedData}
              mappedDataPengusul={d}
            />
          ))}
        </Paper>
      </Container>
      <Box marginTop={2} marginBottom={2}>
        <Divider />
      </Box>
      <Box marginTop={2} marginBottom={2} marginLeft={7}>
        <Box>
          <Typography variant="h6">Pengikut Keluar</Typography>
        </Box>
      </Box>
      <Grid container spacing={3}>
        {isLoading ? (
          <Grid container item justify="center" sm={12}>
            <Skeleton animation="wave" width="40%" height={200} />
          </Grid>
        ) : (
          <Grid container item spacing={3} justify="center" sm={12}>
            {pengikutKeluar.map((d, idx) => (
              <Grid item key={idx}>
                <PaperPengikutKeluar fixedData={fixedData} d={d} key={idx} />
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

const mapDispatchToProps = (dispatch) => {
  return {
    getPengikutKeluar: (id) => dispatch(getPengikutKeluar(id)),
    getKeteranganKeluar: (id) => dispatch(getKeteranganKeluar(id)),
  };
};

export default connect(null, mapDispatchToProps)(MutasiKeluarHeader);
