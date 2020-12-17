import React, { useEffect } from "react";
import FaceIcon from "@material-ui/icons/Face";
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
import { getPengikutKeluar } from "../../reducers/pengikut_keluar/pengikut_keluar.actions";
import { PaperPengikutKeluar } from "./pengikut-keluar/pengikut-keluar";
import { KeteranganKeluarComponent } from "./keterangan-keluar/keterangan-keluar";

const MutasiKeluarHeader = ({ ...props }) => {
  const classes = useStyles();
  const idPenduduk = useSelector((state) => state.penduduks.id);
  const dataPengusul = useSelector(
    (state) => state.pengikut_keluar.pengikut_keluar_obj.t
  );
  const { getPengikutKeluar, paramsId } = props;

  useEffect(() => {
    const fetchData = async () => {
      await getPengikutKeluar(idPenduduk !== null ? idPenduduk : paramsId);
    };
    fetchData();
  }, [getPengikutKeluar, idPenduduk, paramsId]);

  const params = (data) => {
    return data ? data : "";
  };

  const fixedData = params(dataPengusul);
  const pengikutKeluar =
    fixedData.pengikut_keluar === undefined ? [{}] : fixedData.pengikut_keluar;

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
                Pengusul Pengikut Keluar
              </Typography>
            </Box>
            <Box display="flex" p={3} flexDirection="row">
              <Box>
                <Avatar style={{ height: "140px", width: "140px" }}>
                  <FaceIcon style={{ height: "70px", width: "70px" }} />
                </Avatar>
              </Box>
              <Box marginLeft={5} display="flex" flexDirection="column">
                <Box>
                  <Typography
                    variant="subtitle2"
                    className={classes.textPengusul}
                  >
                    Nama Pengusul : {fixedData.nama_lengkap}
                  </Typography>
                </Box>
                <Box marginTop={1}>
                  <Typography
                    variant="subtitle2"
                    className={classes.textPengusul}
                  >
                    NIK : {fixedData.nik}
                  </Typography>
                </Box>
                <Box marginTop={1}>
                  <Typography
                    variant="subtitle2"
                    className={classes.textPengusul}
                  >
                    Umur : {fixedData.umur}
                  </Typography>
                </Box>
                <Box marginTop={1}>
                  <Typography
                    variant="subtitle2"
                    className={classes.textPengusul}
                  >
                    Tempat Tgl. Lahir : {fixedData.tempat_tanggal_lahir}
                  </Typography>
                </Box>
                <Box marginTop={1}>
                  <Typography
                    variant="subtitle2"
                    className={classes.textPengusul}
                  >
                    Agama : {fixedData.agama}
                  </Typography>
                </Box>
                <Box marginTop={1}>
                  <Typography
                    variant="subtitle2"
                    className={classes.textPengusul}
                  >
                    Alamat Asal : {fixedData.alamat_asal}
                  </Typography>
                </Box>
                <Box marginTop={1}>
                  <Typography
                    variant="subtitle2"
                    className={classes.textPengusul}
                  >
                    Pekerjaan : {fixedData.pekerjaan}
                  </Typography>
                </Box>
                <Box marginTop={1}>
                  <Typography
                    variant="subtitle2"
                    className={classes.textPengusul}
                  >
                    Posisi Dalam Keluarga : {fixedData.posisi_dalam_keluarga}
                  </Typography>
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
          <KeteranganKeluarComponent
            dataPengikutKeluar={pengikutKeluar}
            data={fixedData}
          />
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
        <Grid container item spacing={3} justify="center" sm={12}>
          {pengikutKeluar.map((d, idx) => (
            <Grid item key={idx}>
              <PaperPengikutKeluar fixedData={fixedData} d={d} key={idx} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Box marginTop={2} marginBottom={2}>
        <Divider />
      </Box>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPengikutKeluar: (id) => dispatch(getPengikutKeluar(id)),
  };
};

export default connect(null, mapDispatchToProps)(MutasiKeluarHeader);
