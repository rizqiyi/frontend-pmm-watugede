import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10rem auto 0px auto",
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  linear: {
    width: "100%",
  },
  fontCons: {
    fontSize: 14,
    fontWeight: 300,
    maxWidth: 320,
    marginTop: "15px",
  },
  margin: {
    marginTop: theme.spacing(1.6),
    width: "120%",
    color: theme.palette.info.main,
  },
  controlButton: {
    width: "40%",
    padding: "10px",
    fontWeight: 350,
    marginTop: theme.spacing(3),
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));
