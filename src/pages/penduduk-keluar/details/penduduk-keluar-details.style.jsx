import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  textLink: {
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
  updateButton: {
    color: "#fff",
    width: theme.spacing(25),
    padding: "10px",
    borderRadius: 50,
    fontWeight: 400,
    textTransform: "inherit",
    "&:hover": {
      backgroundColor: "#1E94F8",
    },
    [theme.breakpoints.down("md")]: {
      width: theme.spacing(20),
    },
  },
  deleteIconButton: {
    color: theme.palette.error.main,
    "&:hover": {
      background: "#ffebee",
    },
  },
  editIconButton: {
    color: theme.palette.primary.main,
    marginRight: "10px",
    "&:hover": {
      background: "#e1f5fe",
    },
  },
  deleteButton: {
    background: theme.palette.error.main,
    color: "#fff",
    width: theme.spacing(25),
    padding: "10px",
    fontWeight: 400,
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      background: theme.palette.error.main,
    },
    [theme.breakpoints.down("md")]: {
      width: theme.spacing(20),
    },
  },
}));
