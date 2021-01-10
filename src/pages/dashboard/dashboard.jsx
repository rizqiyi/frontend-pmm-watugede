import { Box, Paper, Typography, Divider } from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { clearInfos } from "../../reducers/infos/info.actions";
import dashboardIllust from "../../assets/images/dashboard-illustration.svg";
import { useStyles } from "./dashboard.style";
import { DataListsComponent } from "../../components/dashboard-components/data-lists";

const DashboardPage = ({ infos, clearInfos }) => {
  const isFirstRender = useRef(true);
  const classes = useStyles();

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      clearInfos();
    }
  }, [clearInfos]);

  return (
    <React.Fragment>
      <Paper>
        <Box p={3}>
          <Typography variant="h6">Dashboard</Typography>
          <Box marginTop={2} marginBottom={1}>
            <Divider />
          </Box>
          <Box className={classes.greetingCard}>
            <Box marginLeft={5}>
              <Box>
                <Typography
                  style={{ fontWeight: 500, fontSize: 28, color: "#fff" }}
                >
                  Hi, Rizqiyanto Imanullah
                </Typography>
              </Box>
              <Box marginTop={3} style={{ color: "#fff" }}>
                <Typography>Selamat Datang</Typography>
              </Box>
            </Box>
            <Box>
              <img
                src={dashboardIllust}
                alt="Malang Illustration"
                style={{ bottom: -6, position: "relative" }}
              />
            </Box>
          </Box>
          <DataListsComponent />
        </Box>
      </Paper>
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
