import {
  Box,
  TableBody,
  TableCell,
  Chip,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./table-body.style";
import { getComparator, stableSort } from "../../../helpers/table";
import { Link } from "react-router-dom";

const KematianTableBodyComponent = ({ ...props }) => {
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
              <TableRow
                role="checkbox"
                className={
                  row.status_penduduk === "penduduk_keluar"
                    ? classes.tableBodyStyle
                    : null
                }
                tabIndex={-1}
                key={index}
              >
                <TableCell align="left">{row.pemilik_data.nik}</TableCell>
                <TableCell align="left" className={classes.controlText}>
                  {row.pemilik_data.nama_lengkap}
                </TableCell>
                <TableCell align="left" className={classes.controlText}>
                  {row.pemilik_data.tempat_tanggal_lahir}
                </TableCell>
                <TableCell align="left">{row.pemilik_data.umur}</TableCell>
                <TableCell align="left" className={classes.controlText}>
                  {row.pemilik_data.alamat_asal}
                </TableCell>
                <TableCell align="left">
                  {row.pemilik_data.jenis_kelamin}
                </TableCell>
                <TableCell align="left">
                  {row.arsip_kematian ? (
                    <Chip
                      size="small"
                      label="Lengkap"
                      className={classes.succesChip}
                    />
                  ) : (
                    <Chip
                      size="small"
                      label="Tidak Lengkap"
                      className={classes.warningChip}
                    />
                  )}
                </TableCell>
                <TableCell align="left">
                  <Box>
                    <Typography variant="body2">
                      <Link
                        className={classes.controlLink}
                        to={`/kematian/${row._id}/d`}
                        color="primary"
                      >
                        Lihat Detail
                      </Link>
                    </Typography>
                  </Box>
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

export default KematianTableBodyComponent;
