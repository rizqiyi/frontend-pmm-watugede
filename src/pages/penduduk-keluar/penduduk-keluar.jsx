import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPendudukKeluar } from "../../reducers/penduduk_keluar/penduduk_keluar.actions";
import {
  Box,
  Button,
  Divider,
  Paper,
  Table,
  TableContainer,
  TablePagination,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { PendudukTableBodyComponent } from "../../components/penduduk-keluar-components/table-body/table-body";
import { PendudukEnhancedTableHead } from "../../components/penduduk-keluar-components/table-head/table-head";
import { CSVLink } from "react-csv";
import dataIsNull from "../../assets/images/no-data-found.svg";
import { Skeleton } from "@material-ui/lab";
import { useStyles } from "./penduduk-keluar.style";
import { GreyText } from "../../components/typography/typography";

const PendudukKeluarPage = ({ ...props }) => {
  const { pendudukKeluar, isLoading, fetchPendudukKeluar } = props;
  const classes = useStyles();

  useEffect(() => {
    fetchPendudukKeluar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const matches = useMediaQuery("(max-width:600px)");

  const rows = pendudukKeluar.map((d) => d);

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
                  DATA PENDUDUK KELUAR KOSONG
                </Typography>
              </Box>
              <Box display="flex" marginTop={2} justifyContent="center">
                <GreyText
                  text="Silakan tambah data penduduk keluar pada halaman mutasi keluar terlebih dahulu"
                  className={classes.textCons}
                />
              </Box>
            </Box>
          )
        ) : null}
        {isLoading ? (
          <Box marginTop={20}>
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
          <Box marginTop={3} marginBottom={matches ? 10 : 2}>
            <Paper className={classes.paper}>
              <Box p={3}>
                <Box
                  p={2}
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Typography variant="h6">Daftar Penduduk Keluar</Typography>
                  </Box>
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
                </Box>
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
    pendudukKeluar: state.penduduk_keluar.penduduk_keluar,
    isLoading: state.penduduk_keluar.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPendudukKeluar: () => dispatch(fetchPendudukKeluar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PendudukKeluarPage);
