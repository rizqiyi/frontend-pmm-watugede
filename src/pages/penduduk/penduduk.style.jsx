import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
    boxShadow: "none",
  },
  table: {
    minWidth: 750,
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
    width: theme.spacing(26),
    padding: "10px",
    borderRadius: 50,
    fontWeight: 400,
    textTransform: "inherit",
    marginBottom: 4,
    "&:hover": {
      backgroundColor: "#1E94F8",
    },
  },
  textIsNull: {
    color: "black",
    fontSize: "18px",
    fontWeight: 500,
  },
  textCons: {
    fontWeight: 350,
  },
  container: {
    marginTop: theme.spacing(13),
  },
  controlButton: {
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
  controlEdit: {
    padding: "5px",
    color: theme.palette.warning.main,
  },
  controlDelete: {
    padding: "5px",
    color: theme.palette.error.main,
  },
  textContainer: {
    display: "block",
    width: "200px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  controlText: {
    whiteSpace: "normal",
    wordWrap: "break-word",
    maxWidth: "300px",
  },
  snackbar: {
    [theme.breakpoints.down("xs")]: {
      bottom: 70,
    },
  },
  controlAlert: {
    color: theme.palette.success.main,
    [theme.breakpoints.down("xs")]: {
      background: theme.palette.primary.main,
    },
  },
  dataIsNull: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto",
    marginTop: theme.spacing(7),
  },
  filterButton: {
    width: "50px",
    height: "50px",
    color: theme.palette.primary.main,
    marginLeft: 5,
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
