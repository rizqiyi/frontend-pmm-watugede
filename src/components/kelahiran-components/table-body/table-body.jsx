import {
  Box,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useStyles } from "./table-body.style";
import { getComparator, stableSort } from "../../../helpers/table";
import { Link } from "react-router-dom";

const KelahiranTableBodyComponent = ({ ...props }) => {
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
              <TableRow role="checkbox" tabIndex={-1} key={index}>
                <TableCell align="left" className={classes.controlText}>
                  {row.nama}
                </TableCell>
                <TableCell align="left" className={classes.controlText}>
                  {row.jenis_kelamin}
                </TableCell>
                <TableCell align="left">{row.tempat_lahir}</TableCell>
                <TableCell align="left" className={classes.controlText}>
                  {row.tanggal_lahir}
                </TableCell>
                <TableCell align="left">{row.agama}</TableCell>
                <TableCell align="left">{row.hubungan_pelapor}</TableCell>
                <TableCell align="left">
                  <Box>
                    <Typography variant="body2">
                      <Link
                        className={classes.controlLink}
                        to={`/kelahiran/${row._id}/d`}
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

export default KelahiranTableBodyComponent;
