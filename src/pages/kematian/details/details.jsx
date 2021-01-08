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
import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "./details.style";
import { DetailsDataComponent } from "../../../components/kematian-components/details-data/details-data";
import { Link, useHistory } from "react-router-dom";
import DialogEditComponent from "../../../components/kematian-components/dialog-edit/dialog-edit";
import DialogDeleteComponent from "../../../components/kematian-components/dialog-delete/dialog-delete";
import DialogInsertComponent from "../../../components/kematian-components/arsip/dialog-insert/dialog-insert";
import { getDataKematianById } from "../../../reducers/kematian/kematian.actions";
import { Alert } from "@material-ui/lab";
import { clearInfos } from "../../../reducers/infos/info.actions";
import { GreyText } from "../../../components/typography/typography";
import dataIsNull from "../../../assets/images/no-data-found.svg";

export const KematianDetailsPage = ({ ...props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [openDialogInsert, setOpenDialogInsert] = useState(false);
  const [dataToAct, setDataToAct] = useState([]);
  //   const [openDialogEditArsip, setOpenDialogEditArsip] = useState(false);
  //   const [openDialogDeleteArsip, setOpenDialogDeleteArsip] = useState(false);
  const {
    getDataKematianById,
    match,
    dataKematian,
    isLoading,
    childDataKematian,
    infosStatus,
    infosMessage,
    clearInfos,
  } = props;
  const paramsId = match.params.id;
  const classes = useStyles();
  const history = useHistory();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      clearInfos();
    }
    getDataKematianById(paramsId);
  }, [paramsId, getDataKematianById, clearInfos]);

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      {infosStatus === 200 ? (
        <Box marginBottom={2}>
          <Alert severity="success" icon={false}>
            {infosMessage}
          </Alert>
        </Box>
      ) : null}
      {isLoading ? null : dataKematian.length === 0 ? (
        <Box display="flex" flexDirection="column" paddingBottom={5}>
          <Box>
            <img
              src={dataIsNull}
              className={classes.dataIsNull}
              alt="Data Not Found"
            />
          </Box>
          <Box display="flex" marginTop={4} justifyContent="center">
            <Typography className={classes.textIsNull}>
              DATA KEMATIAN PENDUDUK INI KOSONG
            </Typography>
          </Box>
          <Box display="flex" marginTop={2} justifyContent="center">
            <GreyText
              text="Silakan tambah data kematian pada halaman edit penduduk."
              className={classes.textCons}
            />
          </Box>
        </Box>
      ) : null}
      {dataKematian.length === 0 ? null : (
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
                      setDataToAct(dataKematian);
                    }}
                  >
                    Edit
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      setOpenDialogDelete(true);
                      setDataToAct(dataKematian);
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
      )}
      <DialogEditComponent
        open={openDialogEdit}
        handleClose={setOpenDialogEdit}
        data={dataToAct}
      />
      <DialogDeleteComponent
        open={openDialogDelete}
        handleClose={setOpenDialogDelete}
        data={dataToAct}
        childData={childDataKematian}
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
    infosStatus: state.infos.status,
    infosMessage: state.infos.message,
    infosId: state.infos.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataKematianById: (id) => dispatch(getDataKematianById(id)),
    clearInfos: () => dispatch(clearInfos()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KematianDetailsPage);
