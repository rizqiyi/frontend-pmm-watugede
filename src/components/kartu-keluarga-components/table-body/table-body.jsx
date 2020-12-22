import { TableBody, TableCell, TableRow, Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./table-body.style";
import { getComparator, stableSort } from "../../../helpers/table";
import { Link } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";
import { useSelector } from "react-redux";

export const PendudukTableBodyComponent = ({ ...props }) => {
  const classes = useStyles();
  const isLoading = useSelector((state) => state.penduduk_keluar.isLoading);

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
                <TableCell align="left">
                  {isLoading ? <Skeleton /> : row.nik}
                </TableCell>
                <TableCell align="left" className={classes.controlText}>
                  {isLoading ? <Skeleton /> : row.nama_lengkap}
                </TableCell>
                <TableCell align="left" className={classes.controlText}>
                  {isLoading ? <Skeleton /> : row.tempat_tanggal_lahir}
                </TableCell>
                <TableCell align="left">
                  {isLoading ? <Skeleton /> : row.umur}
                </TableCell>
                <TableCell align="left" className={classes.controlText}>
                  {isLoading ? <Skeleton /> : row.alamat_asal}
                </TableCell>
                <TableCell align="left">
                  {isLoading ? <Skeleton /> : row.jenis_kelamin}
                </TableCell>
                <TableCell align="left">
                  {isLoading ? <Skeleton /> : props.jumlahAnggotaKeluarga}
                </TableCell>
                <TableCell align="left">
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    <Typography variant="body2">
                      <Link
                        className={classes.controlLink}
                        to={`/kartu_keluarga/${row._id}/d`}
                        color="primary"
                      >
                        Lihat Detail
                      </Link>
                    </Typography>
                  )}
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
