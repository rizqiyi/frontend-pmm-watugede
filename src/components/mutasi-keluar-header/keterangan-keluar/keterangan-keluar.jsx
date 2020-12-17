import { Box, Container, IconButton, Typography } from "@material-ui/core";
import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { useStyles } from "./keterangan-keluar.style";

export const KeteranganKeluarComponent = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <React.Fragment>
          <Box
            marginTop={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
            border="2px dotted #9e9e9e"
            borderRadius="20px"
            p={3}
          >
            <IconButton color="primary" className={classes.iconButton}>
              <AddIcon color="primary" className={classes.addIcon} />
            </IconButton>
          </Box>
          <Box p={2}></Box>
        </React.Fragment>
        {/* <Box display="flex" flexDirection="column">
              <Box display="flex" p={3} flexDirection="row">
                <Box marginLeft={1} display="flex" flexDirection="column">
                  <Box>
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      Tanggal KTP : 21 Maret 2020
                    </Typography>
                  </Box>
                  <Box marginTop={1}>
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      Alamat Pindah : Menteng, Jakarta
                    </Typography>
                  </Box>
                  <Box marginTop={1}>
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      Pengikut : 4 Orang
                    </Typography>
                  </Box>
                  <Box marginTop={1}>
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      Alasan Pindah : Dinas
                    </Typography>
                  </Box>
                  <Box marginTop={1}>
                    <Typography
                      variant="subtitle2"
                      className={classes.textPengusul}
                    >
                      Catatan : Tidak ada
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box> */}
      </Container>
    </React.Fragment>
  );
};
