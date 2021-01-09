import { Box, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./details-data.style";

export const DetailsDataComponent = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-around"
        alignItems="center"
        p={2}
        paddingLeft={1}
        paddingRight={1}
      >
        <Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>NIK</Typography>
            </Box>
            <Box>
              <Typography>32112312312312323</Typography>
            </Box>
          </Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Nama Lengkap</Typography>
            </Box>
            <Box>
              <Typography>Ferro Febrianto</Typography>
            </Box>
          </Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Jenis Kelamin</Typography>
            </Box>
            <Box>
              <Typography>Laki laki</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Tempat Lahir</Typography>
            </Box>
            <Box>
              <Typography>Gondanglegi</Typography>
            </Box>
          </Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Tanggal Lahir</Typography>
            </Box>
            <Box>
              <Typography>2 Februari 1945</Typography>
            </Box>
          </Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Agama</Typography>
            </Box>
            <Box>
              <Typography>Islam</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Data dibuat</Typography>
            </Box>
            <Box>
              <Typography>12 Desember 2020</Typography>
            </Box>
          </Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Data Ayah</Typography>
            </Box>
            <Box>
              <Typography>Lihat Detail</Typography>
            </Box>
          </Box>
          <Box marginBottom={4}>
            <Box>
              <Typography className={classes.header}>Data Ibu</Typography>
            </Box>
            <Box>
              <Typography>Lihat Detail</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};
