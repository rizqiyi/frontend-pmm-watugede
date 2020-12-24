import {
  Box,
  Button,
  Divider,
  Table,
  TableContainer,
  TablePagination,
  Paper,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { AnggotaKeluargaTableHeadComponent } from "../../../components/anggota-keluarga-components/table-head/table-head";
import AnggotaKeluargaTableBodyComponent from "../../../components/anggota-keluarga-components/table-body/table-body";
import { getKartuKeluargaByID } from "../../../reducers/kartu_keluarga/kartu_keluarga.actions";
import { useStyles } from "./details.style";
import { Skeleton } from "@material-ui/lab";
import { CSVLink } from "react-csv";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";

const DetailKartuKeluargaPage = ({ ...props }) => {
  const {
    match,
    getKartuKeluargaByID,
    detailAnggotaKeluarga,
    isLoading,
  } = props;
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");

  const paramsId = match.params.id;

  useEffect(() => {
    getKartuKeluargaByID(paramsId);
  }, [paramsId, getKartuKeluargaByID]);

  const rows = detailAnggotaKeluarga.map((d) => d);

  let dataToExcel = [];

  detailAnggotaKeluarga.map((a) => {
    const {
      nik,
      umur,
      alamat_asal,
      jenis_kelamin,
      nama_lengkap,
      agama,
      tempat_tanggal_lahir,
      posisi_dalam_keluarga,
      status_perkawinan,
    } = a;

    let sendToOuter = {
      "Nomor Induk Keluarga": `=""${nik}""`,
      "Nama Lengkap": nama_lengkap,
      "Tempat Tanggal Lahir": tempat_tanggal_lahir,
      Umur: umur,
      Alamat: alamat_asal,
      Agama: agama,
      "Posisi Dalam Keluarga": posisi_dalam_keluarga,
      "Status Perkawinan": status_perkawinan,
      "Jenis Kelamin": jenis_kelamin,
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
          <Box marginTop={3}>
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
                      Daftar Anggota Keluarga
                    </Typography>
                  </Box>
                  <Box display="flex" flexDirection="row">
                    <Box>
                      <Button
                        color="primary"
                        size="small"
                        component={CSVLink}
                        data={dataToExcel}
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
                        component={Link}
                        to="/kartu_keluarga/insert"
                        className={classes.textButton}
                        startIcon={<AddIcon />}
                        variant="contained"
                      >
                        Tambah Kartu Keluarga
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
                    <AnggotaKeluargaTableHeadComponent
                      classes={classes}
                      order={order}
                      orderBy={orderBy}
                      setOrder={setOrder}
                      setOrderBy={setOrderBy}
                      rowCount={rows.length}
                    />
                    <AnggotaKeluargaTableBodyComponent
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
    detailAnggotaKeluarga: state.kartu_keluarga.kartu_keluarga_obj,
    isLoading: state.kartu_keluarga.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getKartuKeluargaByID: (id) => dispatch(getKartuKeluargaByID(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailKartuKeluargaPage);
