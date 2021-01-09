import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { PendudukMasukTableHeadComponent } from "../../components/penduduk-masuk-components/table-head/table-head";
import PendudukMasukTableBodyComponent from "../../components/penduduk-masuk-components/table-body/table-body";
import { fetchKartuKeluargaPendudukMasuk } from "../../reducers/penduduk_masuk/penduduk_masuk.actions";
import {
  Box,
  Paper,
  Typography,
  TableContainer,
  Button,
  Table,
  TablePagination,
  Divider,
  CircularProgress,
} from "@material-ui/core";
import { useStyles } from "./penduduk-masuk.style";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import dataIsNull from "../../assets/images/no-data-found.svg";
import { GreyText } from "../../components/typography/typography";

const PendudukMasukPage = ({ ...props }) => {
  const { fetchKartuKeluargaPendudukMasuk, pendudukMasuk, isLoading } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const classes = useStyles();

  useEffect(() => {
    fetchKartuKeluargaPendudukMasuk();
  }, [fetchKartuKeluargaPendudukMasuk]);

  const rows = pendudukMasuk;

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
                  DATA PENDUDUK MASUK KOSONG
                </Typography>
              </Box>
              <Box display="flex" marginTop={2} justifyContent="center">
                <GreyText
                  text="Silakan tambah data penduduk masuk terlebih dahulu"
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
                  Tambah Kartu Keluarga
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
                    <Typography variant="h6">Daftar Penduduk Masuk</Typography>
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
                        to="/penduduk_masuk/insert/kk"
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
                    <PendudukMasukTableHeadComponent
                      classes={classes}
                      order={order}
                      orderBy={orderBy}
                      setOrder={setOrder}
                      setOrderBy={setOrderBy}
                      rowCount={rows.length}
                    />
                    <PendudukMasukTableBodyComponent
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
              </Box>
            </Paper>
          </Box>
        ) : null}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    pendudukMasuk: state.penduduk_masuk.penduduk_masuk,
    isLoading: state.penduduk_masuk.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchKartuKeluargaPendudukMasuk: () =>
      dispatch(fetchKartuKeluargaPendudukMasuk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PendudukMasukPage);
