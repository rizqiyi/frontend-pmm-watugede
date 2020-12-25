import { Box, Button, TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { useStyles } from "./table-body.style";
import { getComparator, stableSort } from "../../../helpers/table";
import { Link } from "react-router-dom";
import { Skeleton } from "@material-ui/lab";
import { connect } from "react-redux";

const AnggotaKeluargaTableBodyComponent = ({ ...props }) => {
  const classes = useStyles();
  const { isLoading, setOpenDialogDelete, setIdToDelete } = props;
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
                  {isLoading ? <Skeleton /> : row.posisi_dalam_keluarga}
                </TableCell>
                <TableCell align="left">
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent="space-evenly"
                    >
                      <Box>
                        <Button
                          size="small"
                          color="primary"
                          className={classes.controlEdit}
                          component={Link}
                          to={`/kartu_keluarga/${row._id}/d/update`}
                        >
                          Edit
                        </Button>
                      </Box>
                      <Box>
                        <Button
                          size="small"
                          onClick={(e) => {
                            e.preventDefault();
                            setOpenDialogDelete(true);
                            setIdToDelete(row);
                          }}
                          className={classes.controlDelete}
                        >
                          Hapus
                        </Button>
                      </Box>
                    </Box>
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

const mapStateToProps = (state) => {
  return {
    isLoading: state.kartu_keluarga.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnggotaKeluargaTableBodyComponent);
