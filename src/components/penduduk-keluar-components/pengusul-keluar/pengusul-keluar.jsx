import { Box, Container, Typography } from "@material-ui/core";
import React from "react";

export const PengusulKeluarComponent = (props) => {
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
                Nama Pengusul : Rizqiyanto Imanullah
              </Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Nomor Kartu Keluarga : 3123213213213212
              </Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Nomor Induk Keluarga : 3123213213213212
              </Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>Umur : 20</Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Pendidikan Terakhir : S3
              </Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Kedudukan dalam Keluarga : Kepala Keluarga
              </Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Pekerjaan : Freelancer
              </Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>Agama : Islam</Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Status Perkawinan : Belum
              </Typography>
            </Box>
            <Box>
              <Typography style={{ lineHeight: 2 }}>
                Tempat Tanggal Lahir : Surabaya, 21 Maret 2000
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
};
