import {
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { DetailsDataComponent } from "../../../components/kelahiran-components/details-data/details-data";
import { useStyles } from "./details.style";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router-dom";
import { fetchKelahiranId } from "../../../reducers/kelahiran/kelahiran.actions";
import DialogDetailsComponent from "../../../components/kelahiran-components/dialog-details/dialog-details";
import DialogEditKelahiranComponent from "../../../components/kelahiran-components/dialog-edit/dialog-edit";
import DialogDeleteKelahiranComponent from "../../../components/kelahiran-components/dialog-delete/dialog-delete";
import { Alert } from "@material-ui/lab";
import { clearInfos } from "../../../reducers/infos/info.actions";
import dataIsNull from "../../../assets/images/no-data-found.svg";
import { GreyText } from "../../../components/typography/typography";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

const KelahiranDetailsPage = ({ ...props }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialogDetails, setOpenDialogDetails] = useState(false);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [dataToDialog, setDataToDialog] = useState([]);
  const history = useHistory();
  const isFirstRender = useRef(true);
  const {
    isLoading,
    dataKelahiran,
    dataAyah,
    dataIbu,
    fetchKelahiranId,
    match,
    infosID,
    infosMessage,
    clearInfos,
  } = props;
  const paramsId = match.params.id;

  useEffect(() => {
    if (isFirstRender.current) {
      clearInfos();
    }
    fetchKelahiranId(paramsId);
  }, [paramsId, fetchKelahiranId, clearInfos]);

  console.log(dataKelahiran);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      {infosID === "UPDATE" ? (
        <Box width="72.5%" margin="0 auto 10px auto">
          <Alert severity="success" icon={false}>
            {infosMessage}
          </Alert>
        </Box>
      ) : null}
      {dataKelahiran.length === 0 ? (
        isLoading ? null : (
          <Box display="flex" flexDirection="column">
            <Box>
              <img
                src={dataIsNull}
                className={classes.dataIsNull}
                alt="Data Not Found"
              />
            </Box>
            <Box display="flex" marginTop={4} justifyContent="center">
              <Typography className={classes.textIsNull}>
                DATA KELAHIRAN KOSONG
              </Typography>
            </Box>
            <Box display="flex" marginTop={2} justifyContent="center">
              <GreyText
                text="Silakan tambah data kelahiran terlebih dahulu"
                className={classes.textCons}
              />
            </Box>
            <Box display="flex" marginTop={2} justifyContent="center">
              <Button
                color="primary"
                component={Link}
                to="/kelahiran/insert"
                className={classes.textButton}
                startIcon={<AddIcon />}
                variant="contained"
              >
                Tambah Data Kelahiran
              </Button>
            </Box>
          </Box>
        )
      ) : null}
      {dataKelahiran.length === 0 ? (
        isLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            margin="10rem auto 0px auto"
          >
            <CircularProgress color="primary" />
          </Box>
        ) : null
      ) : (
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
                      <MenuItem
                        onClick={() => {
                          handleClose();
                          setOpenDialogEdit(true);
                          setDataToDialog(dataKelahiran);
                        }}
                      >
                        Edit
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          handleClose();
                          setDataToDialog(dataKelahiran);
                          setOpenDialogDelete(true);
                        }}
                      >
                        Hapus
                      </MenuItem>
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
      )}
      {dataKelahiran.length !== 0 ? (
        isLoading ? null : (
          <React.Fragment>
            <DialogDetailsComponent
              open={openDialogDetails}
              handleClose={setOpenDialogDetails}
              data={dataToDialog}
            />
            <DialogEditKelahiranComponent
              open={openDialogEdit}
              handleClose={setOpenDialogEdit}
              data={dataToDialog}
            />
            <DialogDeleteKelahiranComponent
              open={openDialogDelete}
              handleClose={setOpenDialogDelete}
              data={dataToDialog}
            />
          </React.Fragment>
        )
      ) : null}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.kelahiran.isLoading,
    dataKelahiran: state.kelahiran.kelahiran_obj,
    dataAyah: state.kelahiran.data_ayah,
    dataIbu: state.kelahiran.data_ibu,
    infosID: state.infos.id,
    infosMessage: state.infos.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchKelahiranId: (id) => dispatch(fetchKelahiranId(id)),
    clearInfos: () => dispatch(clearInfos()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KelahiranDetailsPage);
