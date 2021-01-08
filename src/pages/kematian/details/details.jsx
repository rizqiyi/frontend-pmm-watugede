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
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./details.style";
import { DetailsDataComponent } from "../../../components/kematian-components/details-data/details-data";
import { Link, useHistory } from "react-router-dom";
import DialogEditComponent from "../../../components/kematian-components/dialog-edit/dialog-edit";
import DialogDeleteComponent from "../../../components/kematian-components/dialog-delete/dialog-delete";
import DialogInsertComponent from "../../../components/kematian-components/arsip/dialog-insert/dialog-insert";
import { getDataKematianById } from "../../../reducers/kematian/kematian.actions";

export const KematianDetailsPage = ({ ...props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [openDialogInsert, setOpenDialogInsert] = useState(false);
  //   const [openDialogEditArsip, setOpenDialogEditArsip] = useState(false);
  //   const [openDialogDeleteArsip, setOpenDialogDeleteArsip] = useState(false);
  const {
    getDataKematianById,
    match,
    dataKematian,
    isLoading,
    childDataKematian,
  } = props;
  const paramsId = match.params.id;
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    getDataKematianById(paramsId);
  }, [paramsId, getDataKematianById]);

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
                <MenuItem
                  onClick={() => {
                    handleClose();
                    setOpenDialogDelete(true);
                  }}
                >
                  Hapus
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box marginTop={1} marginBottom={1}>
            <Divider />
          </Box>
          <DetailsDataComponent
            data={dataKematian}
            childData={childDataKematian}
            isLoading={isLoading}
          />
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
                onClick={(e) => {
                  e.preventDefault();
                  setOpenDialogInsert(true);
                }}
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
      <DialogDeleteComponent
        open={openDialogDelete}
        handleClose={setOpenDialogDelete}
      />
      <DialogInsertComponent
        open={openDialogInsert}
        handleClose={setOpenDialogInsert}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    dataKematian: state.kematian.kematian_details,
    childDataKematian: state.kematian.kematian_obj,
    isLoading: state.kematian.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataKematianById: (id) => dispatch(getDataKematianById(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KematianDetailsPage);
