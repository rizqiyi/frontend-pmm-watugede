import { Box, Typography } from "@material-ui/core";
import React from "react";
import logo from "../../../../assets/images/logo-kabupaten-malang.svg";

export const BodyComponent = ({ ...props }) => {
  const {
    path,
    numberToBahasa,
    checkValues,
    firstData,
    classes,
    dataPenduduk,
    dataKeterangan,
    signature,
  } = props;

  const today = new Date();
  return (
    <React.Fragment>
      <Box margin="0 auto" width="fit-content">
        <Box p={7}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            borderBottom="4px solid black"
          >
            <Box marginBottom={1} marginLeft={2}>
              <img src={logo} alt="Logo Kab. Malang" width={100} />
            </Box>
            <Box marginLeft={4} marginRight={14}>
              <Box margin="0 auto">
                <Typography
                  className={classes.newFont}
                  style={{
                    fontSize: 22,
                    fontWeight: "bold",
                    width: "max-content",
                  }}
                >
                  PEMERINTAH KABUPATEN MALANG
                </Typography>
              </Box>
              <Box margin="0 auto">
                <Typography
                  className={classes.newFont}
                  style={{ fontSize: 20, fontWeight: "bold" }}
                >
                  KECAMATAN SINGOSARI
                </Typography>
              </Box>
              <Box margin="0 auto">
                <Typography
                  className={classes.newFont}
                  style={{ fontSize: 28, fontWeight: "bold" }}
                >
                  DESA WATUGEDE
                </Typography>
              </Box>
              <Box margin="0 auto">
                <Typography
                  className={classes.newFont}
                  style={{
                    fontSize: 16,
                    fontWeight: "bold",
                    width: "max-content",
                  }}
                >
                  Jalan Watugede Nomor. 101 Singosari Telp. (0341) 453034
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center" flexDirection="column">
            <Box width="max-content" margin="0 auto">
              <Typography
                className={classes.newFont}
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textDecoration: "underline",
                  marginTop: 10,
                }}
              >
                SURAT KETERANGAN PINDAH
              </Typography>
            </Box>
            <Box
              className={dataKeterangan.nomor_surat ? null : classes.position}
            >
              <Typography
                className={classes.newFont}
                style={{
                  wordSpacing: 8,
                  letterSpacing: 0.9,
                }}
              >
                Nomor :{" "}
                {dataKeterangan.nomor_surat ? dataKeterangan.nomor_surat : null}
              </Typography>
            </Box>
            <Box paddingLeft={4} paddingRight={4}>
              <Box marginTop={4} className={classes.fontCons}>
                <table>
                  <tbody>
                    <tr>
                      <td style={{ width: "25%" }}>1. Nama Lengkap</td>
                      <td style={{ width: "fit-content" }}>
                        {" "}
                        : {checkValues(firstData[0].nama_lengkap)}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>2. Jenis Kelamin</td>
                      <td style={{ width: "fit-content" }}>
                        {" "}
                        : {checkValues(firstData[0].jenis_kelamin)}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>3. Dilahiran di</td>
                      <td style={{ width: "fit-content" }}>
                        {" "}
                        : {checkValues(firstData[0].tempat_tanggal_lahir)}.
                        (Umur: {checkValues(firstData[0].umur)} Tahun)
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>4. Kewarganegaraan</td>
                      <td style={{ width: "fit-content" }}> : Indonesia</td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>5. Agama</td>
                      <td style={{ width: "fit-content" }}>
                        {" "}
                        : {checkValues(firstData[0].agama)}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>6. Status Perkawinan</td>
                      <td style={{ width: "fit-content" }}>
                        {" "}
                        : {checkValues(firstData[0].status_perkawinan)}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>7. Pekerjaan</td>
                      <td style={{ width: "fit-content" }}>
                        {" "}
                        : {checkValues(firstData[0].pekerjaan)}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>8. Pendidikan Terakhir</td>
                      <td style={{ width: "fit-content" }}>
                        {" "}
                        : {checkValues(firstData[0].pendidikan_terakhir)}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%", verticalAlign: "top" }}>
                        9. Alamat Asal
                      </td>
                      <td style={{ width: "fit-content" }}>
                        : {checkValues(firstData[0].alamat_asal)}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>
                        10. Nomor dan Tanggal KTP
                      </td>
                      <td style={{ width: "fit-content" }}>
                        {" "}
                        : {checkValues(firstData[0].nik)} /{" "}
                        {dataKeterangan.tanggal_ktp}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>11. Pindah ke</td>
                      <td style={{ width: "fit-content" }}>
                        {" "}
                        : {dataKeterangan.alamat_pindah}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>12. Alasan Pindah</td>
                      <td style={{ width: "fit-content" }}>
                        {" "}
                        : {dataKeterangan.alasan_pindah}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ width: "25%" }}>13. Pengikut</td>
                      <td style={{ width: "fit-content" }}>
                        {" "}
                        : {dataKeterangan.pengikut} ({numberToBahasa}) Orang
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Box>
            </Box>
          </Box>
          <Box paddingLeft={4} paddingRight={4}>
            <Box marginTop={4}>
              <table style={{ borderCollapse: "collapse" }}>
                {dataPenduduk[1] !== undefined ? (
                  <thead>
                    <tr>
                      <th
                        style={{
                          border: "0.5px solid black",
                          padding: "10px",
                        }}
                        className={classes.fontCons}
                      >
                        No
                      </th>
                      <th
                        style={{
                          border: "0.5px solid black",
                          padding: "10px",
                        }}
                        className={classes.fontCons}
                      >
                        Nama Lengkap
                      </th>
                      <th
                        style={{
                          border: "0.5px solid black",
                          padding: "10px",
                        }}
                        className={classes.fontCons}
                      >
                        Jenis Kelamin
                      </th>
                      <th
                        style={{
                          border: "0.5px solid black",
                          padding: "10px",
                        }}
                        className={classes.fontCons}
                      >
                        Umur
                      </th>
                      <th
                        style={{
                          border: "0.5px solid black",
                          padding: "10px",
                        }}
                        className={classes.fontCons}
                      >
                        Status Perkawinan
                      </th>
                      <th
                        style={{
                          border: "0.5px solid black",
                          padding: "10px",
                        }}
                        className={classes.fontCons}
                      >
                        Pendidikan Terakhir
                      </th>
                      <th
                        style={{
                          border: "0.5px solid black",
                          padding: "10px",
                        }}
                        className={classes.fontCons}
                      >
                        Nomor KTP
                      </th>
                      <th
                        style={{
                          border: "0.5px solid black",
                          padding: "10px",
                        }}
                        className={classes.fontCons}
                      >
                        Ket.
                      </th>
                    </tr>
                  </thead>
                ) : null}
                {dataPenduduk.map((data, idx) => {
                  return idx > 0 ? (
                    <tbody key={idx}>
                      <tr>
                        <td
                          style={{
                            border: "0.5px solid black",
                            padding: "10px",
                          }}
                          className={classes.fontCons}
                        >
                          {idx}
                        </td>
                        <td
                          style={{
                            border: "0.5px solid black",
                            padding: "10px",
                          }}
                          className={classes.fontCons}
                        >
                          {data.nama_lengkap}
                        </td>
                        <td
                          style={{
                            border: "0.5px solid black",
                            padding: "10px",
                          }}
                          className={classes.fontCons}
                        >
                          {data.jenis_kelamin}
                        </td>
                        <td
                          style={{
                            border: "0.5px solid black",
                            padding: "10px",
                          }}
                          className={classes.fontCons}
                        >
                          {data.umur} Tahun
                        </td>
                        <td
                          style={{
                            border: "0.5px solid black",
                            padding: "10px",
                          }}
                          className={classes.fontCons}
                        >
                          {data.status_perkawinan}
                        </td>
                        <td
                          style={{
                            border: "0.5px solid black",
                            padding: "10px",
                          }}
                          className={classes.fontCons}
                        >
                          {data.pendidikan_terakhir}
                        </td>
                        <td
                          style={{
                            border: "0.5px solid black",
                            padding: "10px",
                          }}
                          className={classes.fontCons}
                        >
                          {data.nik}
                        </td>
                        <td
                          style={{
                            border: "0.5px solid black",
                            padding: "10px",
                          }}
                          className={classes.fontCons}
                        >
                          {data.posisi_dalam_keluarga}
                        </td>
                      </tr>
                    </tbody>
                  ) : null;
                })}
              </table>
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="flex-end"
              marginTop={8}
            >
              <Box marginRight={6}>
                <Box
                  width="113px"
                  height="151px"
                  border="1px solid black"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {dataKeterangan.foto_pengusul !== "//" &&
                  dataKeterangan.foto_pengusul ? (
                    <img
                      src={path}
                      width="113px"
                      height="151px"
                      alt="Foto Pengusul"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                  ) : (
                    <Typography className={classes.newFont}>
                      Foto 3x4
                    </Typography>
                  )}
                </Box>
              </Box>
              <Box>
                <Box textAlign="center" marginBottom={8}>
                  <Typography
                    style={{ textAlign: "center" }}
                    className={classes.newFont}
                  >
                    Watugede,{" "}
                    {today.toLocaleDateString("id-ID", {
                      day: "2-digit",
                      month: "long",
                      year: "numeric",
                    })}
                  </Typography>
                  <Typography className={classes.fontCons}>
                    {signature ? signature.nama_jabatan : "Tambahkan Jabatan"}
                  </Typography>
                </Box>
                <Box textAlign="center">
                  <Typography
                    className={classes.fontCons}
                    style={{
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    {signature
                      ? signature.nama_lengkap
                      : "Tambahkan Nama Lengkap"}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
