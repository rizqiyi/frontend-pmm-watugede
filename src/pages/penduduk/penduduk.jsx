import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Paper,
  Table,
  TableContainer,
  TablePagination,
  Typography,
  IconButton,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import PendudukTableBodyComponent from "../../components/penduduk-components/table-body/table-body";
import { PendudukEnhancedTableHead } from "../../components/penduduk-components/table-head/table-head";
import searchNotFoundImage from "../../assets/images/search-not-found.svg";
import { CSVLink } from "react-csv";
import {
  clearSearchResultPenduduk,
  fetchPenduduk,
  searchPendudukByName,
  searchPendudukByNIK,
  searchPendudukByNomorKK,
} from "../../reducers/penduduk/penduduk.actions";
import { useStyles } from "./penduduk.style";
import dataIsNull from "../../assets/images/no-data-found.svg";
import { GreyText } from "../../components/typography/typography";
import { connect } from "react-redux";
import { DialogSearchComponent } from "../../components/penduduk-components/dialog-search/dialog-search";
import { SearchFormField } from "../../components/styled-textfield/styled-textfield";
import FilterListIcon from "@material-ui/icons/FilterList";
import { FastField, Form, Formik } from "formik";
import { clearInfos } from "../../reducers/infos/info.actions";
import { textStatus } from "../../helpers/status-text";
import moment from "moment";

