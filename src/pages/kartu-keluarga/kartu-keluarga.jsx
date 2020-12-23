import {
  Box,
  Button,
  Paper,
  Typography,
  useMediaQuery,
  Table,
  TablePagination,
  Divider,
  TableContainer,
  IconButton,
} from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { useStyles } from "./kartu-keluarga.style";
import dataIsNull from "../../assets/images/no-data-found.svg";
import { GreyText } from "../../components/typography/typography";
import AddIcon from "@material-ui/icons/Add";
import { Skeleton } from "@material-ui/lab";
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

const KartuKeluargaPage = ({ ...props }) => {
  const classes = useStyles();
  const {
    getAllKartuKeluarga,
    kartuKeluarga,
    isLoading,
    searchKKByName,
    searchKKbyNomorNIK,
    clearResultSearch,
  } = props;
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      clearResultSearch();
    }
    getAllKartuKeluarga();
    return () => clearResultSearch();
  }, [getAllKartuKeluarga, clearResultSearch]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const matches = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(false);
  const [openSelectMenu, setOpenSelectMenu] = useState(false);
  const [search, setSearch] = useState("nama_lengkap");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const rows = kartuKeluarga.map((d) => d);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const accessingParent = kartuKeluarga.map((d) => d.keluarga_dari);
  const touchChild = accessingParent.map((d) => d.anggota_keluarga);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <React.Fragment>
      <Paper>
        <Box p={3}>
          <Box>
            <Typography variant="h6">Daftar Kartu Keluarga</Typography>
          </Box>
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
                  text="Silakan tambah data kartu keluarga melalui button dibawah ini"
                  className={classes.textCons}
                />
              </Box>
              <Box display="flex" marginTop={2} justifyContent="center">
                <Button
                  color="primary"
                  // component={Link}
                  // to="/penduduk/insert"
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
              p={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Box className={classes.isLoading}>
                <Skeleton height={300} width={1000} />
              </Box>
            </Box>
          ) : rows.length !== 0 ? (
            <Box marginTop={1} marginBottom={matches ? 10 : 2}>
              <Box
                p={2}
                display="flex"
                flexDirection="row"
                justifyContent="flex-end"
                alignItems="center"
              >
                <Box>
                  <Button
                    color="primary"
                    size="small"
                    component={CSVLink}
                    data={rows}
                    className={classes.downloadButton}
                    disabled={rows.length === 0}
                    filename="penduduk_keluar.csv"
                  >
                    Unduh CSV
                  </Button>
                </Box>
                <Box>
                  <Button
                    color="primary"
                    // component={Link}
                    // to="/penduduk/insert"
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
                  onSubmit={(values, { resetForm }) => {
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
                        search={search}
                      />
                    </Form>
                  )}
                </Formik>
              </Box>
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
                    jumlahAnggotaKeluarga={touchChild.length}
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
            </Box>
          ) : null}
        </Box>
      </Paper>
    </React.Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    kartuKeluarga: state.kartu_keluarga.kartu_keluarga,
    kartuKeluargaWithChild: state.kartu_keluarga.anggota_keluarga,
    isLoading: state.kartu_keluarga.isLoading,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KartuKeluargaPage);
