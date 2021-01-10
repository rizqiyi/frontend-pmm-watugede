import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  backButton: {
    color: "#8F8F8F",
    fontWeight: 500,
    border: "2px solid rgba(143, 143, 143, 0.5)",
    width: theme.spacing(14),
    padding: "6px",
    borderRadius: 50,
    textTransform: "inherit",
  },
  textIsNull: {
    color: "black",
    fontSize: "18px",
    fontWeight: 500,
  },
  textButton: {
    color: "#fff",
    width: theme.spacing(30),
    padding: "10px",
    borderRadius: 50,
    fontWeight: 400,
    textTransform: "inherit",
    marginBottom: 4,
    "&:hover": {
      backgroundColor: "#1E94F8",
    },
  },
  textCons: {
    fontWeight: 350,
  },
  dataIsNull: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    marginTop: theme.spacing(7),
  },
}));
