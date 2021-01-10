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
import AddIcon from "@material-ui/icons/Add";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CSVLink } from "react-csv";
import dataIsNull from "../../assets/images/no-data-found.svg";
import { GreyText } from "../../components/typography/typography";
import { fetchKelahiran } from "../../reducers/kelahiran/kelahiran.actions";
import KelahiranTableBodyComponent from "../../components/kelahiran-components/table-body/table-body";
import { KelahiranTableHeadComponent } from "../../components/kelahiran-components/table-head/table-head";
import { useStyles } from "./kelahiran.style";
import { connect } from "react-redux";

const KelahiranPage = ({ ...props }) => {
  const { fetchKelahiran, dataKelahiran, isLoading } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const classes = useStyles();

  useEffect(() => {
    fetchKelahiran();
  }, [fetchKelahiran]);

  const rows = dataKelahiran;

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
                  DATA KELAHIRAN KOSONG
                </Typography>
              </Box>
              <Box display="flex" marginTop={2} justifyContent="center">
                <GreyText
                  text="Silakan tambah data kelahiran terlebih dahulu"
                  className={classes.textCons}
                />
              </Box>
              <Box display="flex" marginTop={2} justifyContent="center">
                <Button
                  color="primary"
                  component={Link}
                  to="/kelahiran/insert"
                  className={classes.textButton}
                  startIcon={<AddIcon />}
                  variant="contained"
                >
                  Tambah Data Kelahiran
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
                      <Typography variant="h6">Daftar Kelahiran</Typography>
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
                          component={CSVLink}
                          data={rows}
                          className={classes.controlButton}
                          disabled={rows.length === 0}
                          filename="kelahiran.csv"
                        >
                          Unduh CSV
                        </Button>
                      </Box>
                      <Box>
                        <Button
                          color="primary"
                          component={Link}
                          to="/kelahiran/insert"
                          className={classes.toInsert}
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
                      <KelahiranTableHeadComponent
                        classes={classes}
                        order={order}
                        orderBy={orderBy}
                        setOrder={setOrder}
                        setOrderBy={setOrderBy}
                        rowCount={rows.length}
                      />
                      <KelahiranTableBodyComponent
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
    dataKelahiran: state.kelahiran.kelahiran,
    isLoading: state.kelahiran.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchKelahiran: () => dispatch(fetchKelahiran()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KelahiranPage);
