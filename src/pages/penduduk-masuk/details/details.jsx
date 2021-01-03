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
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
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
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [openDetailsModal, setOpenDetailsModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const paramsIdKepala = match.params.id_kepala;
  const paramsIdKK = match.params.id_kk;

  useEffect(() => {
    fetchKartuKeluargaPendudukMasukByID(paramsIdKepala);
  }, [fetchKartuKeluargaPendudukMasukByID, paramsIdKepala]);

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
      {isLoading ? (
        <Box marginTop={15}>
          <Box className={classes.isLoading}>
            <Skeleton height={50} width={1000} />
          </Box>
          <Box className={classes.isLoading}>
            <Skeleton height={50} width={1000} />
          </Box>
          <Box className={classes.isLoading}>
            <Skeleton height={50} width={1000} />
          </Box>
        </Box>
      ) : rows.length !== 0 ? (
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
                <Box display="flex" justifyContent="center" alignItems="center">
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
                      to={`/penduduk_masuk/${paramsIdKK}/d/${paramsIdKepala}/insert`}
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
      ) : null}
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
      />
      <DialogUpdateComponent
        open={openUpdateModal}
        handleClose={setOpenUpdateModal}
        data={keteranganMasuk}
        idKepala={paramsIdKepala}
      />
      <DialogDeleteComponent
        open={openDeleteModal}
        handleClose={setOpenDeleteModal}
        paramsIdKK={paramsIdKK}
        paramsIdKepala={paramsIdKepala}
        idKeteranganMasuk={keteranganMasuk}
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
