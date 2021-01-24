import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  cardHeader: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: "10px 10px 0px 0px",
  },
  textHeader: {
    color: "#fff",
  },
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
    fontWeight: 600,
    marginTop: 5,
  },
  backButton: {
    color: "#8F8F8F",
    fontWeight: 500,
    width: theme.spacing(14),
    padding: "10px",
    borderRadius: 50,
    border: "2px solid rgba(143, 143, 143, 0.5)",
    textTransform: "inherit",
  },
  insertButton: {
    background: theme.palette.primary.main,
    color: "#fff",
    width: theme.spacing(25),
    padding: "12px",
    fontWeight: 500,
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
  downloadButton: {
    color: theme.palette.primary.main,
    width: theme.spacing(20),
    padding: "12px",
    fontWeight: 500,
    marginLeft: 15,
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      backgroundColor: "#e3f2fd",
    },
  },
  goToButton: {
    color: theme.palette.primary.main,
    width: theme.spacing(27),
    padding: "12px",
    fontWeight: 500,
    marginLeft: 15,
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      backgroundColor: "#e3f2fd",
    },
  },
  deleteButton: {
    background: theme.palette.error.main,
    color: "#fff",
    width: theme.spacing(24),
    padding: "11px",
    fontWeight: 500,
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      background: theme.palette.error.main,
    },
  },
  header: {
    color: theme.palette.grey.main,
  },
  values: {
    fontWeight: 500,
  },
}));
