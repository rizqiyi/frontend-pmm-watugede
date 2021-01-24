import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@material-ui/core";
import React from "react";

const DialogDetailSignatureComponent = ({ ...props }) => {
  const { open, handleClose, signature } = props;

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
          {`Detail Tanda Tangan Dokumen`}
        </DialogTitle>
        <DialogContent>
          <Box marginLeft={1}>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Nama :{" "}
                <span style={{ marginLeft: 10 }}>{signature.nama_lengkap}</span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Jabatan :{" "}
                <span style={{ marginLeft: 10 }}>{signature.nama_jabatan}</span>
              </Typography>
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

export default DialogDetailSignatureComponent;
