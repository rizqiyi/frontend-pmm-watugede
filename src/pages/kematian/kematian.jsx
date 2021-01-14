import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchDataKematian } from "../../reducers/kematian/kematian.actions";
import { useStyles } from "./kematian.style";
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
import { KematianTableHeadComponent } from "../../components/kematian-components/table-head/table-head";
import KematianTableBodyComponent from "../../components/kematian-components/table-body/table-body";
import dataIsNull from "../../assets/images/no-data-found.svg";
import { GreyText } from "../../components/typography/typography";
import { CSVLink } from "react-csv";

const KematianPage = ({ ...props }) => {
  const { fetchDataKematian, dataKematian, isLoading } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const classes = useStyles();

  useEffect(() => {
    fetchDataKematian();
  }, [fetchDataKematian]);

  const today = new Date();

  const rows = dataKematian;

  let dataToExcel = [];

  rows.map((a) => {
    let sendToOuter = {
      "Nomor Kartu Keluarga": `=""${a.pemilik_data.keluarga_dari.no_kk}""`,
      "Nomor Induk Keluarga": `=""${a.pemilik_data.nik}""`,
      "Nama Lengkap": a.pemilik_data.nama_lengkap,
      "Tempat Tanggal Lahir": a.pemilik_data.tempat_tanggal_lahir,
      Umur: a.pemilik_data.umur,
      Alamat: a.pemilik_data.alamat_asal,
      Agama: a.pemilik_data.agama,
      "Posisi Dalam Keluarga": a.pemilik_data.posisi_dalam_keluarga,
      "Status Perkawinan": a.pemilik_data.status_perkawinan,
      "Jenis Kelamin": a.pemilik_data.jenis_kelamin,
      "Data Arsip Kematian": a.arsip_kematian ? "lengkap" : "tidak lengkap",
      "Tanggal Meninggal": a.tanggal_meninggal,
      "Tempat Meninggal": a.tempat_meninggal,
      "Nomor Surat Kematian": a.nomor_surat_kematian,
      "Penyebab Meninggal": a.penyebab_meninggal,
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
                  DATA KEMATIAN KOSONG
                </Typography>
              </Box>
              <Box display="flex" marginTop={2} justifyContent="center">
                <GreyText
                  text="Silakan tambah data kematian pada halaman edit penduduk terlebih dahulu"
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
                      <Typography variant="h6">
                        Daftar Penduduk Meninggal
                      </Typography>
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
                          className={classes.controlButton}
                          disabled={rows.length === 0}
                          component={CSVLink}
                          data={dataToExcel}
                          filename={`data_kematian_${today.toLocaleDateString(
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
                  <TableContainer>
                    <Divider />
                    <Table
                      className={classes.table}
                      aria-labelledby="tableTitle"
                      aria-label="enhanced table"
                    >
                      <KematianTableHeadComponent
                        classes={classes}
                        order={order}
                        orderBy={orderBy}
                        setOrder={setOrder}
                        setOrderBy={setOrderBy}
                        rowCount={rows.length}
                      />
                      <KematianTableBodyComponent
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
    dataKematian: state.kematian.kematian,
    isLoading: state.kematian.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDataKematian: () => dispatch(fetchDataKematian()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(KematianPage);
