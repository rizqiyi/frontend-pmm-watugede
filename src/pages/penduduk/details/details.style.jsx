import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  largeTextField: {
    margin: theme.spacing(1.5),
    marginTop: theme.spacing(2),
    width: "60%",
  },
  mediumTextField: {
    margin: theme.spacing(1.5),
    marginTop: theme.spacing(2),
    width: "40%",
  },
  smallTextField: {
    margin: theme.spacing(1.5),
    marginTop: theme.spacing(2),
    width: "20%",
  },
  pekerjaanField: {
    margin: theme.spacing(1.5),
    marginTop: theme.spacing(2),
    width: "30%",
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
  updateButton: {
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));
