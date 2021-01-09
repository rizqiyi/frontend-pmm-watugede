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
  const { open, handleClose, data, setOpenImageDetail } = props;
  const classes = useStyles();

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
          {"Detail Arsip Kematian"}
        </DialogTitle>
        <DialogContent>
          <Box p={3}>
            <Box display="flex" flexDirection="column">
              <Box>
                <Box>
                  <Typography variant="body2">Foto Arsip Kematian</Typography>
                </Box>
                <Box marginTop={1}>
                  <img
                    src={photoPath(
                      data === undefined ? "//" : data.arsip_kematian
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenImageDetail(
                        photoPath(
                          data === undefined ? "//" : data.arsip_kematian
                        )
                      );
                    }}
                    alt="Foto Arsip Kematian"
                    className={classes.controlImage}
                  />
                </Box>
              </Box>
              <Box marginTop={1} marginBottom={1}>
                <Divider />
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

export { DialogDetailsComponent };
