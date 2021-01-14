import {
  Box,
  Paper,
  Typography,
  TableContainer,
  Button,
  Table,
  TablePagination,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  CircularProgress,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchKartuKeluargaPendudukMasukByID } from "../../../reducers/penduduk_masuk/penduduk_masuk.actions";
import { useStyles } from "./details.style";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import { PendudukMasukDetailsTableHeadComponent } from "../../../components/penduduk-masuk-components/detail/table-head/table-head";
import PendudukMasukDetailsTableBodyComponent from "../../../components/penduduk-masuk-components/detail/table-body/table-body";
import DialogInsertComponent from "../../../components/penduduk-masuk-components/detail/dialog-insert/dialog-insert";
import DialogDetailsComponent from "../../../components/penduduk-masuk-components/detail/dialog-details/dialog-details";
import DialogUpdateComponent from "../../../components/penduduk-masuk-components/detail/dialog-update/dialog-update";
import DialogDeleteComponent from "../../../components/penduduk-masuk-components/detail/dialog-delete/dialog-delete";
import DialogDeleteAnggotaComponent from "../../../components/penduduk-masuk-components/detail/dialog-delete-anggota/dialog-delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import dataIsNull from "../../../assets/images/no-data-found.svg";
import { GreyText } from "../../../components/typography/typography";
import { DetailImagesDialog } from "../../../components/penduduk-masuk-components/detail/detail-images/detail-images";

