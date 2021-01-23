import {
  Paper,
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
  Menu,
  MenuItem,
  CircularProgress,
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
import { DialogDetailsComponent } from "../../../components/kematian-components/arsip/dialog-detail/dialog-details";
import { DetailImagesDialog } from "../../../components/kematian-components/arsip/detail-images/detail-images";
import DialogEditImageComponent from "../../../components/kematian-components/arsip/dialog-edit/dialog-edit";
import DialogDeleteImageComponent from "../../../components/kematian-components/arsip/dialog-delete/dialog-delete";
import DialogDetailSignatureComponent from "../../../components/kematian-components/signatures/dialog-details/dialog-signature";

export const KematianDetailsPage = ({ ...props }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElImage, setAnchorElImage] = useState(null);
  const [openDialogEdit, setOpenDialogEdit] = useState(false);
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [openDialogInsert, setOpenDialogInsert] = useState(false);
  const [dataToAct, setDataToAct] = useState([]);
  const [openDialogDetailArsip, setOpenDialogDetailArsip] = useState(false);
  const [openDialogSignature, setOpenDialogSignature] = useState(false);
  const [openImageDetail, setOpenImageDetail] = useState(false);
  const [openDialogEditArsip, setOpenDialogEditArsip] = useState(false);
  const [openDialogDeleteArsip, setOpenDialogDeleteArsip] = useState(false);

  const {
    getDataKematianById,
    match,
    dataKematian,
    isLoading,
    childDataKematian,
    arsipKematian,
    infosStatus,
    infosMessage,
    clearInfos,
    signature,
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

  const handleCloseImage = () => {
    setAnchorElImage(null);
  };

  return (
    <React.Fragment>
      {infosStatus === 200 || infosStatus === 201 ? (
        <Box width="72.5%" margin="0 auto 10px auto">
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
      {dataKematian.length === 0 ? (
        isLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            margin="0 auto"
            marginTop="8rem"
          >
            <CircularProgress color="primary" />
          </Box>
        ) : null
      ) : (
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
                  aria-controls="simple-menu"
                  aria-haspopup="true"
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
              setOpenDialogSignature={setOpenDialogSignature}
              isLoading={isLoading}
            />
            <Box marginTop={2} marginBottom={2}>
              <Divider />
            </Box>
            <Box
              display="flex"
              flexDirection="row"
              justifyContent={isLoading ? "flex-end" : "space-between"}
              alignItems="center"
            >
              {isLoading ? null : (
                <Box>
                  {dataKematian.arsip_kematian !== undefined ? (
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      justifyContent="flex-start"
                    >
                      <Box>
                        <IconButton
                          size="small"
                          color="primary"
                          aria-controls="simple-menu"
                          aria-haspopup="true"
                          onClick={(e) => setAnchorElImage(e.currentTarget)}
                        >
                          <MoreVertIcon />
                        </IconButton>
                        <Menu
                          id="simple-menu"
                          anchorEl={anchorElImage}
                          keepMounted
                          open={Boolean(anchorElImage)}
                          onClose={handleCloseImage}
                        >
                          <MenuItem
                            onClick={() => {
                              handleCloseImage();
                              setOpenDialogEditArsip(true);
                            }}
                          >
                            Edit
                          </MenuItem>
                          <MenuItem
                            onClick={() => {
                              handleCloseImage();
                              setOpenDialogDeleteArsip(true);
                            }}
                          >
                            Hapus
                          </MenuItem>
                        </Menu>
                      </Box>
                      <Box>
                        <Typography
                          component={Link}
                          className={classes.controlLink}
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenDialogDetailArsip(true);
                          }}
                          to="#!"
                        >
                          Lihat Arsip Kematian
                        </Typography>
                      </Box>
                    </Box>
                  ) : null}
                  {dataKematian.arsip_kematian !== undefined ? null : (
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
                  )}
                </Box>
              )}
              <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Box marginRight={2}>
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
                <Box>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      history.push(`/kematian/${paramsId}/d/preview`);
                    }}
                    className={classes.seeButton}
                  >
                    Lihat PDF
                  </Button>
                </Box>
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
        idData={paramsId}
      />
      <DialogDetailsComponent
        open={openDialogDetailArsip}
        handleClose={setOpenDialogDetailArsip}
        data={arsipKematian}
        setOpenImageDetail={setOpenImageDetail}
      />
      <DialogEditImageComponent
        open={openDialogEditArsip}
        handleClose={setOpenDialogEditArsip}
        data={arsipKematian ? arsipKematian._id : ""}
        idData={dataKematian._id}
      />
      <DialogDeleteImageComponent
        open={openDialogDeleteArsip}
        handleClose={setOpenDialogDeleteArsip}
        dataPenduduk={childDataKematian}
        dataArsip={arsipKematian ? arsipKematian._id : ""}
        dataKematian={dataKematian}
      />
      <DialogDetailSignatureComponent
        open={openDialogSignature}
        handleClose={setOpenDialogSignature}
        signature={signature}
      />
      {openImageDetail && (
        <DetailImagesDialog
          openImageDetail={openImageDetail}
          setOpenImageDetail={setOpenImageDetail}
        />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    dataKematian: state.kematian.kematian_details,
    childDataKematian: state.kematian.kematian_obj,
    arsipKematian: state.kematian.arsip_kematian,
    signature: state.kematian.signature,
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
