import {
  Box,
  Button,
  Divider,
  Paper,
  Table,
  TableContainer,
  TablePagination,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { PendudukTableBodyComponent } from "../../components/penduduk-components/table-body/table-body";
import { PendudukEnhancedTableHead } from "../../components/penduduk-components/table-head/table-head";
import { fetchPenduduk } from "../../reducers/penduduk/penduduk.actions";
import { useStyles } from "./penduduk.style";
import { clearInfos } from "../../reducers/infos/info.actions";
import { CSVLink } from "react-csv";
import dataIsNull from "../../assets/images/no-data-found.svg";
import { Skeleton } from "@material-ui/lab";
import { GreyText } from "../../components/typography/typography";

export const PendudukPage = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPenduduk());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clearInfos]);

  const data = useSelector((state) => state.penduduks.penduduk);
  const isLoading = useSelector((state) => state.penduduks.isLoading);

  const rows = data.map((d) => d);

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
                    <Typography variant="h6">Daftar Penduduk</Typography>
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
                        filename="penduduk.csv"
                      >
                        Unduh CSV
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        color="primary"
                        component={Link}
                        to="/penduduk/insert"
                        className={classes.textButton}
                        startIcon={<AddIcon />}
                        variant="contained"
                      >
                        Tambah Penduduk
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
        ) : null}
      </div>
    </React.Fragment>
  );
};