const DetailPendudukMasukPage = ({ ...props }) => {
  const {
    fetchKartuKeluargaPendudukMasukByID,
    anggotaPendudukMasuk,
    match,
    isLoading,
    keteranganMasuk,
  } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const classes = useStyles();
  const [openInsertModal, setOpenInsertModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openDialogDeleteAnggota, setOpenDialogDeleteAnggota] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [openImageDetail, setOpenImageDetail] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [paramsIdKepala, setParamsIdKepala] = useState(null);

  const paramsIdKK = match.params.id_kk;

  useEffect(() => {
    fetchKartuKeluargaPendudukMasukByID(paramsIdKK);
  }, [fetchKartuKeluargaPendudukMasukByID, paramsIdKK]);

  const rows = anggotaPendudukMasuk;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <React.Fragment>
      {rows.length === 0 ? (
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
                DATA ANGGOTA PENDUDUK MASUK KOSONG
              </Typography>
            </Box>
            <Box display="flex" marginTop={2} justifyContent="center">
              <GreyText
                text="Silakan Tambah Kartu Keluarga Penduduk Masuk Terlebih Dahulu"
                className={classes.textCons}
              />
            </Box>
            <Box display="flex" marginTop={2} justifyContent="center">
              <Button
                color="primary"
                component={Link}
                to="/penduduk_masuk/insert/kk"
                className={classes.textButton}
                startIcon={<AddIcon />}
                variant="contained"
              >
                Tambahkan KK
              </Button>
            </Box>
          </Box>
        )
      ) : null}
      {isLoading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          margin="10rem auto 0px auto"
        >
          <CircularProgress color="primary" />
        </Box>
      ) : null}
      {rows.length !== 0 ? (
        isLoading ? null : (
          <Box marginTop={3}>
            <Paper className={classes.paper}>
              <Box p={3}>
                <Box
                  p={2}
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Box>
                    <Typography variant="h6">
                      Daftar Anggota Keluarga Penduduk Masuk
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Box>
                      <Button
                        color="primary"
                        size="small"
                        data={rows}
                        className={classes.controlButton}
                        disabled={rows.length === 0}
                        filename="penduduk.csv"
                      >
                        Unduh CSV
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        color="primary"
                        component={Link}
                        to={`/penduduk_masuk/${paramsIdKK}/i`}
                        className={classes.textButton}
                        startIcon={<AddIcon />}
                        variant="contained"
                      >
                        Tambah Data
                      </Button>
                    </Box>
                  </Box>
                </Box>
                <TableContainer>
                  <Divider />
                  <Table
                    className={classes.table}
                    aria-labelledby="tableTitle"
                    aria-label="enhanced table"
                  >
                    <PendudukMasukDetailsTableHeadComponent
                      classes={classes}
                      order={order}
                      orderBy={orderBy}
                      setOrder={setOrder}
                      setOrderBy={setOrderBy}
                      rowCount={rows.length}
                    />
                    <PendudukMasukDetailsTableBodyComponent
                      rows={rows}
                      order={order}
                      orderBy={orderBy}
                      page={page}
                      rowsPerPage={rowsPerPage}
                      emptyRows={emptyRows}
                      setOpenDialogDeleteAnggota={setOpenDialogDeleteAnggota}
                      setIdToDelete={setIdToDelete}
                      setParamsIdKepala={setParamsIdKepala}
                      paramsIdKK={paramsIdKK}
                    />
                  </Table>
                </TableContainer>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    {keteranganMasuk ? null : (
                      <Typography
                        component={Link}
                        to="#!"
                        variant="body2"
                        className={classes.linkModal}
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenInsertModal(true);
                        }}
                      >
                        Tambahkan Data Keterangan Masuk
                      </Typography>
                    )}
                    {keteranganMasuk ? (
                      <Box
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="flex-start"
                      >
                        <Box position="relative" left={-5}>
                          <IconButton
                            style={{
                              width: "30px",
                              height: "30px",
                              color: "#212121",
                            }}
                            aria-controls="simple-menu"
                            aria-haspopup="true"
                            onClick={(e) => {
                              e.preventDefault();
                              setAnchorEl(e.currentTarget);
                            }}
                          >
                            <MoreVertIcon fontSize="small" />
                          </IconButton>
                          <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={(e) => {
                              e.preventDefault();
                              setAnchorEl(null);
                            }}
                          >
                            <MenuItem
                              onClick={(e) => {
                                e.preventDefault();
                                setAnchorEl(null);
                                setOpenUpdateModal(true);
                              }}
                            >
                              Edit
                            </MenuItem>
                            <MenuItem
                              onClick={(e) => {
                                e.preventDefault();
                                setAnchorEl(null);
                                setOpenDeleteModal(true);
                              }}
                            >
                              Hapus
                            </MenuItem>
                          </Menu>
                        </Box>
                        <Box position="relative" bottom={-1}>
                          <Typography
                            component={Link}
                            to="#!"
                            variant="body2"
                            className={classes.linkModal}
                            onClick={(e) => {
                              e.preventDefault();
                              setOpenDetailsModal(true);
                            }}
                          >
                            Lihat Data Keterangan Masuk
                          </Typography>
                        </Box>
                      </Box>
                    ) : null}
                  </Box>
                  <Box>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 25]}
                      component="div"
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>
        )
      ) : null}
      {openImageDetail && (
        <DetailImagesDialog
          setOpenImageDetail={setOpenImageDetail}
          openImageDetail={openImageDetail}
        />
      )}
      <DialogInsertComponent
        open={openInsertModal}
        handleClose={setOpenInsertModal}
        paramsIdKepala={paramsIdKepala}
        paramsIdKK={paramsIdKK}
      />
      <DialogDetailsComponent
        open={openDetailsModal}
        handleClose={setOpenDetailsModal}
        data={keteranganMasuk}
        setOpenImageDetail={setOpenImageDetail}
      />
      <DialogUpdateComponent
        open={openUpdateModal}
        handleClose={setOpenUpdateModal}
        data={keteranganMasuk}
        idKK={paramsIdKK}
      />
      <DialogDeleteComponent
        open={openDeleteModal}
        handleClose={setOpenDeleteModal}
        paramsIdKK={paramsIdKK}
        paramsIdKepala={paramsIdKepala}
        idKeteranganMasuk={keteranganMasuk}
      />
      <DialogDeleteAnggotaComponent
        open={openDialogDeleteAnggota}
        handleClose={setOpenDialogDeleteAnggota}
        idToDelete={idToDelete}
        paramsIdKepala={paramsIdKepala}
        paramsIdKK={paramsIdKK}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    anggotaPendudukMasuk: state.penduduk_masuk.penduduk_masuk_details,
    keteranganMasuk: state.penduduk_masuk.keterangan_masuk_obj,
    isLoading: state.penduduk_masuk.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchKartuKeluargaPendudukMasukByID: (id) =>
      dispatch(fetchKartuKeluargaPendudukMasukByID(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailPendudukMasukPage);
