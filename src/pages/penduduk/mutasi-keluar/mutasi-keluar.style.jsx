import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  largeTextField: {
    margin: theme.spacing(1.5),
    marginTop: theme.spacing(2),
    width: "60%",
  },
  namaLengkapTextField: {
    margin: theme.spacing(1.5),
    marginTop: theme.spacing(2),
    width: "75%",
  },
  mediumTextField: {
    margin: theme.spacing(1.5),
    marginTop: theme.spacing(2),
    width: "40%",
  },
  smallTextField: {
    margin: theme.spacing(1.5),
    marginTop: theme.spacing(2),
    width: "25%",
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
