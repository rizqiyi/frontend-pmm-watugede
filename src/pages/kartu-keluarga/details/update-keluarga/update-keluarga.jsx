import { Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

const DetailKartuKeluargaUpdatePage = () => {
  return (
    <React.Fragment>
      <Typography>Hello update</Typography>
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
)(DetailKartuKeluargaUpdatePage);
