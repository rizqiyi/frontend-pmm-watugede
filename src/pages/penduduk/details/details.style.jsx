import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  largeTextField: {
    width: "150%",
    // margin: "10px",
    margin: "28px 0px 0px 0px",
  },
  lastField: {
    width: "130%",
    // margin: "10px",
    margin: "28px 0px 0px 0px",
  },
  paper: {
    width: "100%",
  },
  alamatTextField: {
    width: "300%",
    // height: "100%",
    margin: "28px 0px 0px 0px",
  },
  resetText: {
    color: theme.palette.grey.main,
    fontWeight: 400,
    wordSpacing: "1px",
    cursor: "pointer",
    textDecoration: "none",
  },
  backButton: {
    color: "#8F8F8F",
    fontWeight: 500,
    border: "2px solid rgba(143, 143, 143, 0.5)",
    width: theme.spacing(16),
    padding: "10px",
    borderRadius: 50,
    textTransform: "inherit",
    // "&:hover": {
    //   backgroundColor: "white",
    // },
  },
  controlButton: {
    color: "#fff",
    width: theme.spacing(30),
    padding: "10px",
    borderRadius: 50,
    fontWeight: 400,
    textTransform: "inherit",
    "&:hover": {
      backgroundColor: "#1E94F8",
    },
  },
  mutasiButton: {
    color: "#fff",
    width: theme.spacing(30),
    padding: "10px",
    borderRadius: 50,
    fontWeight: 400,
    textTransform: "inherit",
    backgroundColor: theme.palette.warning.main,
    "&:hover": {
      backgroundColor: theme.palette.warning.main,
    },
  },
  buttonWarning: {
    background: theme.palette.warning.main,
    color: "#fff",
    "&:hover": {
      background: theme.palette.warning.main,
    },
  },
  deleteButton: {
    background: theme.palette.error.main,
    color: "#fff",
    width: theme.spacing(30),
    padding: "10px",
    fontWeight: 400,
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      background: theme.palette.error.main,
    },
  },
  controlLink: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  controlCurrentLink: {
    textDecoration: "none",
    color: "#424242",
  },
}));
