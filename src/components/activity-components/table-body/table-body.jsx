import { TableBody, TableCell, TableRow } from "@material-ui/core";
import React from "react";
import { useStyles } from "./table-body.style";
import { getComparator, stableSort } from "../../../helpers/table";
import { Skeleton } from "@material-ui/lab";
import { connect } from "react-redux";
import moment from "moment";

const AdminActivityTableBodyComponent = ({ ...props }) => {
  const classes = useStyles();
  const { isLoading } = props;
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
                <TableCell align="left">
                  {isLoading ? (
                    <Skeleton />
                  ) : (
                    moment(row.createdAt).format("LLLL")
                  )}
                </TableCell>
                <TableCell align="left" className={classes.controlText}>
                  {isLoading ? <Skeleton /> : row.activity_by.nama_lengkap}
                </TableCell>
                <TableCell align="left" className={classes.controlText}>
                  {isLoading ? <Skeleton /> : row.activity_name}
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
)(AdminActivityTableBodyComponent);