const PendudukPage = ({ ...props }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [openSelectMenu, setOpenSelectMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("nama_lengkap");
  const isFirstRender = useRef(true);
  const classes = useStyles();

  const {
    searchPendudukByName,
    fetchPenduduk,
    dataPenduduk,
    isLoading,
    clearSearchResultPenduduk,
    searchPendudukByNomorKK,
    searchPendudukByNIK,
    searchFailure,
    idSearchFailure,
    clearInfos,
  } = props;

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      clearSearchResultPenduduk();
      clearInfos();
    }
    fetchPenduduk();
  }, [fetchPenduduk, clearSearchResultPenduduk, clearInfos]);

  const rows = dataPenduduk;

  let dataToExcel = [];

  rows.map((a) => {
    let sendToOuter = {
      "Nomor Kartu Keluarga": `=""${a.keluarga_dari.no_kk}""`,
      "Nomor Induk Keluarga": `=""${a.nik}""`,
      "Nama Lengkap": a.nama_lengkap,
      "Tempat Tanggal Lahir": a.tempat_tanggal_lahir,
      Pekerjaan: a.pekerjaan,
      "Pendidikan Terakhir": a.pendidikan_terakhir,
      Umur: a.umur,
      Alamat: a.alamat_asal,
      Agama: a.agama,
      "Posisi Dalam Keluarga": a.posisi_dalam_keluarga,
      "Status Perkawinan": a.status_perkawinan,
      "Jenis Kelamin": a.jenis_kelamin,
      Status_Penduduk: textStatus(a.status_penduduk),
      "Data dibuat": moment(a.createdAt).format("LL"),
      "Data diubah": moment(a.updatedAt).format("LL"),
    };

    return dataToExcel.push(sendToOuter);
  });

  const today = new Date();

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
      <div className={classes.root}>
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
                  DATA PENDUDUK KOSONG
                </Typography>
              </Box>
              <Box display="flex" marginTop={2} justifyContent="center">
                <GreyText
                  text="Silakan tambah data penduduk terlebih dahulu"
                  className={classes.textCons}
                />
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
                  <Box p={2}>
                    <Box>
                      <Typography variant="h6">Daftar Penduduk</Typography>
                    </Box>
                  </Box>
                  <Box marginBottom={3}>
                    <Divider />
                  </Box>
                  <Formik
                    initialValues={{ search: "", params: search }}
                    enableReinitialize={true}
                    onSubmit={(values) => {
                      if (values.params === "nama_lengkap") {
                        searchPendudukByName(values.search, values.params);
                      } else if (values.params === "no_kk") {
                        searchPendudukByNomorKK(values.search, values.params);
                      } else {
                        searchPendudukByNIK(values.search, values.params);
                      }
                    }}
                  >
                    {({ values, handleSubmit, resetForm }) => (
                      <Form
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleSubmit();
                          }
                        }}
                      >
                        <Box>
                          <Box display="flex" marginBottom={3}>
                            <FastField
                              id="search"
                              name="search"
                              resetform={resetForm}
                              component={SearchFormField}
                              innertext={values.search}
                            />
                            <IconButton
                              onClick={(e) => {
                                e.preventDefault();
                                setOpen(true);
                              }}
                              className={classes.filterButton}
                            >
                              <FilterListIcon />
                            </IconButton>
                            <Box position="relative" right="-50%">
                              <Button
                                color="primary"
                                className={classes.downloadButton}
                                component={CSVLink}
                                data={dataToExcel}
                                filename={`data_penduduk_desa_watugede_${today.toLocaleDateString(
                                  "id-ID",
                                  {
                                    day: "numeric",
                                    month: "numeric",
                                    year: "numeric",
                                  }
                                )}.csv`}
                              >
                                Unduh CSV
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                        <DialogSearchComponent
                          handleChange={handleChange}
                          setOpenSelectMenu={setOpenSelectMenu}
                          openSelectMenu={openSelectMenu}
                          open={open}
                          setOpen={setOpen}
                          setSearch={setSearch}
                          search={search}
                        />
                      </Form>
                    )}
                  </Formik>
                  {searchFailure === 404 &&
                  idSearchFailure === "SEARCH_FAILURE" ? (
                    <React.Fragment>
                      <Box p={1} paddingTop={0}>
                        <Divider />
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        margin="0 auto"
                      >
                        <Box marginTop={5}>
                          <img
                            src={searchNotFoundImage}
                            alt="Search Result Not Found"
                          />
                        </Box>
                        <Box marginTop={2}>
                          <Typography variant="h6">
                            HASIL TIDAK DITEMUKAN
                          </Typography>
                        </Box>
                        <Box marginTop={1}>
                          <GreyText
                            className={classes.textLighten}
                            text="Silakan cari berdasarkan NIK, Nomor KK, atau Nama dengan benar"
                          />
                        </Box>
                      </Box>
                    </React.Fragment>
                  ) : null}
                  {searchFailure === 404 &&
                  idSearchFailure === "SEARCH_FAILURE" ? null : (
                    <React.Fragment>
                      <TableContainer>
                        <Divider />
                        <Table
                          className={classes.table}
                          aria-labelledby="tableTitle"
                          aria-label="enhanced table"
                        >
                          <PendudukEnhancedTableHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            setOrder={setOrder}
                            setOrderBy={setOrderBy}
                            rowCount={rows.length}
                          />
                          <PendudukTableBodyComponent
                            rows={rows}
                            order={order}
                            orderBy={orderBy}
                            page={page}
                            rowsPerPage={rowsPerPage}
                            emptyRows={emptyRows}
                          />
                        </Table>
                      </TableContainer>
                      <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={rows.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                      />
                    </React.Fragment>
                  )}
                </Box>
              </Paper>
            </Box>
          )
        ) : null}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    dataPenduduk: state.penduduk.penduduk,
    searchFailure: state.infos.status,
    idSearchFailure: state.infos.id,
    isLoading: state.penduduk.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPenduduk: () => dispatch(fetchPenduduk()),
    searchPendudukByName: (params, condition) =>
      dispatch(searchPendudukByName(params, condition)),
    searchPendudukByNomorKK: (params, condition) =>
      dispatch(searchPendudukByNomorKK(params, condition)),
    searchPendudukByNIK: (params, condition) =>
      dispatch(searchPendudukByNIK(params, condition)),
    clearSearchResultPenduduk: () => dispatch(clearSearchResultPenduduk()),
    clearInfos: () => dispatch(clearInfos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PendudukPage);
