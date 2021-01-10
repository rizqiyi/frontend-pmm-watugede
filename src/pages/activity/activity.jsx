import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getDataAdminActivity } from "../../reducers/aktifitas_admin/admin_activity.actions";
import {
  Box,
  CircularProgress,
  Divider,
  Paper,
  Table,
  TableContainer,
  TablePagination,
  Typography,
} from "@material-ui/core";
import { AdminActivityTableHeadComponent } from "../../components/activity-components/table-head/table-head";
import AdminActivityTableBodyComponent from "../../components/activity-components/table-body/table-body";
import { useStyles } from "./activity.style";
import activityIsNull from "../../assets/images/no-activity.svg";
import { GreyText } from "../../components/typography/typography";

export const AdminActivityPage = ({ ...props }) => {
  const { getDataAdminActivity, activity, isLoading } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("");
  const classes = useStyles();

  useEffect(() => {
    getDataAdminActivity();
  }, [getDataAdminActivity]);
  const rows = activity;

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
      <Box className={classes.root}>
        {rows.length === 0 ? (
          isLoading ? null : (
            <Box display="flex" flexDirection="column">
              <Box>
                <img
                  src={activityIsNull}
                  className={classes.dataIsNull}
                  alt="Data Not Found"
                />
              </Box>
              <Box display="flex" marginTop={4} justifyContent="center">
                <Typography className={classes.textIsNull}>
                  DATA AKTIFITAS ADMIN KOSONG
                </Typography>
              </Box>
              <Box display="flex" marginTop={2} justifyContent="center">
                <GreyText
                  text="Belum ada aktivitas dari admin yang masuk ke dalam sistem."
                  className={classes.textCons}
                />
              </Box>
            </Box>
          )
        ) : null}
        {isLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            margin="10rem auto 0px auto"
          >
            <CircularProgress color="primary" />
          </Box>
        ) : null}
        {rows.length !== 0 ? (
          isLoading ? null : (
            <Box marginTop={3}>
              <Paper className={classes.paper}>
                <Box p={3}>
                  <TableContainer>
                    <Box marginBottom={2}>
                      <Typography variant="h6">
                        Daftar Aktifitas Admin
                      </Typography>
                    </Box>
                    <Divider />
                    <Table
                      className={classes.table}
                      aria-labelledby="tableTitle"
                      aria-label="enhanced table"
                    >
                      <AdminActivityTableHeadComponent
                        classes={classes}
                        order={order}
                        orderBy={orderBy}
                        setOrder={setOrder}
                        setOrderBy={setOrderBy}
                        rowCount={rows.length}
                      />
                      <AdminActivityTableBodyComponent
                        rows={rows}
                        order={order}
                        orderBy={orderBy}
                        page={page}
                        rowsPerPage={rowsPerPage}
                        emptyRows={emptyRows}
                      />
                    </Table>
                  </TableContainer>
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
              </Paper>
            </Box>
          )
        ) : null}
      </Box>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    activity: state.admin_activity.activity,
    isLoading: state.admin_activity.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getDataAdminActivity: () => dispatch(getDataAdminActivity()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminActivityPage);
