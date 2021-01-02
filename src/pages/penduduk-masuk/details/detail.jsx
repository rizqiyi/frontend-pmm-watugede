import {
  Box,
  Paper,
  Typography,
  TableContainer,
  Button,
  Table,
  TablePagination,
  Divider,
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

const DetailPendudukMasukPage = ({ ...props }) => {
  const {
    fetchKartuKeluargaPendudukMasukByID,
    anggotaPendudukMasuk,
    match,
    isLoading,
  } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const classes = useStyles();

  const paramsIdKepala = match.params.id_kepala;

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
                  <Typography variant="h6">Daftar Penduduk Masuk</Typography>
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
                      to="/penduduk_masuk/insert"
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
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    anggotaPendudukMasuk: state.penduduk_masuk.penduduk_masuk_details,
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
