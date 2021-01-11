import { Box, Paper, Typography, Divider, Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import dashboardIllust from "../../assets/images/dashboard-illustration.svg";
import { useStyles } from "./dashboard.style";
import ReactApexChart from "react-apexcharts";
import { DataListsComponent } from "../../components/dashboard-components/data-lists";
import { options } from "../../utilities/pie-chart";
import { fetchCountedData } from "../../reducers/dashboard/dashboard.actions";

const DashboardPage = ({ ...props }) => {
  const classes = useStyles();
  const { data, message, fetchCountedData, isLoading } = props;
  useEffect(() => {
    fetchCountedData();
  }, [fetchCountedData]);

  const checkIfUndefined = (value) => {
    return value === undefined || value === 0 ? 0 : value;
  };

  const checkIsNaN = (value) => {
    return isNaN(value) ? 0 : value;
  };

  const series = [
    checkIfUndefined(data.data_penduduk_keluar),
    checkIfUndefined(data.data_penduduk_masuk),
    checkIfUndefined(data.data_penduduk),
  ];

  const total =
    data.data_penduduk_keluar + data.data_penduduk_masuk + data.data_penduduk;

  return (
    <React.Fragment>
      <Paper style={{ borderRadius: 10, boxShadow: "none" }}>
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
                  {message}
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
          <DataListsComponent data={data} isLoading={isLoading} />
        </Box>
      </Paper>
      <Box marginTop={2}>
        <Grid container direction="row" spacing={4}>
          <Grid item sm={12} md={5}>
            <Paper style={{ borderRadius: 10, boxShadow: "none" }}>
              <Box
                p={2}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <div id="chart">
                  <ReactApexChart
                    options={options}
                    series={series}
                    type="donut"
                  />
                </div>
              </Box>
            </Paper>
          </Grid>
          <Grid item sm={12} md={7}>
            <Paper style={{ borderRadius: 10, boxShadow: "none" }}>
              <Box
                p={10.4}
                paddingLeft={7}
                paddingRight={7}
                display="flex"
                flexDirection="row"
                justifyContent="space-around"
              >
                <Box className={classes.pendudukShape}>
                  <Box marginBottom={2}>
                    <Typography className={classes.values}>
                      {checkIsNaN(
                        Math.floor((data.data_penduduk / total) * 100)
                      )}
                      %
                    </Typography>
                  </Box>
                  <Box marginBottom={1}>
                    <Typography>Penduduk</Typography>
                  </Box>
                </Box>
                <Box className={classes.pendudukMasukShape}>
                  <Box marginBottom={2} marginTop={2}>
                    <Typography className={classes.values}>
                      {checkIsNaN(
                        Math.floor((data.data_penduduk_masuk / total) * 100)
                      )}
                      %
                    </Typography>
                  </Box>
                  <Box maxWidth={100} textAlign="center">
                    <Typography>Penduduk Masuk</Typography>
                  </Box>
                </Box>
                <Box className={classes.pendudukKeluarShape}>
                  <Box marginBottom={2} marginTop={2}>
                    <Typography className={classes.values}>
                      {checkIsNaN(
                        Math.floor((data.data_penduduk_keluar / total) * 100)
                      )}
                      %
                    </Typography>
                  </Box>
                  <Box maxWidth={100} textAlign="center">
                    <Typography>Penduduk Keluar</Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.users.message,
    data: state.dashboard.dashboard_obj,
    isLoading: state.dashboard.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCountedData: () => dispatch(fetchCountedData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
