import {
  Box,
  Chip,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./table-body.style";
import { getComparator, stableSort } from "../../../helpers/table";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const PendudukMasukTableBodyComponent = ({ ...props }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <TableBody>
        {stableSort(props.rows, getComparator(props.order, props.orderBy))
          .slice(
            props.page * props.rowsPerPage,
            props.page * props.rowsPerPage + props.rowsPerPage
          )
          .map((row, index) => {
            console.log(row);
            return row.anggota_keluarga[0] !== undefined ? (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                <TableCell align="left">{row.no_kk}</TableCell>
                <TableCell align="left" className={classes.controlText}>
                  {row.anggota_keluarga[0].nama_lengkap}
                </TableCell>
                <TableCell align="left" className={classes.controlText}>
                  {row.anggota_keluarga[0].tempat_tanggal_lahir}
                </TableCell>
                <TableCell align="left">
                  {row.anggota_keluarga[0].umur}
                </TableCell>
                <TableCell align="left" className={classes.controlText}>
                  {row.anggota_keluarga[0].alamat_asal}
                </TableCell>
                <TableCell align="left">
                  {row.anggota_keluarga[0].jenis_kelamin}
                </TableCell>
                <TableCell align="left">
                  {row.anggota_keluarga.length}
                </TableCell>
                <TableCell align="left">
                  {row.data_penduduk_masuk ? (
                    <Chip
                      size="small"
                      label="Data Lengkap"
                      className={classes.succesChip}
                    />
                  ) : (
                    <Chip
                      size="small"
                      label="Data Tidak Lengkap"
                      className={classes.warningChip}
                    />
                  )}
                </TableCell>
                <TableCell align="left">
                  {
                    <Box className={classes.controlTextLink}>
                      <Typography variant="body2">
                        <Link
                          className={classes.controlLink}
                          to={`/penduduk_masuk/${row._id}/d`}
                          color="primary"
                        >
                          Lihat Detail
                        </Link>
                      </Typography>
                    </Box>
                  }
                </TableCell>
              </TableRow>
            ) : null;
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendudukMasukTableBodyComponent);
