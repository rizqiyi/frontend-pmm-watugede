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
import { connect } from "react-redux";

const DialogDetailsComponent = ({ ...props }) => {
  const { open, handleClose } = props;

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
          {"Detail Pengikut Keluar Desa"}
        </DialogTitle>
        <DialogContent>
          <Box marginLeft={1}>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Nama Lengkap :{" "}
                <span style={{ marginLeft: 10 }}>Rizqiyanto Imanullah</span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Nomor Induk Keluarga :{" "}
                <span style={{ marginLeft: 10 }}>3213213213213213</span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Nomor Kartu Keluarga :{" "}
                <span style={{ marginLeft: 10 }}>3213213213213213</span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Umur : <span style={{ marginLeft: 10 }}>20</span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Pendidikan Terakhir : <span style={{ marginLeft: 10 }}>S3</span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Kedudukan : <span style={{ marginLeft: 10 }}>Anak</span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Pekerjaan : <span style={{ marginLeft: 10 }}>Freelancer</span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Agama : <span style={{ marginLeft: 10 }}>Islam</span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Status Perkawinan :{" "}
                <span style={{ marginLeft: 10 }}>Belum Kawin</span>
              </Typography>
            </Box>
            <Box marginBottom={1.2}>
              <Typography variant="body2">
                Tempat Tanggal Lahir :{" "}
                <span style={{ marginLeft: 10 }}>Surabaya, 21 Maret 2000</span>
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DialogDetailsComponent);
