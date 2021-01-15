import { TableBody, TableCell, TableRow, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./table-body.style";
import { getComparator, stableSort } from "../../../helpers/table";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const PendudukTableBodyComponent = ({ ...props }) => {
  const classes = useStyles();

  const {
    filterSearch,
    nomorKK,
    searchResultName,
    searchResultNomorKK,
    searchResultNIK,
  } = props;

  let dataKK = [];

  if (filterSearch === "no_kk") {
    searchResultNomorKK.map((d) => dataKK.push(...d.anggota_keluarga));
  }

  return (
    <React.Fragment>
      <TableBody>
        {filterSearch === "nama_lengkap"
          ? stableSort(
              searchResultName,
              getComparator(props.order, props.orderBy)
            )
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell align="left">
                      {row.keluarga_dari.no_kk}
                    </TableCell>
                    <TableCell align="left">{row.nik}</TableCell>
                    <TableCell align="left" className={classes.controlText}>
                      {row.nama_lengkap}
                    </TableCell>
                    <TableCell align="left" className={classes.controlText}>
                      {row.tempat_tanggal_lahir}
                    </TableCell>
                    <TableCell align="left">{row.umur}</TableCell>
                    <TableCell align="left" className={classes.controlText}>
                      {row.alamat_asal}
                    </TableCell>
                    <TableCell align="left">{row.jenis_kelamin}</TableCell>
                    <TableCell align="left">
                      {row.posisi_dalam_keluarga}
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="body2">
                        <Link
                          className={classes.controlLink}
                          to={`/penduduk/${row._id}/d`}
                          color="primary"
                        >
                          Lihat Detail
                        </Link>
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })
          : null}
        {filterSearch === "nik"
          ? stableSort(
              searchResultNIK,
              getComparator(props.order, props.orderBy)
            )
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell align="left">
                      {row.keluarga_dari.no_kk}
                    </TableCell>
                    <TableCell align="left">{row.nik}</TableCell>
                    <TableCell align="left" className={classes.controlText}>
                      {row.nama_lengkap}
                    </TableCell>
                    <TableCell align="left" className={classes.controlText}>
                      {row.tempat_tanggal_lahir}
                    </TableCell>
                    <TableCell align="left">{row.umur}</TableCell>
                    <TableCell align="left" className={classes.controlText}>
                      {row.alamat_asal}
                    </TableCell>
                    <TableCell align="left">{row.jenis_kelamin}</TableCell>
                    <TableCell align="left">
                      {row.posisi_dalam_keluarga}
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="body2">
                        <Link
                          className={classes.controlLink}
                          to={`/penduduk/${row._id}/d`}
                          color="primary"
                        >
                          Lihat Detail
                        </Link>
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })
          : null}
        {filterSearch === "no_kk"
          ? stableSort(dataKK, getComparator(props.order, props.orderBy))
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell align="left">{nomorKK}</TableCell>
                    <TableCell align="left">{row.nik}</TableCell>
                    <TableCell align="left" className={classes.controlText}>
                      {row.nama_lengkap}
                    </TableCell>
                    <TableCell align="left" className={classes.controlText}>
                      {row.tempat_tanggal_lahir}
                    </TableCell>
                    <TableCell align="left">{row.umur}</TableCell>
                    <TableCell align="left" className={classes.controlText}>
                      {row.alamat_asal}
                    </TableCell>
                    <TableCell align="left">{row.jenis_kelamin}</TableCell>
                    <TableCell align="left">
                      {row.posisi_dalam_keluarga}
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="body2">
                        <Link
                          className={classes.controlLink}
                          to={`/penduduk/${row._id}/d`}
                          color="primary"
                        >
                          Lihat Detail
                        </Link>
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })
          : null}
        {filterSearch !== ""
          ? null
          : stableSort(props.rows, getComparator(props.order, props.orderBy))
              .slice(
                props.page * props.rowsPerPage,
                props.page * props.rowsPerPage + props.rowsPerPage
              )
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell align="left">
                      {row.keluarga_dari.no_kk}
                    </TableCell>
                    <TableCell align="left">{row.nik}</TableCell>
                    <TableCell align="left" className={classes.controlText}>
                      {row.nama_lengkap}
                    </TableCell>
                    <TableCell align="left" className={classes.controlText}>
                      {row.tempat_tanggal_lahir}
                    </TableCell>
                    <TableCell align="left">{row.umur}</TableCell>
                    <TableCell align="left" className={classes.controlText}>
                      {row.alamat_asal}
                    </TableCell>
                    <TableCell align="left">{row.jenis_kelamin}</TableCell>
                    <TableCell align="left">
                      {row.posisi_dalam_keluarga}
                    </TableCell>
                    <TableCell align="left">
                      <Typography variant="body2">
                        <Link
                          className={classes.controlLink}
                          to={`/penduduk/${row._id}/d`}
                          color="primary"
                        >
                          Lihat Detail
                        </Link>
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
        {props.emptyRows > 0 && (
          <TableRow style={{ height: 53 }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    filterSearch: state.penduduk.search_condition,
    nomorKK: state.penduduk.nomor_kk,
    searchResultName: state.penduduk.search_result_name,
    searchResultNomorKK: state.penduduk.search_result_no_kk,
    searchResultNIK: state.penduduk.search_result_nik,
  };
};

export default connect(mapStateToProps, null)(PendudukTableBodyComponent);
