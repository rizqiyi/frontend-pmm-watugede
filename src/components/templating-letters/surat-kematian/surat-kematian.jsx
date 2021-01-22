import { Box, CircularProgress, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import { useStyles } from "./surat-kematian.style";
import logo from "../../../assets/images/logo-kabupaten-malang.svg";

export const SuratKematianComponent = forwardRef(({ ...props }, ref) => {
  const { dataPenduduk, dataKematian, isFetching } = props;
  const classes = useStyles();

  const today = new Date();

  return (
    <div ref={ref}>
      {isFetching ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin="10rem auto 0px auto"
        >
          <CircularProgress color="primary" />
        </Box>
      ) : null}
      {isFetching ? null : (
        <Box
          p={2}
          paddingTop={4}
          paddingBottom={4}
          marginTop={4}
          margin="0px auto 0px auto"
          border="1px solid black"
          style={{ backgroundColor: "#fff", width: "fit-content" }}
        >
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                className={classes.fontCons}
                style={{ fontWeight: "bold" }}
              >
                UNTUK YANG BERSANGKUTAN
              </Typography>
            </Box>
            <Box border="1px solid black" p={1}>
              <Typography className={classes.fontCons}>LAMPIRAN A-5</Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <img
                src={logo}
                alt="Logo Kab. Malang"
                width={100}
                height="auto"
              />
            </Box>
            <Box>
              <Typography
                className={classes.newFont}
                style={{ fontSize: 24, fontWeight: "bold" }}
              >
                KUTIPAN
              </Typography>
            </Box>
            <Box>
              <Typography
                className={classes.newFont}
                style={{
                  fontSize: 26,
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                SURAT KETERANGAN KEMATIAN
              </Typography>
            </Box>
            <Box marginTop={2}>
              <Typography className={classes.newFont}>
                Nomor: {dataKematian.nomor_surat_kematian}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box>
              <p
                className={classes.fontCons}
                style={{ textIndent: "50px", width: "650px", fontSize: 16 }}
              >
                Yang bertanda tangan di bawah ini Kepala Desa Watugede Kecamatan
                Singosari Kabupaten Malang Menerangkan bahwa :{" "}
              </p>
            </Box>
            <Box className={classes.fontCons}>
              <table width="120%" style={{ borderCollapse: "none" }}>
                <tbody>
                  <tr>
                    <td style={{ fontSize: 14 }}>Nama Lengkap</td>
                    <td style={{ fontSize: 14 }}>
                      {" "}
                      : {dataPenduduk.nama_lengkap}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: 14 }}>NIK</td>
                    <td style={{ fontSize: 14 }}> : {dataPenduduk.nik}</td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: 14 }}>Jenis Kelamin</td>
                    <td style={{ fontSize: 14 }}>
                      {" "}
                      : {dataPenduduk.jenis_kelamin}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: 14 }}>Alamat</td>
                    <td
                      style={{
                        maxWidth:
                          `${dataPenduduk.alamat_asal}`.length < 77
                            ? "410px"
                            : "450px",
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      : {dataPenduduk.alamat_asal}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: 14 }}>Umur</td>
                    <td style={{ fontSize: 14 }}>
                      {" "}
                      : {dataPenduduk.umur} Tahun
                    </td>
                  </tr>
                </tbody>
              </table>
              <Typography className={classes.fontCons} style={{ fontSize: 14 }}>
                Telah meninggal dunia pada :{" "}
              </Typography>
              <table
                width={
                  `${dataPenduduk.alamat_asal}`.length < 77 ? "68%" : "51%"
                }
                style={{ borderCollapse: "none" }}
              >
                <tbody>
                  <tr>
                    <td style={{ fontSize: 14 }}>Hari</td>
                    <td style={{ fontSize: 14 }}>
                      {" "}
                      : {dataKematian.hari_meninggal}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: 14 }}>Tanggal</td>
                    <td style={{ fontSize: 14 }}>
                      {" "}
                      : {dataKematian.tanggal_meninggal}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: 14 }}>Di </td>
                    <td style={{ fontSize: 14 }}>
                      {" "}
                      : {dataKematian.tempat_meninggal}
                    </td>
                  </tr>
                </tbody>
              </table>
              <Box marginTop={2}>
                <Typography
                  className={classes.fontCons}
                  style={{ fontSize: 14 }}
                >
                  Disebabkan karena : {dataKematian.penyebab_meninggal}
                </Typography>
              </Box>
              <Box>
                <Typography
                  className={classes.fontCons}
                  style={{ fontSize: 14, textIndent: "50px" }}
                >
                  Surat keterangan ini dibuat atas dasar yang sebenarnya.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            position="relative"
            right="-25%"
            marginTop={6}
          >
            <Box>
              <Typography className={classes.newFont} style={{ fontSize: 15 }}>
                Watugede,{" "}
                {today.toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </Typography>
            </Box>
            <Box>
              <Typography className={classes.newFont} style={{ fontSize: 15 }}>
                A.n KEPALA DESA WATUGEDE
              </Typography>
            </Box>
            <Box>
              <Typography className={classes.newFont} style={{ fontSize: 15 }}>
                Sekretaris
              </Typography>
            </Box>
            <Box marginTop={7}>
              <Typography className={classes.newFont} style={{ fontSize: 15 }}>
                YUDI PURWONO
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
});
