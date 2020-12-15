import { Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchPenduduk } from "../../../reducers/penduduk/penduduk.actions";

const PendudukDetailsPage = (props) => {
  const [state, setState] = useState({});
  const paramsId = props.match.params.id;

  useEffect(() => {
    const userId = paramsId;
    props.fetchPenduduk();

    const t = props.admin.find((p) => p._id === userId);

    setState(t);
  }, [paramsId, props.admin, props]);

  return <Typography>Hello {state.nama_lengkap}</Typography>;
};

const mapStateToProps = (state) => {
  return {
    admin: state.penduduks.penduduk,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPenduduk: () => dispatch(fetchPenduduk()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendudukDetailsPage);
