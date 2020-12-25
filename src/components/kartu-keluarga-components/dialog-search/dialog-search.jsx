import React from "react";
import {
  Box,
  Select,
  MenuItem,
  Dialog,
  FormControl,
  InputLabel,
  Button,
  Typography,
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
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          p={3}
        >
          <Box>
            <Typography variant="subtitle1" className={classes.spacingText}>
              FILTER
            </Typography>
          </Box>
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
            <Box
              display="flex"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              marginTop={1}
            >
              <Box>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                  }}
                  className={classes.cancelButton}
                >
                  Batal
                </Button>
              </Box>
              <Box marginLeft={1.3} marginRight={1.3}></Box>
              <Box>
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                  }}
                  className={classes.filterButton}
                  color="primary"
                >
                  Filter
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </React.Fragment>
  );
};
