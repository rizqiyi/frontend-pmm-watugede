import React from "react";
import { connect } from "react-redux";
import InsertComponents from "../../../components/penduduk-keluar-components/insert-keterangan-keluar/insert";

const InsertKeteranganKeluarPage = ({ ...props }) => {
  const { match } = props;

  const paramsId = match.params.id;

  return (
    <React.Fragment>
      <InsertComponents dataId={paramsId} />
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
)(InsertKeteranganKeluarPage);
