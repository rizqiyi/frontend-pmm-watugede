import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  dataIsNull: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    width: "250px",
    height: "auto",
    marginTop: theme.spacing(4),
  },
  textIsNull: {
    color: "black",
    fontSize: "18px",
    fontWeight: 500,
  },
  textCons: {
    fontWeight: 350,
    maxWidth: 500,
    textAlign: "center",
  },
  textLink: {
    color: theme.palette.primary.main,
    textDecoration: "none",
  },
}));
