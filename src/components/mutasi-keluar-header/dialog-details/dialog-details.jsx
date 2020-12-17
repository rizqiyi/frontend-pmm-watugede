import React from "react";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  useStyles,
} from "./dialog-details.style";
import Dialog from "@material-ui/core/Dialog";
import { Box, Typography } from "@material-ui/core";

export const DialogDetails = ({ handleClose, open, dataId, fixedData }) => {
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
                Pengikut Keluar : {dataId.nama_lengkap_keluarga}
              </Typography>
            </Box>
            <Box marginTop={1}>
              <Typography variant="subtitle2" className={classes.textPengusul}>
                NIK : {dataId.nik_keluarga}
              </Typography>
            </Box>
            <Box marginTop={1}>
              <Typography variant="subtitle2" className={classes.textPengusul}>
                Tempat Tgl. Lahir : {dataId.jenis_kelamin_keluarga}
              </Typography>
            </Box>
            <Box marginTop={1}>
              <Typography variant="subtitle2" className={classes.textPengusul}>
                Umur : {dataId.umur_keluarga}
              </Typography>
            </Box>
            <Box marginTop={1}>
              <Typography variant="subtitle2" className={classes.textPengusul}>
                Posisi Dalam Keluarga : {dataId.keterangan_dalam_keluarga}
              </Typography>
            </Box>
            <Box marginTop={1}>
              <Typography variant="subtitle2" className={classes.textPengusul}>
                Posisi Dalam Keluarga : {dataId.status_perkawinan_keluarga}
              </Typography>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
          >
            <Box marginTop={3}>
              <Typography variant="subtitle2" className={classes.textPengusul}>
                Nama Pengusul : {fixedData.nama_lengkap}
              </Typography>
            </Box>
            <Box>
              <Typography variant="subtitle2" className={classes.textPengusul}>
                Posisi Pengusul dalam Keluarga :{" "}
                {fixedData.posisi_dalam_keluarga}
              </Typography>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
