import React, { useEffect, useRef, useState } from "react";
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
import { clearInfos } from "../../reducers/infos/info.actions";
import { CSVLink } from "react-csv";

const PendudukMasukPage = ({ ...props }) => {
  const {
    fetchKartuKeluargaPendudukMasuk,
    pendudukMasuk,
    isLoading,
    clearInfos,
  } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const classes = useStyles();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      clearInfos();
    }
    fetchKartuKeluargaPendudukMasuk();
  }, [fetchKartuKeluargaPendudukMasuk, clearInfos]);

  const today = new Date();

  const rows = pendudukMasuk;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  let dataToExcel = [];

  rows.map((a) => {
    let sendToOuter = {};

    if (a.anggota_keluarga[0] !== undefined) {
      sendToOuter = {
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
    }

    return dataToExcel.push(sendToOuter);
  });

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
                        Daftar Penduduk Masuk
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
                          component={CSVLink}
                          data={dataToExcel}
                          className={classes.controlButton}
                          disabled={rows.length === 0}
                          filename={`data_kartu_keluarga_penduduk_masuk_${today.toLocaleDateString(
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
          )
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
    clearInfos: () => dispatch(clearInfos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PendudukMasukPage);
