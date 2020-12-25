import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import mutasiDataImage from "../../../assets/images/delete-data.svg";
import { useStyles } from "./mutasi-dialogs-person.style";

const MutasiDialogPerson = ({ ...props }) => {
  const { handleClose, open, data } = props;

  const classes = useStyles();

  const fullName = data.nama_lengkap === undefined ? "" : data.nama_lengkap;
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
        <Box
          p={3}
          display="flex"
          paddingLeft={10}
          paddingRight={10}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Box display="flex" justifyContent="center">
            <img
              src={mutasiDataImage}
              style={{ height: "130px", width: "auto" }}
              alt="Delete Data"
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            maxWidth={400}
            marginTop={3}
            marginBottom={2}
          >
            <Typography className={classes.questionText}>
              APAKAH ANDA YAKIN INGIN MELAKUKAN PROSES MUTASI ATAS NAMA{" "}
              <span style={{ textDecoration: "underline" }}>
                {`${fullName.toUpperCase()}`}
              </span>{" "}
              ?
            </Typography>
          </Box>
          <DialogActions>
            <Button
              onClick={(e) => {
                e.preventDefault();
                handleClose(false);
              }}
              className={classes.backButton}
            >
              Batal
            </Button>
            <Box marginRight={1} marginLeft={1}></Box>
            <Button
              color="primary"
              type="submit"
              className={classes.deleteButton}
            >
              Mutasi
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, mapDispatchToProps)(MutasiDialogPerson);
