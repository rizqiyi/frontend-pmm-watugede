import { Box, Divider, Paper, Typography, Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { DetailsDataComponent } from "../../../components/penduduk-components/details-data/details-data";
import { fetchPendudukById } from "../../../reducers/penduduk/penduduk.actions";
import { useStyles } from "./details.style";

const PendudukDetailsPage = ({ ...props }) => {
  const {
    match,
    fetchPendudukById,
    dataPendudukDetails,
    dataKKDetails,
    isFetching,
  } = props;
  const paramsId = match.params.id;
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    fetchPendudukById(paramsId);
  }, [fetchPendudukById, paramsId]);

  return (
    <React.Fragment>
      <Paper className={classes.paper}>
        <Box p={3}>
          <Box>
            <Typography>Details Data Penduduk</Typography>
          </Box>
          <Box marginBottom={3} marginTop={3}>
            <Divider />
          </Box>
          <DetailsDataComponent
            data={dataPendudukDetails}
            dataKK={dataKKDetails}
            isFetching={isFetching}
          />
          <Box marginTop={2} marginBottom={3}>
            <Divider />
          </Box>
          <Box display="flex" justifyContent="flex-end">
            <Button
              onClick={(e) => {
                e.preventDefault();
                history.push("/");
              }}
              className={classes.backButton}
            >
              Kembali
            </Button>
          </Box>
        </Box>
      </Paper>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    dataPendudukDetails: state.penduduk.penduduk_details,
    dataKKDetails: state.penduduk.data_kk,
    isFetching: state.penduduk.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPendudukById: (id) => dispatch(fetchPendudukById(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendudukDetailsPage);
