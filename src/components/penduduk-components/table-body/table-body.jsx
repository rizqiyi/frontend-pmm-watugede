import { TableBody, TableCell, TableRow, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./table-body.style";
import { getComparator, stableSort } from "../../../helpers/table";
import { Link } from "react-router-dom";

export const PendudukTableBodyComponent = ({ ...props }) => {
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
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                <TableCell align="left">{row.keluarga_dari.no_kk}</TableCell>
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
                <TableCell align="left">{row.posisi_dalam_keluarga}</TableCell>
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
