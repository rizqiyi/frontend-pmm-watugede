import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./penduduk-keluar-details.style";

export const PendudukKeluarDetailsPage = () => {
  const classes = useStyles();
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
                  >
                    Update Data
                  </Button>
                </Box>
                <Box>
                  <Button variant="contained" className={classes.deleteButton}>
                    Delete Data
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
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box>
                <Avatar style={{ height: "140px", width: "140px" }}></Avatar>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="baseline"
            >
              <Box>
                <Box marginTop={2}>
                  <Typography variant="subtitle1">
                    NIK : 1231239129391239
                  </Typography>
                </Box>
                <Box marginTop={2}>
                  <Typography variant="subtitle1">
                    Nama Pengusul : Aditya Rachman
                  </Typography>
                </Box>
                <Box marginTop={2}>
                  <Typography variant="subtitle1">
                    Tempat Tanggal Lahir : 17 Agustus 1945
                  </Typography>
                </Box>
                <Box marginTop={2}>
                  <Typography variant="subtitle1">Umur : 100</Typography>
                </Box>
              </Box>
              <Box>
                <Box>
                  <Box marginTop={2}>
                    <Typography variant="subtitle1">
                      Jenis Kelamin : Laki laki
                    </Typography>
                  </Box>
                  <Box marginTop={2}>
                    <Typography variant="subtitle1">
                      Status Perkawinan : Belum Kawin
                    </Typography>
                  </Box>
                  <Box marginTop={2}>
                    <Typography variant="subtitle1">
                      Pendidikan Terakhir : SMA
                    </Typography>
                  </Box>
                  <Box marginTop={2}>
                    <Typography variant="subtitle1">Agama : Islam</Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box marginTop={2}>
                  <Typography variant="subtitle1">
                    Posisi Dalam Keluarga : Ayah
                  </Typography>
                </Box>
                <Box
                  marginTop={2}
                  style={{
                    maxWidth: "340px",
                  }}
                >
                  <Typography variant="subtitle1">
                    Alamat Asal : Watugede Malang
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box marginTop={4} marginBottom={2}>
              <Divider />
            </Box>
            <Box marginLeft={4}>
              <Typography
                variant="subtitle1"
                style={{ textDecoration: "underline" }}
              >
                Data Keterangan Keluar
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Box marginLeft={4}>
                <Box marginTop={2}>
                  <Typography variant="subtitle1">
                    Tanggal KTP : 12 Desember 2020
                  </Typography>
                </Box>
                <Box marginTop={2}>
                  <Typography variant="subtitle1">
                    Alamat Pindah : Menteng, Jakarta
                  </Typography>
                </Box>
                <Box marginTop={2}>
                  <Typography variant="subtitle1">
                    Alasan Pindah : Dinas
                  </Typography>
                </Box>
              </Box>
              <Box>
                <Box marginTop={2}>
                  <Typography variant="subtitle1">Pengikut : 1</Typography>
                </Box>
                <Box marginTop={2}>
                  <Typography variant="subtitle1">
                    Meninggalkan Desa Pada : 20 Desember 2020
                  </Typography>
                </Box>
                <Box marginTop={2}>
                  <Typography variant="subtitle1">Catatan : -</Typography>
                </Box>
              </Box>
            </Box>
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
          <Grid container item spacing={3} justify="center" sm={12}>
            <Grid item>
              <Paper>
                <Box p={3}>
                  <Box>
                    <Typography>Nama Lengkap : Rizqiyanto Imanullah</Typography>
                  </Box>
                  <Box marginTop={3}>
                    <Typography>Jenis Kelamin : Laki laki</Typography>
                  </Box>
                  <Box marginTop={3}>
                    <Typography>Umur : 20</Typography>
                  </Box>
                  <Box marginTop={3}>
                    <Typography>Posisi dalam Keluarga : Anak</Typography>
                  </Box>
                  <Box marginTop={2} marginBottom={1}>
                    <Divider />
                  </Box>
                  <Box display="flex" justifyContent="flex-end">
                    <Typography
                      variant="subtitle2"
                      className={classes.textLink}
                    >
                      Lihat Detail
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};
