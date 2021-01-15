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
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { PendudukTableBodyComponent } from "../../components/penduduk-components/table-body/table-body";
import { PendudukEnhancedTableHead } from "../../components/penduduk-components/table-head/table-head";
import { fetchPenduduk } from "../../reducers/penduduk/penduduk.actions";
import { useStyles } from "./penduduk.style";
import dataIsNull from "../../assets/images/no-data-found.svg";
import { GreyText } from "../../components/typography/typography";
import { connect } from "react-redux";

const PendudukPage = ({ fetchPenduduk, dataPenduduk, isLoading }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const classes = useStyles();

  useEffect(() => {
    fetchPenduduk();
  }, [fetchPenduduk]);

  const rows = dataPenduduk;

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
                  <Box
                    p={2}
                    display="flex"
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box>
                      <Typography variant="h6">Daftar Penduduk</Typography>
                    </Box>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Box>
                        <Button color="primary" size="small">
                          Unduh CSV
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
          )
        ) : null}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    dataPenduduk: state.penduduk.penduduk,
    isLoading: state.penduduk.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPenduduk: () => dispatch(fetchPenduduk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PendudukPage);
