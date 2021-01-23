import { Box, Typography } from "@material-ui/core";
import React from "react";
import logo from "../../../../assets/images/logo-kabupaten-malang.svg";

export const BodyComponent = ({ ...props }) => {
  const { classes, signature, dataPenduduk, dataKematian } = props;

  const today = new Date();

  return (
    <React.Fragment>
      <Box margin="0 auto" padding={2} width="fit-content">
        <Box padding={1} border="1px solid black">
          <Box>
            <Typography
              className={classes.fontCons}
              style={{ fontWeight: "bold", fontSize: 14 }}
            >
              UNTUK YANG BERSANGKUTAN
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            marginTop={1}
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
                style={{ fontSize: 18, fontWeight: "bold" }}
              >
                KUTIPAN
              </Typography>
            </Box>
            <Box>
              <Typography
                className={classes.newFont}
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                SURAT KETERANGAN KEMATIAN
              </Typography>
            </Box>
            <Box
              marginTop={2}
              className={
                !dataKematian.nomor_surat_kematian ? classes.position : null
              }
            >
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
                style={{
                  textIndent: "50px",
                  fontSize: 14,
                  width: "fit-content",
                  wordWrap: "break-word",
                }}
              >
                Yang bertanda tangan di bawah ini {signature.nama_jabatan}{" "}
                Watugede Kecamatan Singosari Kabupaten Malang Menerangkan bahwa
                :{" "}
              </p>
            </Box>
          </Box>
          <Box>
            <Box className={classes.fontCons}>
              <table>
                <tbody>
                  <tr>
                    <td
                      style={{
                        fontSize: 14,
                        width: "fit-content",
                      }}
                    >
                      Nama
                    </td>
                    <td style={{ fontSize: 14, width: "fit-content" }}>
                      {" "}
                      : {dataPenduduk.nama_lengkap}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        fontSize: 14,
                        width: "fit-content",
                      }}
                    >
                      NIK
                    </td>
                    <td style={{ fontSize: 14, width: "fit-content" }}>
                      {" "}
                      : {dataPenduduk.nik}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        fontSize: 14,
                        width: "fit-content",
                      }}
                    >
                      Tempat Tanggal Lahir
                    </td>
                    <td style={{ fontSize: 14, width: "fit-content" }}>
                      {" "}
                      : {dataPenduduk.tempat_tanggal_lahir}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        fontSize: 14,
                        width: "fit-content",
                      }}
                    >
                      Jenis Kelamin
                    </td>
                    <td style={{ fontSize: 14, width: "fit-content" }}>
                      {" "}
                      : {dataPenduduk.jenis_kelamin}
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        fontSize: 14,
                        width: "fit-content",
                        verticalAlign: "top",
                      }}
                    >
                      Umur
                    </td>
                    <td style={{ fontSize: 14, width: "fit-content" }}>
                      {" "}
                      : {dataPenduduk.umur} Tahun
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        fontSize: 14,
                        width: "fit-content",
                        verticalAlign: "top",
                      }}
                    >
                      Alamat
                    </td>
                    <td
                      style={{
                        width: "fit-content",
                        fontSize: 14,
                      }}
                    >
                      {" "}
                      : {dataPenduduk.alamat_asal}
                    </td>
                  </tr>
                </tbody>
              </table>
              <Typography
                className={classes.fontCons}
                style={{ fontSize: 14, marginTop: "0.5rem" }}
              >
                Telah meninggal dunia pada :{" "}
              </Typography>
              <table>
                <tbody>
                  <tr>
                    <td style={{ fontSize: 14, width: "5%" }}>Hari</td>
                    <td style={{ fontSize: 14, width: "50%" }}>
                      {" "}
                      : {dataKematian.hari_meninggal}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: 14, width: "5%" }}>Tanggal</td>
                    <td style={{ fontSize: 14, width: "fit-content" }}>
                      {" "}
                      : {dataKematian.tanggal_meninggal}
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontSize: 14, width: "5%" }}>Di </td>
                    <td style={{ fontSize: 14, width: "fit-content" }}>
                      {" "}
                      : {dataKematian.tempat_meninggal}
                    </td>
                  </tr>
                </tbody>
              </table>
              <Box>
                <Typography
                  className={classes.fontCons}
                  style={{ fontSize: 14 }}
                >
                  Disebabkan karena : {dataKematian.penyebab_meninggal}
                </Typography>
              </Box>
              <Box marginTop={2}>
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
            width="fit-content"
            right="-60%"
            marginTop={4}
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
                {signature.nama_jabatan}
              </Typography>
            </Box>
            <Box marginTop={7}>
              <Typography
                className={classes.newFont}
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                {signature.nama_lengkap}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
