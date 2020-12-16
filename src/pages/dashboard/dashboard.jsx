import { Box } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { clearInfos } from "../../reducers/infos/info.actions";

const DashboardPage = ({ infos, clearInfos }) => {
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      clearInfos();
    }
  }, [clearInfos]);

  return (
    <React.Fragment>
      {infos.id === "LOGIN_SUCCESS" ? (
        <Box marginLeft={1.4} width="95%" marginBottom={2}>
          <Alert>{infos.message}</Alert>
        </Box>
      ) : null}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    infos: state.infos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearInfos: () => dispatch(clearInfos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
