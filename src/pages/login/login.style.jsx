import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10rem auto 0px",
    width: "28%",
    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  linear: {
    width: "100%",
  },
  margin: {
    margin: theme.spacing(1.5),
    width: "80%",
  },
  controlButton: {
    width: "80%",
    marginTop: theme.spacing(3),
  },
}));
