import React from "react";
import {
  Box,
  Select,
  MenuItem,
  DialogTitle,
  Dialog,
  DialogContent,
  FormControl,
  InputLabel,
  DialogActions,
  Button,
} from "@material-ui/core";
import { useStyles } from "./dialog-search.style";

export const DialogSearchComponent = ({ ...props }) => {
  const classes = useStyles();
  const {
    handleChange,
    setOpenSelectMenu,
    openSelectMenu,
    open,
    setOpen,
    search,
  } = props;

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={(e) => {
          e.preventDefault();
          setOpen(false);
        }}
      >
        <Box p={3}>
          <DialogTitle>Search By</DialogTitle>
          <DialogContent>
            <Box className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">
                  Search By
                </InputLabel>
                <Select
                  labelId="demo-controlled-open-select-label"
                  id="demo-controlled-open-select"
                  open={openSelectMenu}
                  onClose={(e) => {
                    e.preventDefault();
                    setOpenSelectMenu(false);
                  }}
                  value={search}
                  onOpen={(e) => {
                    e.preventDefault();
                    setOpenSelectMenu(true);
                  }}
                  onChange={handleChange}
                >
                  <MenuItem value="nama_lengkap">Nama</MenuItem>
                  <MenuItem value="nik">NIK</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContent>
        </Box>
        <DialogActions>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
            }}
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={(e) => {
              e.preventDefault();
              setOpen(false);
            }}
            color="primary"
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};
