import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
  textButton: {
    color: "#fff",
    width: theme.spacing(34),
    padding: "10px ",
    borderRadius: 50,
    fontWeight: 400,
    textTransform: "inherit",
    marginBottom: 4,
    "&:hover": {
      backgroundColor: "#1E94F8",
    },
  },
  dataIsNull: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    marginTop: theme.spacing(7),
  },
  textIsNull: {
    color: "black",
    fontSize: "18px",
    fontWeight: 500,
  },
  textCons: {
    fontWeight: 350,
  },
  mutasiButton: {
    color: "#fff",
    width: theme.spacing(15),
    marginTop: 20,
    padding: "10px ",
    borderRadius: 50,
    fontWeight: 400,
    textTransform: "inherit",
    marginBottom: 4,
    backgroundColor: theme.palette.warning.main,
    "&:hover": {
      backgroundColor: theme.palette.warning.main,
    },
  },
  downloadButton: {
    color: theme.palette.primary.main,
    width: theme.spacing(20),
    padding: "12px",
    borderRadius: 50,
    fontWeight: 400,
    marginRight: 20,
    backgroundColor: "#e1f5fe",
    textTransform: "inherit",
    "&:hover": {
      backgroundColor: "#e3f2fd",
    },
  },
  isLoading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
  },
}));
