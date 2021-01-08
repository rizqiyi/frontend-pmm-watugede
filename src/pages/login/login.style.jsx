import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    margin: "10rem auto 0px auto",
    [theme.breakpoints.down("lg")]: {
      width: "62%",
    },
    [theme.breakpoints.down("md")]: {
      margin: "2rem auto 1rem auto",
      width: "80%",
    },
    [theme.breakpoints.between(0, 600)]: {
      margin: "2rem auto 2rem auto",
      width: "100%",
    },
  },
  linear: {
    width: "100%",
  },
  coverLogin: {
    marginBottom: "0px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      objectFit: "cover",
    },
  },
  font: {
    fontWeight: 550,
  },
  fontCons: {
    fontSize: 14,
    fontWeight: 300,
    maxWidth: 320,
    marginTop: "15px",
  },
  controlContent: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.between(300, 600)]: {
      flexDirection: "column",
    },
  },
  margin: {
    marginTop: theme.spacing(1.6),
    width: "120%",
    color: theme.palette.info.main,
    [theme.breakpoints.down("lg")]: {
      width: "115%",
    },
  },
  padding: {
    padding: "10px",
    [theme.breakpoints.down("sm")]: {
      margin: "0 auto",
      padding: "20px",
    },
  },
  rightContent: {
    paddingLeft: "50px",
    paddingRight: "50px",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "30px",
      paddingRight: "30px",
    },
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
