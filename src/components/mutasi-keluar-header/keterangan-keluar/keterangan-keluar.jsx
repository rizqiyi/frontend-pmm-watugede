import { Box, Container, IconButton, Typography } from "@material-ui/core";
import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { useStyles } from "./keterangan-keluar.style";
import KeteranganKeluarInsert from "../dialog-insert/dialog-insert";
import { Skeleton } from "@material-ui/lab";
import { connect, useSelector } from "react-redux";
import { getKeteranganKeluar } from "../../../reducers/pengikut_keluar/pengikut_keluar.actions";

const KeteranganKeluarComponent = ({
  data,
  dataPengikutKeluar,
  mappedDataPengusul,
}) => {
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
        {isLoading ? (
          <Box>
            <Skeleton animation="wave" width="100%" height={50} />
          </Box>
        ) : dataPengikutKeluar.length === 0 ? (
          <Box p={3} display="flex" justifyContent="center">
            <Typography style={{ fontWeight: 350 }}>
              Harap menambahkan Pengikut keluar terlebih dahulu
            </Typography>
          </Box>
        ) : null}
        {isLoading ? (
          <Skeleton animation="wave" width="100%" height={50} />
        ) : dataPengikutKeluar.length !== 0 && !data.keterangan_keluar ? (
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
        ) : null}
        {isLoading ? (
          <Skeleton animation="wave" width="100%" height={50} />
        ) : data.keterangan_keluar ? (
          <Box display="flex" flexDirection="column">
            <Box display="flex" p={3} flexDirection="row">
              <Box marginLeft={1} display="flex" flexDirection="column">
                <Box>
                  <Typography
                    variant="subtitle2"
                    className={classes.textPengusul}
                  >
                    Tanggal KTP : {mappedDataPengusul.tanggal_ktp}
                  </Typography>
                </Box>
                <Box marginTop={1}>
                  <Typography
                    variant="subtitle2"
                    className={classes.textPengusul}
                  >
                    Alamat Pindah : {mappedDataPengusul.alamat_pindah}
                  </Typography>
                </Box>
                <Box marginTop={1}>
                  <Typography
                    variant="subtitle2"
                    className={classes.textPengusul}
                  >
                    Pengikut : {mappedDataPengusul.pengikut}
                  </Typography>
                </Box>
                <Box marginTop={1}>
                  <Typography
                    variant="subtitle2"
                    className={classes.textPengusul}
                  >
                    Alasan Pindah : {mappedDataPengusul.alasan_pindah}
                  </Typography>
                </Box>
                <Box marginTop={1}>
                  <Typography
                    variant="subtitle2"
                    className={classes.textPengusul}
                  >
                    Catatan : {mappedDataPengusul.catatan}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ) : null}
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

const mapDispatchToProps = (dispatch) => {
  return {
    getKeteranganKeluar: (id) => dispatch(getKeteranganKeluar(id)),
  };
};

export default connect(null, mapDispatchToProps)(KeteranganKeluarComponent);
