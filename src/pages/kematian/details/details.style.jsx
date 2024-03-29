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
  seeButton: {
    color: "#fff",
    fontWeight: 500,
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(14),
    padding: "6px",
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
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
}));
