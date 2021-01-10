import {
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { DetailsDataComponent } from "../../../components/kelahiran-components/details-data/details-data";
import { useStyles } from "./details.style";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";
import { fetchKelahiranId } from "../../../reducers/kelahiran/kelahiran.actions";
import DialogDetailsComponent from "../../../components/kelahiran-components/dialog-details/dialog-details";

const KelahiranDetailsPage = ({ ...props }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialogDetails, setOpenDialogDetails] = useState(false);
  const [dataToDialog, setDataToDialog] = useState([]);
  const history = useHistory();
  const {
    isLoading,
    dataKelahiran,
    dataAyah,
    dataIbu,
    fetchKelahiranId,
    match,
  } = props;
  const paramsId = match.params.id;

  useEffect(() => {
    fetchKelahiranId(paramsId);
  }, [paramsId, fetchKelahiranId]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Paper style={{ width: 900 }}>
          <Box p={3}>
            <Box paddingBottom={1}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography>Details Data Kelahiran</Typography>
                </Box>
                <Box>
                  <IconButton onClick={handleClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Edit</MenuItem>
                    <MenuItem onClick={handleClose}>Hapus</MenuItem>
                  </Menu>
                </Box>
              </Box>
            </Box>
            <Box marginTop={1} marginBottom={1}>
              <Divider />
            </Box>
            <DetailsDataComponent
              isLoading={isLoading}
              dataKelahiran={dataKelahiran}
              dataAyah={dataAyah}
              dataIbu={dataIbu}
              setOpenDialogDetails={setOpenDialogDetails}
              setDataToDialog={setDataToDialog}
            />
            <Box marginTop={1} marginBottom={2}>
              <Divider />
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  history.push("/kelahiran");
                }}
                className={classes.backButton}
              >
                Kembali
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
      <DialogDetailsComponent
        open={openDialogDetails}
        handleClose={setOpenDialogDetails}
        data={dataToDialog}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.kelahiran.isLoading,
    dataKelahiran: state.kelahiran.kelahiran_obj,
    dataAyah: state.kelahiran.data_ayah,
    dataIbu: state.kelahiran.data_ibu,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchKelahiranId: (id) => dispatch(fetchKelahiranId(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KelahiranDetailsPage);
