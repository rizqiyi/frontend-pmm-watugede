import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./details-data.style";

export const DetailsDataComponent = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box
        p={2}
        paddingRight={0}
        paddingLeft={0}
        display="flex"
        justifyContent="space-around"
      >
        <Box>
          <Box>
            <Box>
              <Typography className={classes.header}>Nama Lengkap</Typography>
            </Box>
            <Box marginTop={1} marginBottom={3}>
              <Typography>John Doe</Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>Umur</Typography>
            </Box>
            <Box marginTop={1} marginBottom={3}>
              <Typography>100</Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>Alamat</Typography>
            </Box>
            <Box marginTop={1} maxWidth={230}>
              <Typography>Jalan Singosari No 148 RT 5 RW 6</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box>
            <Box>
              <Typography className={classes.header}>Pekerjaan</Typography>
            </Box>
            <Box marginTop={1} marginBottom={3}>
              <Typography>Wiraswasta</Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Tempat Tanggal Lahir
              </Typography>
            </Box>
            <Box marginTop={1} marginBottom={3}>
              <Typography>Malang, 19 Agustus 2000</Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Pendidikan Terakhir
              </Typography>
            </Box>
            <Box marginTop={1}>
              <Typography>S3</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Tanggal Meninggal
              </Typography>
            </Box>
            <Box marginTop={1} marginBottom={3}>
              <Typography>9 Desember 2020</Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Tempat Meninggal
              </Typography>
            </Box>
            <Box marginTop={1} marginBottom={3}>
              <Typography>Kalimantan</Typography>
            </Box>
          </Box>
          <Box>
            <Box>
              <Typography className={classes.header}>
                Penyebab Meninggal
              </Typography>
            </Box>
            <Box marginTop={1}>
              <Typography>Sakit</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
