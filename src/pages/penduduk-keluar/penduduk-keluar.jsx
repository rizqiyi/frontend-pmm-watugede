import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
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
  useMediaQuery,
} from "@material-ui/core";
import { CSVLink } from "react-csv";
import dataIsNull from "../../assets/images/no-data-found.svg";
import { useStyles } from "./penduduk-keluar.style";
import { GreyText } from "../../components/typography/typography";
import { getAllDataPendudukKeluar } from "../../reducers/penduduk_keluar/penduduk_keluar.actions";
import { PendudukKeluarTableBodyComponent } from "../../components/penduduk-keluar-components/table-body/table-body";
import { PendudukKeluarEnhancedTableHead } from "../../components/penduduk-keluar-components/table-head/table-head";

const PendudukKeluarPage = ({ ...props }) => {
  const { pendudukKeluar, getAllDataPendudukKeluar, isLoading } = props;

  useEffect(() => {
    getAllDataPendudukKeluar();
  }, [getAllDataPendudukKeluar]);

  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const matches = useMediaQuery("(max-width:600px)");

  const rows = pendudukKeluar;

  const today = new Date();

  let dataToExcel = [];

  rows.map((a) => {
    let sendToOuter = {
      "Nomor Kartu Keluarga": `=""${a.penduduk_keluar_desa[0].keluarga_dari.no_kk}""`,
      "Nama Lengkap": a.penduduk_keluar_desa[0].nama_lengkap,
      "Tempat Tanggal Lahir": a.penduduk_keluar_desa[0].tempat_tanggal_lahir,
      Umur: a.penduduk_keluar_desa[0].umur,
      Alamat: a.penduduk_keluar_desa[0].alamat_asal,
      Agama: a.penduduk_keluar_desa[0].agama,
      "Posisi Dalam Keluarga": a.penduduk_keluar_desa[0].posisi_dalam_keluarga,
      "Status Perkawinan": a.penduduk_keluar_desa[0].status_perkawinan,
      "Jenis Kelamin": a.penduduk_keluar_desa[0].jenis_kelamin,
      "Anggota Keluarga": a.penduduk_keluar_desa.length,
      "Data Penduduk Keluar": a.keterangan_keluar_desa
        ? "lengkap"
        : "tidak lengkap",
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
                      <Typography variant="h6">
                        Daftar Penduduk Keluar
                      </Typography>
                    </Box>
                    <Box>
                      <Button
                        color="primary"
                        size="small"
                        component={CSVLink}
                        data={dataToExcel}
                        className={classes.downloadButton}
                        disabled={rows.length === 0}
                        filename={`data_penduduk_keluar_${today.toLocaleDateString(
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
                  <TableContainer>
                    <Divider />
                    <Table
                      className={classes.table}
                      aria-labelledby="tableTitle"
                      aria-label="enhanced table"
                    >
                      <PendudukKeluarEnhancedTableHead
                        classes={classes}
                        order={order}
                        orderBy={orderBy}
                        setOrder={setOrder}
                        setOrderBy={setOrderBy}
                        rowCount={rows.length}
                      />
                      <PendudukKeluarTableBodyComponent
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
    pendudukKeluar: state.penduduk_keluar.penduduk_keluar,
    isLoading: state.penduduk_keluar.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllDataPendudukKeluar: () => dispatch(getAllDataPendudukKeluar()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PendudukKeluarPage);
