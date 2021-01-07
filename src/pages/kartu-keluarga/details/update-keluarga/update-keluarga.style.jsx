import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
  },
  largeTextField: {
    width: "150%",
    margin: "28px 0px 0px 0px",
  },
  lastField: {
    width: "130%",
    margin: "28px 0px 0px 0px",
  },
  paper: {
    width: "100%",
  },
  alamatTextField: {
    width: "280%",
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
  },
  mutasiButton: {
    color: "#fff",
    width: theme.spacing(15),
    padding: "10px ",
    borderRadius: 50,
    fontWeight: 400,
    textTransform: "inherit",
    backgroundColor: theme.palette.warning.main,
    "&:hover": {
      backgroundColor: theme.palette.warning.main,
    },
  },
  kematianButton: {
    color: "#fff",
    width: theme.spacing(34),
    padding: "10px ",
    borderRadius: 50,
    fontWeight: 400,
    textTransform: "inherit",
    backgroundColor: "#607d8b",
    "&:hover": {
      backgroundColor: "#607d8b",
    },
  },
  constText: {
    color: theme.palette.grey.main,
    fontSize: 12,
    fontWeight: 550,
    wordSpacing: "1px",
    textDecoration: "underline",
    fontStyle: "italic",
  },
  controlButton: {
    color: "#fff",
    width: theme.spacing(20),
    padding: "10px",
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      backgroundColor: "#1E94F8",
    },
  },
}));
