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

export { options };
