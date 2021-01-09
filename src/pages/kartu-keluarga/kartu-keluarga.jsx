import {
  Box,
  Button,
  Paper,
  Typography,
  Table,
  TablePagination,
  Divider,
  TableContainer,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useStyles } from "./kartu-keluarga.style";
import dataIsNull from "../../assets/images/no-data-found.svg";
import { GreyText } from "../../components/typography/typography";
import AddIcon from "@material-ui/icons/Add";
import { CSVLink } from "react-csv";
import {
  clearResultSearch,
  getAllKartuKeluarga,
  searchKKbyName,
  searchKKbyNomorNIK,
} from "../../reducers/kartu_keluarga/kartu_keluarga.actions";
import KartuKeluargaTableBodyComponent from "../../components/kartu-keluarga-components/table-body/table-body";
import { KartuKeluargaTableHeadComponent } from "../../components/kartu-keluarga-components/table-head/table-head";
import { SearchFormField } from "../../components/styled-textfield/styled-textfield";
import { FastField, Form, Formik } from "formik";
import FilterListIcon from "@material-ui/icons/FilterList";
import { DialogSearchComponent } from "../../components/kartu-keluarga-components/dialog-search/dialog-search";
import { clearInfos } from "../../reducers/infos/info.actions";
import searchNotFoundImage from "../../assets/images/search-not-found.svg";
import { Link } from "react-router-dom";

const KartuKeluargaPage = ({ ...props }) => {
  const classes = useStyles();
  const {
    getAllKartuKeluarga,
    kartuKeluarga,
    isLoading,
    searchKKByName,
    searchKKbyNomorNIK,
    clearResultSearch,
    clearInfos,
    isNotFound,
  } = props;
  const isFirstRender = useRef(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [open, setOpen] = useState(false);
  const [openSelectMenu, setOpenSelectMenu] = useState(false);
  const [search, setSearch] = useState("nama_lengkap");

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      clearResultSearch();
      clearInfos();
    }
    getAllKartuKeluarga();
  }, [getAllKartuKeluarga, clearResultSearch, clearInfos]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const rows = kartuKeluarga;

  let dataToExcel = [];

  kartuKeluarga.map((a) => {
    let sendToOuter = {
      "Nomor Kartu Keluarga": `=""${a.no_kk}""`,
      "Nomor Induk Keluarga": `=""${a.anggota_keluarga[0].nik}""`,
      "Nama Lengkap": a.anggota_keluarga[0].nama_lengkap,
      "Tempat Tanggal Lahir": a.anggota_keluarga[0].tempat_tanggal_lahir,
      Umur: a.anggota_keluarga[0].umur,
      Alamat: a.anggota_keluarga[0].alamat_asal,
      Agama: a.anggota_keluarga[0].agama,
      "Posisi Dalam Keluarga": a.anggota_keluarga[0].posisi_dalam_keluarga,
      "Status Perkawinan": a.anggota_keluarga[0].status_perkawinan,
      "Jenis Kelamin": a.anggota_keluarga[0].jenis_kelamin,
      "Anggota Keluarga": a.anggota_keluarga.length,
    };

    return dataToExcel.push(sendToOuter);
  });

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
      {isLoading ? null : rows.length === 0 ? (
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
              DATA KARTU KELUARGA KOSONG
            </Typography>
          </Box>
          <Box display="flex" marginTop={2} justifyContent="center">
            <GreyText
              text="Silakan tambah data kartu keluarga melalui tombol dibawah ini"
              className={classes.textCons}
            />
          </Box>
          <Box display="flex" marginTop={2} justifyContent="center">
            <Button
              color="primary"
              component={Link}
              to="/kartu_keluarga/insert"
              className={classes.textButton}
              startIcon={<AddIcon />}
              variant="contained"
            >
              Tambah Kartu Keluarga
            </Button>
          </Box>
        </Box>
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
      ) : rows.length !== 0 ? (
        <Paper>
          <Box p={3}>
            <Box>
              <Typography variant="h6">Daftar Kartu Keluarga</Typography>
            </Box>
            <Box>
              <Box
                p={2}
                paddingTop={0}
                paddingBottom={0}
                display="flex"
                flexDirection="row"
                justifyContent="flex-end"
                alignItems="center"
                position="relative"
                bottom={-76}
              >
                <Box>
                  <Button
                    color="primary"
                    size="small"
                    component={CSVLink}
                    data={dataToExcel}
                    className={classes.downloadButton}
                    disabled={rows.length === 0}
                    filename="kepala_keluarga.csv"
                  >
                    Unduh CSV
                  </Button>
                </Box>
                <Box>
                  <Button
                    color="primary"
                    component={Link}
                    to="/kartu_keluarga/insert"
                    className={classes.textButton}
                    startIcon={<AddIcon />}
                    variant="contained"
                  >
                    Tambah Kartu Keluarga
                  </Button>
                </Box>
              </Box>
              <Box marginTop={0}>
                <Divider />
              </Box>
              <Box p={3}>
                <Formik
                  initialValues={{ search: "", params: search }}
                  enableReinitialize={true}
                  onSubmit={(values) => {
                    if (values.params === "nama_lengkap") {
                      searchKKByName(values.search, values.params);
                    } else {
                      searchKKbyNomorNIK(values.search, values.params);
                    }
                  }}
                >
                  {({ handleSubmit, resetForm, values }) => (
                    <Form
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleSubmit();
                        }
                      }}
                    >
                      <Box>
                        <Box display="flex">
                          <FastField
                            component={SearchFormField}
                            label="Search"
                            name="search"
                            resetform={resetForm}
                            innertext={values.search}
                            id="search"
                            variant="filled"
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
              </Box>
              {isNotFound !== null ? (
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
                        KARTU KELUARGA TIDAK DITEMUKAN
                      </Typography>
                    </Box>
                    <Box marginTop={1}>
                      <GreyText
                        className={classes.textLighten}
                        text="Silakan cari berdasarkan NIK atau Nama dengan benar"
                      />
                    </Box>
                  </Box>
                </React.Fragment>
              ) : null}
              {isNotFound === null ? (
                <React.Fragment>
                  <TableContainer>
                    <Divider />
                    <Table
                      className={classes.table}
                      aria-labelledby="tableTitle"
                      aria-label="enhanced table"
                    >
                      <KartuKeluargaTableHeadComponent
                        classes={classes}
                        order={order}
                        orderBy={orderBy}
                        setOrder={setOrder}
                        setOrderBy={setOrderBy}
                        rowCount={rows.length}
                      />
                      <KartuKeluargaTableBodyComponent
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
              ) : null}
            </Box>
          </Box>
        </Paper>
      ) : null}
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    kartuKeluarga: state.kartu_keluarga.kartu_keluarga,
    isLoading: state.kartu_keluarga.isLoading,
    isNotFound: state.infos.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllKartuKeluarga: () => dispatch(getAllKartuKeluarga()),
    searchKKByName: (params, condition) =>
      dispatch(searchKKbyName(params, condition)),
    searchKKbyNomorNIK: (params, condition) =>
      dispatch(searchKKbyNomorNIK(params, condition)),
    clearResultSearch: () => dispatch(clearResultSearch()),
    clearInfos: () => dispatch(clearInfos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KartuKeluargaPage);
