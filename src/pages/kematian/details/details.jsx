import {
  Paper,
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./details.style";
import { DetailsDataComponent } from "../../../components/kematian-components/details-data/details-data";
import { Link, useHistory } from "react-router-dom";
import DialogEditComponent from "../../../components/kematian-components/dialog-edit/dialog-edit";

export const KematianDetailsPage = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  //   const [openDialogDelete, setOpenDialogDelete] = useState(false);
  //   const [openDialogInsert, setOpenDialogInsert] = useState(false);
  //   const [openDialogEditArsip, setOpenDialogEditArsip] = useState(false);
  //   const [openDialogDeleteArsip, setOpenDialogDeleteArsip] = useState(false);
  const classes = useStyles();
  const history = useHistory();

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Paper
        style={{
          width: 900,
          margin: "0 auto",
        }}
      >
        <Box p={3} paddingTop={1}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography>Details Penduduk Meninggal</Typography>
            </Box>
            <Box>
              <IconButton
                onClick={(e) => {
                  setAnchorEl(e.currentTarget);
                }}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    setOpenDialogEdit(true);
                  }}
                >
                  Edit
                </MenuItem>
                <MenuItem onClick={handleClose}>Hapus</MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box marginTop={1} marginBottom={1}>
            <Divider />
          </Box>
          <DetailsDataComponent />
          <Box marginTop={2} marginBottom={2}>
            <Divider />
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                component={Link}
                className={classes.controlLink}
                to="#!"
              >
                Tambahkan Arsip Kematian
              </Typography>
            </Box>
            <Box>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/kematian");
                }}
                className={classes.backButton}
              >
                Kembali
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
      <DialogEditComponent
        open={openDialogEdit}
        handleClose={setOpenDialogEdit}
      />
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
)(KematianDetailsPage);
