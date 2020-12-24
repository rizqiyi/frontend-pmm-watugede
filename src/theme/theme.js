import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#329DF7",
      dark: "#1E94F8",
    },
    secondary: {
      main: "#DAEFF7",
    },
    error: {
      main: "#F73232",
      light: "#ffebee",
    },
    warning: {
      main: "#F7C032",
    },
    info: {
      main: "#2340F5",
    },
    grey: {
      main: "#8F8F8F",
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});
