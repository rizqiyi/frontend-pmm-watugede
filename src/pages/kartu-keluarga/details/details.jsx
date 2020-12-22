import { Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

const DetailKartuKeluargaPage = () => {
  return (
    <React.Fragment>
      <Typography>Hello Kartu Keluarga Details</Typography>
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
)(DetailKartuKeluargaPage);
