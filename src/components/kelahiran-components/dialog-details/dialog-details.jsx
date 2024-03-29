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

const DialogDetailsComponent = ({ ...props }) => {
  const { open, handleClose, data } = props;

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
          {`Detail ${
            data.jenis_kelamin === "Perempuan" ? "Data Ibu" : "Data Ayah"
          }`}
        </DialogTitle>
        <DialogContent>
          <Box marginLeft={1}>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Nama Lengkap :{" "}
                <span style={{ marginLeft: 10 }}>{data.nama_lengkap}</span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Nomor Kartu Keluarga :{" "}
                <span style={{ marginLeft: 10 }}>
                  {open ? (data ? data.keluarga_dari.no_kk : null) : null}
                </span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Nomor Induk Keluarga :{" "}
                <span style={{ marginLeft: 10 }}>{data.nik}</span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Umur : <span style={{ marginLeft: 10 }}>{data.umur}</span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Pendidikan Terakhir :{" "}
                <span style={{ marginLeft: 10 }}>
                  {data.pendidikan_terakhir}
                </span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Kedudukan :{" "}
                <span style={{ marginLeft: 10 }}>
                  {data.posisi_dalam_keluarga}
                </span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Pekerjaan :{" "}
                <span style={{ marginLeft: 10 }}>{data.pekerjaan}</span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Agama : <span style={{ marginLeft: 10 }}>{data.agama}</span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Alamat :{" "}
                <span style={{ marginLeft: 10 }}>{data.alamat_asal}</span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Tempat Tanggal Lahir :{" "}
                <span style={{ marginLeft: 10 }}>
                  {data.tempat_tanggal_lahir}
                </span>
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

export default DialogDetailsComponent;
