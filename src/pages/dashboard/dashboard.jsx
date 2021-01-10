import {
  Box,
  Paper,
  Typography,
  Divider,
  Grid,
  Container,
} from "@material-ui/core";
import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { clearInfos } from "../../reducers/infos/info.actions";
import dashboardIllust from "../../assets/images/dashboard-illustration.svg";
import { useStyles } from "./dashboard.style";
import ReactApexChart from "react-apexcharts";
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

  const series = [44, 55, 41];
  const options = {
    chart: {
      type: "donut",
    },
    colors: ["#A4D4FF", "#6AB4F6", "#329DF7"],
    responsive: [
      {
        breakpoint: 2000,
        options: {
          chart: {
            width: 500,
          },
          legend: {
            show: true,
            position: "bottom",
            fontFamily: "Poppins, sans-serif",
            inverseOrder: true,
          },
        },
      },
    ],
    plotOptions: {
      pie: {
        customScale: 0.9,
      },
    },
    labels: ["Penduduk Keluar", "Penduduk Masuk", "Penduduk"],
    tooltip: {
      onDatasetHover: {
        highlightDataSeries: true,
      },
    },
    dataLabels: { enabled: false },
  };

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
                    <Typography className={classes.values}>60%</Typography>
                  </Box>
                  <Box marginBottom={1}>
                    <Typography>Penduduk</Typography>
                  </Box>
                </Box>
                <Box className={classes.pendudukMasukShape}>
                  <Box marginBottom={2} marginTop={2}>
                    <Typography className={classes.values}>60%</Typography>
                  </Box>
                  <Box maxWidth={100} textAlign="center">
                    <Typography>Penduduk Masuk</Typography>
                  </Box>
                </Box>
                <Box className={classes.pendudukKeluarShape}>
                  <Box marginBottom={2} marginTop={2}>
                    <Typography className={classes.values}>60%</Typography>
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
    infos: state.infos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearInfos: () => dispatch(clearInfos()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
