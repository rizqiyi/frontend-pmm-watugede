import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  textIsNull: {
    color: "black",
    fontSize: "18px",
    fontWeight: 500,
  },
  dataIsNull: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    marginTop: theme.spacing(7),
  },
  textCons: {
    fontWeight: 350,
  },
}));
