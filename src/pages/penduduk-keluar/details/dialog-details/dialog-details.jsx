import React from "react";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  useStyles,
} from "./dialog-details.style";
import Dialog from "@material-ui/core/Dialog";
import { Box, Typography } from "@material-ui/core";

export const DialogDetails = ({ handleClose, open, dataPengusul, data }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Detail Pengikut Keluar
        </DialogTitle>
        <DialogContent dividers>
          <Box p={3} display="flex" flexDirection="column">
            <Box>
              <Typography variant="subtitle2" className={classes.textPengusul}>
                Pengikut Keluar : {data.nama_lengkap_keluarga}
              </Typography>
            </Box>
            <Box marginTop={1}>
              <Typography variant="subtitle2" className={classes.textPengusul}>
                NIK : {data.nik_keluarga}
              </Typography>
            </Box>
            <Box marginTop={1}>
              <Typography variant="subtitle2" className={classes.textPengusul}>
                Tempat Tgl. Lahir : {data.jenis_kelamin_keluarga}
              </Typography>
            </Box>
            <Box marginTop={1}>
              <Typography variant="subtitle2" className={classes.textPengusul}>
                Umur : {data.umur_keluarga}
              </Typography>
            </Box>
            <Box marginTop={1}>
              <Typography variant="subtitle2" className={classes.textPengusul}>
                Posisi Dalam Keluarga : {data.keterangan_dalam_keluarga}
              </Typography>
            </Box>
            <Box marginTop={1}>
              <Typography variant="subtitle2" className={classes.textPengusul}>
                Status Perkawinan : {data.status_perkawinan_keluarga}
              </Typography>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Box marginTop={3}>
              <Typography variant="subtitle2" className={classes.textPengusul}>
                Nama Pengusul : {dataPengusul.nama_lengkap}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" className={classes.textPengusul}>
                Posisi Pengusul dalam Keluarga :{" "}
                {dataPengusul.posisi_dalam_keluarga}
              </Typography>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
