import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
} from "@material-ui/core";
import React from "react";
import { photoPath } from "../../../../helpers/getAvatars";
import { useStyles } from "./dialog-details.style";

const DialogDetailsComponent = ({ ...props }) => {
  const { open, handleClose, data } = props;
  const classes = useStyles();
  const fotoKK = photoPath(data ? data.foto_kk : "//");
  const fotoSuratMasuk = photoPath(data ? data.foto_surat_masuk : "//");

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={(e) => {
          e.preventDefault();
          handleClose(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Detail Data Keterangan Masuk"}
        </DialogTitle>
        <DialogContent>
          <Box p={3}>
            <Box display="flex" flexDirection="column">
              <Box>
                <Box>
                  <Typography variant="body2">Foto Kartu Keluarga</Typography>
                </Box>
                <Box marginTop={1}>
                  <img
                    src={fotoKK}
                    alt="Foto KK"
                    className={classes.controlImage}
                  />
                </Box>
              </Box>
              <Box marginTop={1} marginBottom={1}>
                <Divider />
              </Box>
              <Box>
                <Box>
                  <Typography variant="body2">Foto Surat Masuk</Typography>
                </Box>
                <Box marginTop={1}>
                  <img
                    src={fotoSuratMasuk}
                    alt="Foto Surat Masuk"
                    className={classes.controlImage}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e) => {
              e.preventDefault();
              handleClose(false);
            }}
            color="primary"
          >
            Kembali
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogDetailsComponent;
