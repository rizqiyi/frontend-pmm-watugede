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
import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { AnggotaKeluargaTableHeadComponent } from "../../../components/anggota-keluarga-components/table-head/table-head";
import AnggotaKeluargaTableBodyComponent from "../../../components/anggota-keluarga-components/table-body/table-body";
import { getKartuKeluargaByID } from "../../../reducers/kartu_keluarga/kartu_keluarga.actions";
import { useStyles } from "./details.style";
import { Alert, Skeleton } from "@material-ui/lab";
import { CSVLink } from "react-csv";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "react-router-dom";
import DialogDeleteComponents from "../../../components/anggota-keluarga-components/dialog-delete-details/dialog-delete";
import dataIsNull from "../../../assets/images/no-data-found.svg";
import { GreyText } from "../../../components/typography/typography";
import MutasiDialogAll from "../../../components/anggota-keluarga-components/mutasi-dialogs-all/mutasi-dialogs-all";
import { clearInfos } from "../../../reducers/infos/info.actions";

const DetailKartuKeluargaPage = ({ ...props }) => {
  const {
    match,
    getKartuKeluargaByID,
    detailAnggotaKeluarga,
    isLoading,
    infosStatus,
    infosMessage,
    infosID,
    clearInfos,
  } = props;
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const [openDialogDelete, setOpenDialogDelete] = useState(false);
  const [idToDelete, setIdToDelete] = useState([]);
  const [dialogMutasiAll, setDialogMutasiAll] = useState(false);
  const paramsIdKK = match.params.id_kk;
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      clearInfos();
      getKartuKeluargaByID(paramsIdKK);
      isFirstRender.current = false;
    }
  }, [paramsIdKK, getKartuKeluargaByID, clearInfos]);

  const rows = detailAnggotaKeluarga;

  let dataToExcel = [];

  rows.map((a) => {
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
      {infosID === "POST_MANY_PENDUDUK_KELUAR_SUCCESS" &&
      infosStatus === 201 ? (
        <Alert severity="success" icon={false}>
          {infosMessage}
        </Alert>
      ) : null}
      {infosID === "FAIL_POST_MANY_PENDUDUK_KELUAR" && infosStatus === 400 ? (
        <Alert severity="error" icon={false}>
          {infosMessage}
        </Alert>
      ) : null}
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
                  DATA ANGGOTA KELUARGA KOSONG
                </Typography>
              </Box>
              <Box display="flex" marginTop={2} justifyContent="center">
                <GreyText
                  text="Harap Menambahkan Kartu Keluarga Baru"
                  className={classes.textCons}
                />
              </Box>
              <Box display="flex" marginTop={2} justifyContent="center">
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
                        filename="anggota_keluarga.csv"
                      >
                        Unduh CSV
                      </Button>
                    </Box>
                    <Box>
                      <Button
                        color="primary"
                        component={Link}
                        to={`/kartu_keluarga/${paramsIdKK}/i`}
                        className={classes.textButton}
                        startIcon={<AddIcon />}
                        variant="contained"
                      >
                        Tambah Anggota Keluarga
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
                      setOpenDialogDelete={setOpenDialogDelete}
                      setIdToDelete={setIdToDelete}
                      rowsPerPage={rowsPerPage}
                      emptyRows={emptyRows}
                    />
                  </Table>
                </TableContainer>
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box>
                    <Button
                      variant="contained"
                      className={classes.mutasiButton}
                      onClick={(e) => {
                        e.preventDefault();
                        setDialogMutasiAll(true);
                      }}
                    >
                      Mutasi
                    </Button>
                  </Box>
                  <Box>
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
                </Box>
              </Box>
            </Paper>
          </Box>
        ) : null}
      </div>
      <DialogDeleteComponents
        open={openDialogDelete}
        handleClose={setOpenDialogDelete}
        idToDelete={idToDelete}
        paramsIdKK={paramsIdKK}
      />
      <MutasiDialogAll
        open={dialogMutasiAll}
        handleClose={setDialogMutasiAll}
        idKK={paramsIdKK}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    detailAnggotaKeluarga: state.kartu_keluarga.kartu_keluarga_obj,
    isLoading: state.kartu_keluarga.isLoading,
    infosStatus: state.infos.status,
    infosMessage: state.infos.message,
    infosID: state.infos.id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getKartuKeluargaByID: (id) => dispatch(getKartuKeluargaByID(id)),
    clearInfos: () => dispatch(clearInfos()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailKartuKeluargaPage);
