import { Box, Container, IconButton, Typography } from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { useStyles } from "./keterangan-keluar.style";
import KeteranganKeluarInsert from "../dialog-insert/dialog-insert";
import { Skeleton } from "@material-ui/lab";
import { useSelector } from "react-redux";

export const KeteranganKeluarComponent = ({ data, dataPengikutKeluar }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const change = (name, e, handleChange, setFieldTouched) => {
    e.persist();
    handleChange(e);
    setFieldTouched(name, true, false);
  };

  const isLoading = useSelector((state) => state.pengikut_keluar.isLoading);

  return (
    <React.Fragment>
      <Container maxWidth="md">
        {dataPengikutKeluar.length === 0 ? (
          isLoading ? (
            <Skeleton animation="wave" width="100%" height={140} />
          ) : (
            <Box p={3} display="flex" justifyContent="center">
              <Typography style={{ fontWeight: 350 }}>
                Harap menambahkan Pengikut keluar terlebih dahulu
              </Typography>
            </Box>
          )
        ) : data.keterangan_keluar === undefined ? (
          isLoading ? (
            <Skeleton animation="wave" width="100%" height={140} />
          ) : (
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
                <IconButton
                  color="primary"
                  onClick={handleClickOpen}
                  className={classes.iconButton}
                >
                  <AddIcon color="primary" className={classes.addIcon} />
                </IconButton>
              </Box>
              <Box p={2}></Box>
            </React.Fragment>
          )
        ) : isLoading ? (
          <Skeleton animation="wave" width="100%" height={140} />
        ) : (
          <Box display="flex" flexDirection="column">
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
          </Box>
        )}
      </Container>
      <KeteranganKeluarInsert
        data={data}
        dataPengikutKeluar={dataPengikutKeluar}
        change={change}
        handleClose={handleClose}
        open={open}
      />
    </React.Fragment>
  );
};
