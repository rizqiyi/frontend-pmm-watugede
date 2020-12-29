import { Box, Container, Typography } from "@material-ui/core";
import React from "react";

export const PengusulKeluarComponent = ({ ...props }) => {
  const { data } = props;
  const checkValues = (val) => {
    return val ? val : "";
  };
  return (
    <React.Fragment>
      <Container>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-evenly"
          alignItems="baseline"
        >
          <Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Nama Pengusul : {checkValues(data[0].nama_lengkap)}
              </Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Nomor Induk Keluarga : {checkValues(data[0].nik)}
              </Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Umur : {checkValues(data[0].umur)}
              </Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Pendidikan Terakhir : {checkValues(data[0].pendidikan_terakhir)}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Kedudukan dalam Keluarga :{" "}
                {checkValues(data[0].posisi_dalam_keluarga)}
              </Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Pekerjaan : {checkValues(data[0].pekerjaan)}
              </Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Agama : {checkValues(data[0].agama)}
              </Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Status Perkawinan : {checkValues(data[0].status_perkawinan)}
              </Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Tempat Tanggal Lahir :{" "}
                {checkValues(data[0].tempat_tanggal_lahir)}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};
