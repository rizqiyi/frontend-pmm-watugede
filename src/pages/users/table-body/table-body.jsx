import { Box, Button, TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { useStyles } from "./table-body.style";
import { getComparator, stableSort } from "../../../helpers/table";
import moment from "moment";

const KartuKeluargaTableBodyComponent = ({ ...props }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <TableBody>
        {stableSort(props.rows, getComparator(props.order, props.orderBy))
          .slice(
            props.page * props.rowsPerPage,
            props.page * props.rowsPerPage + props.rowsPerPage
          )
          .map((row, index) => (
            <TableRow hover role="checkbox" tabIndex={-1} key={index}>
              <TableCell align="left">{row.nama_lengkap}</TableCell>
              <TableCell align="left">{row.username}</TableCell>
              <TableCell align="left">{row.role || "-"}</TableCell>
              <TableCell align="left">
                {moment(row.createdAt || "00-00-0000").isValid()
                  ? moment(row.createdAt).format("DD-MM-YYYY")
                  : "-"}
              </TableCell>
              <TableCell align="left">
                <Box
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <Box>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        props.setOpenDialogEdit(true);
                        props.setRowDetail(row);
                      }}
                      size="small"
                      color="primary"
                      className={classes.controlEdit}
                    >
                      Edit
                    </Button>
                  </Box>
                  <Box>
                    <Button
                      onClick={(e) => {
                        e.preventDefault();
                        props.setIdToDelete(row._id);
                      }}
                      size="small"
                      className={classes.controlDelete}
                    >
                      Hapus
                    </Button>
                  </Box>
                </Box>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </React.Fragment>
  );
};

export default KartuKeluargaTableBodyComponent;
