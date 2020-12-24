import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
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
  textLighten: {
    fontWeight: 300,
  },
  textCons: {
    fontWeight: 350,
    maxWidth: 350,
    textAlign: "center",
  },
  filterButton: {
    backgroundColor: theme.palette.secondary.main,
    width: "50px",
    height: "50px",
    marginLeft: 5,
    "&:hover": {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  textButton: {
    color: "#fff",
    width: theme.spacing(30),
    padding: "10px ",
    borderRadius: 50,
    fontWeight: 400,
    textTransform: "inherit",
    marginBottom: 4,
    "&:hover": {
      backgroundColor: "#1E94F8",
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
}));
