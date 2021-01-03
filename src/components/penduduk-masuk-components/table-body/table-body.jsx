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
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
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
                  {row.keluarga_dari.anggota_keluarga.length}
                </TableCell>
                <TableCell align="left">
                  {row.keluarga_dari.data_penduduk_masuk ? (
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
                          to={`/penduduk_masuk/${row.keluarga_dari._id}/d/${row._id}`}
                          color="primary"
                        >
                          Lihat Detail
                        </Link>
                      </Typography>
                    </Box>
                  }
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendudukMasukTableBodyComponent);
