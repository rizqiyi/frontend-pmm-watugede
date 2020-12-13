import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#2340F5",
    },
    secondary: {
      main: "#2F14DE",
    },
  },
  typography: {
    fontFamily: ["Noto Sans JP", "sans-serif"].join(","),
  },
});
