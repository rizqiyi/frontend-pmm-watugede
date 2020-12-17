import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  largeTextField: {
    marginTop: theme.spacing(2),
    width: "60%",
  },
  mediumTextField: {
    marginTop: theme.spacing(2),
    width: "40%",
  },
  smallTextField: {
    marginTop: theme.spacing(2),
    width: "20%",
  },
  pekerjaanField: {
    marginTop: theme.spacing(2),
    width: "30%",
  },
  iconButton: {
    width: "100px",
    height: "100px",
    marginBottom: "5px",
  },
  pengikutTextField: {
    marginTop: theme.spacing(2),
    width: "20%",
  },
  addIcon: {
    width: "60px",
    height: "60px",
  },
}));
