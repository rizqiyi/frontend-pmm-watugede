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
  controlButton: {
    color: "#fff",
    "&:hover": {
      backgroundColor: "#1E94F8",
    },
  },
}));
