import { Box, Typography } from "@material-ui/core";
import React from "react";
import logo from "../../../../assets/images/logo-kabupaten-malang.svg";

export const BodyComponent = ({ ...props }) => {
  const {
    dataKelahiran,
    dataAyah,
    dataIbu,
    signature,
    classes,
    isLeft,
  } = props;

  const today = new Date();

  return (
    <React.Fragment>
      <Box
        padding={1}
        margin="0 auto"
        borderLeft={isLeft ? "1px solid black" : "none"}
        width="fit-content"
      >
        <Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box margin="10px auto 0px auto">
              <img src={logo} alt="Logo Kab. Malang" width={80} height="auto" />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            marginRight={15}
            marginTop={1}
          >
            <table>
              <tbody>
                <tr>
                  <td className={classes.fontCons}>Pemerintah Kabupaten</td>
                  <td className={classes.fontCons}> : MALANG</td>
                </tr>
                <tr>
                  <td className={classes.fontCons}>Kecamatan</td>
                  <td className={classes.fontCons}> : SINGOSARI</td>
                </tr>
                <tr>
                  <td className={classes.fontCons}>Desa</td>
                  <td className={classes.fontCons}> : WATUGEDE</td>
                </tr>
              </tbody>
            </table>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            marginTop={1.4}
          >
            <Box>
              <Typography
                className={classes.newFont}
                style={{ fontWeight: "bold", fontSize: 18 }}
              >
                KUTIPAN
              </Typography>
            </Box>
            <Box>
              <Typography
                className={classes.newFont}
                style={{ fontWeight: "bold", fontSize: 18 }}
              >
                SURAT KETERANGAN KELAHIRAN
              </Typography>
            </Box>
            <Box>
              <Typography className={classes.newFont}>
                Nomor : {dataKelahiran.nomor_surat_kelahiran}
              </Typography>
            </Box>
          </Box>
          <Box marginTop={2.5}>
            <Typography
              style={{ textIndent: "50px" }}
              className={classes.fontCons}
            >
              Yang bertanda tangan di bawah ini, menerangkan bahwa pada :
            </Typography>
          </Box>
          <Box marginTop={1.5}>
            <table>
              <tbody>
                <tr style={{ textIndent: "50px" }}>
                  <td className={classes.fontCons} style={{ fontSize: 15 }}>
                    Hari
                  </td>
                  <td className={classes.fontCons} style={{ fontSize: 15 }}>
                    {" "}
                    : {dataKelahiran.hari_kelahiran}
                  </td>
                </tr>
                <tr style={{ textIndent: "50px" }}>
                  <td className={classes.fontCons} style={{ fontSize: 15 }}>
                    Tanggal
                  </td>
                  <td className={classes.fontCons} style={{ fontSize: 15 }}>
                    {" "}
                    : {dataKelahiran.tanggal_lahir}
                  </td>
                </tr>
                <tr style={{ textIndent: "50px" }}>
                  <td className={classes.fontCons} style={{ fontSize: 15 }}>
                    Pukul
                  </td>
                  <td className={classes.fontCons} style={{ fontSize: 15 }}>
                    {" "}
                    : {dataKelahiran.jam_lahir}
                  </td>
                </tr>
                <tr style={{ textIndent: "50px" }}>
                  <td className={classes.fontCons} style={{ fontSize: 15 }}>
                    Tempat Kelahiran
                  </td>
                  <td className={classes.fontCons} style={{ fontSize: 15 }}>
                    {" "}
                    : {dataKelahiran.tempat_lahir}
                  </td>
                </tr>
              </tbody>
            </table>
          </Box>
          <Box marginTop={2} style={{ textIndent: "50px" }}>
            <Box>
              <Typography className={classes.fontCons} style={{ fontSize: 15 }}>
                Telah lahir seorang anak {dataKelahiran.jenis_kelamin} :
              </Typography>
            </Box>
            <Box>
              <Typography className={classes.fontCons} style={{ fontSize: 15 }}>
                Bernama :{" "}
                <span style={{ fontWeight: "bold", fontSize: 15 }}>
                  {`${dataKelahiran.nama}`.toUpperCase()}
                </span>
              </Typography>
            </Box>
            <Box marginTop={1.5}>
              <Typography className={classes.fontCons} style={{ fontSize: 15 }}>
                Dari seorang ibu :
              </Typography>
            </Box>
            <Box>
              <table>
                <tbody>
                  <tr>
                    <td
                      className={classes.fontCons}
                      style={{ textIndent: "50px", width: "10%" }}
                    >
                      Nama Lengkap
                    </td>
                    <td
                      className={classes.fontCons}
                      style={{ width: "fit-content" }}
                    >
                      {" "}
                      : {dataIbu.nama_lengkap}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={classes.fontCons}
                      style={{ textIndent: "50px", width: "10%" }}
                    >
                      NIK
                    </td>
                    <td
                      className={classes.fontCons}
                      style={{ width: "fit-content" }}
                    >
                      {" "}
                      : {dataIbu.nik}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={classes.fontCons}
                      style={{ textIndent: "50px", width: "10%" }}
                    >
                      Umur
                    </td>
                    <td
                      className={classes.fontCons}
                      style={{ width: "fit-content" }}
                    >
                      {" "}
                      : {dataIbu.umur} Tahun
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={classes.fontCons}
                      style={{ textIndent: "50px", width: "10%" }}
                    >
                      Pekerjaan
                    </td>
                    <td
                      className={classes.fontCons}
                      style={{ width: "fit-content" }}
                    >
                      {" "}
                      : {dataIbu.pekerjaan}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={classes.fontCons}
                      style={{
                        textIndent: "50px",
                        width: "10%",
                        verticalAlign: "top",
                      }}
                    >
                      Alamat
                    </td>
                    <td
                      className={classes.fontCons}
                      style={{
                        width: "28%",
                      }}
                    >
                      {" "}
                      : {dataIbu.alamat_asal}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Box>
            <Box marginTop={1}>
              <Typography className={classes.fontCons} style={{ fontSize: 15 }}>
                Istri dari :
              </Typography>
            </Box>
            <Box marginTop={1}>
              <table>
                <tbody>
                  <tr>
                    <td
                      className={classes.fontCons}
                      style={{ textIndent: "50px", width: "10%" }}
                    >
                      Nama Lengkap
                    </td>
                    <td
                      className={classes.fontCons}
                      style={{ width: "fit-content" }}
                    >
                      {" "}
                      : {dataAyah.nama_lengkap}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={classes.fontCons}
                      style={{ textIndent: "50px", width: "10%" }}
                    >
                      NIK
                    </td>
                    <td
                      className={classes.fontCons}
                      style={{ width: "fit-content" }}
                    >
                      {" "}
                      : {dataAyah.nik}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={classes.fontCons}
                      style={{ textIndent: "50px", width: "10%" }}
                    >
                      Umur
                    </td>
                    <td
                      className={classes.fontCons}
                      style={{ width: "fit-content" }}
                    >
                      {" "}
                      : {dataAyah.umur} Tahun
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={classes.fontCons}
                      style={{ textIndent: "50px", width: "10%" }}
                    >
                      Pekerjaan
                    </td>
                    <td className={classes.fontCons} style={{}}>
                      {" "}
                      : {dataAyah.pekerjaan}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={classes.fontCons}
                      style={{
                        textIndent: "50px",
                        width: "10%",
                        verticalAlign: "top",
                      }}
                    >
                      Alamat
                    </td>
                    <td className={classes.fontCons} style={{ width: "28%" }}>
                      {" "}
                      : {dataAyah.alamat_asal}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Box>
            <Box marginTop={2}>
              <Typography className={classes.fontCons} style={{ fontSize: 15 }}>
                Surat keterangan ini dibuat berdasarkan keterangan pelapor :
              </Typography>
            </Box>
            <Box marginTop={1}>
              <table>
                <tbody>
                  <tr>
                    <td
                      className={classes.fontCons}
                      style={{ textIndent: "50px", width: "10%" }}
                    >
                      Nama Lengkap
                    </td>
                    <td
                      className={classes.fontCons}
                      style={{ width: "fit-content" }}
                    >
                      {" "}
                      : {dataAyah.nama_lengkap}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={classes.fontCons}
                      style={{ textIndent: "50px", width: "10%" }}
                    >
                      NIK
                    </td>
                    <td
                      className={classes.fontCons}
                      style={{ width: "fit-content" }}
                    >
                      {" "}
                      : {dataAyah.nik}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={classes.fontCons}
                      style={{ textIndent: "50px", width: "10%" }}
                    >
                      Umur
                    </td>
                    <td
                      className={classes.fontCons}
                      style={{ width: "fit-content" }}
                    >
                      {" "}
                      : {dataAyah.umur} Tahun
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={classes.fontCons}
                      style={{ textIndent: "50px", width: "10%" }}
                    >
                      Pekerjaan
                    </td>
                    <td className={classes.fontCons} style={{}}>
                      {" "}
                      : {dataAyah.pekerjaan}
                    </td>
                  </tr>
                  <tr>
                    <td
                      className={classes.fontCons}
                      style={{
                        textIndent: "50px",
                        width: "10%",
                        verticalAlign: "top",
                      }}
                    >
                      Alamat
                    </td>
                    <td className={classes.fontCons} style={{ width: "28%" }}>
                      {" "}
                      : {dataAyah.alamat_asal}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Box>
            <Box marginTop={1.5} marginBottom={1}>
              <Typography
                className={classes.fontCons}
                style={{ textIndent: "50px" }}
              >
                Hubungan pelapor dengan bayi : {dataKelahiran.hubungan_pelapor}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-end"
            position="relative"
            right="-52%"
            width="fit-content"
          >
            <Box>
              <Typography className={classes.newFont}>
                Watugede,{" "}
                {today.toLocaleDateString("id-ID", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </Typography>
            </Box>
            <Box>
              <Typography className={classes.newFont}>
                {signature ? signature.nama_jabatan : "Tambahkan Nama Jabatan"}
              </Typography>
            </Box>
            <Box marginTop={7} marginBottom={2}>
              <Typography
                style={{
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
                className={classes.newFont}
              >
                {signature ? signature.nama_lengkap : "Tambahkan Nama Lengkap"}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
