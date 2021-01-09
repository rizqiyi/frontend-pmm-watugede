import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  controlLink: {
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  backButton: {
    color: "#8F8F8F",
    fontWeight: 500,
    border: "2px solid rgba(143, 143, 143, 0.5)",
    width: theme.spacing(14),
    padding: "6px",
    borderRadius: 50,
    textTransform: "inherit",
  },
  dataIsNull: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    marginTop: theme.spacing(4),
  },
  textIsNull: {
    color: "black",
    fontSize: "18px",
    fontWeight: 500,
  },
  textCons: {
    fontWeight: 350,
    maxWidth: 350,
    textAlign: "center",
  },
  insertButton: {
    background: theme.palette.primary.main,
    color: "#fff",
    width: theme.spacing(18),
    padding: "8px",
    fontWeight: 500,
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  controlInput: {
    margin: "10px 0px",
    width: theme.spacing(40),
    [theme.breakpoints.between(0, 1300)]: {
      width: theme.spacing(32),
    },
  },
  controlWidth: {
    width: "90%",
    margin: "0 auto",
    [theme.breakpoints.between(0, 1300)]: {
      width: "92%",
    },
  },
  controlAlert: {
    margin: "0 auto 10px auto",
    width: "90.5%",
  },
}));
