import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  backButton: {
    color: "#8F8F8F",
    fontWeight: 500,
    width: theme.spacing(14),
    padding: "10px",
    borderRadius: 50,
    border: "2px solid rgba(143, 143, 143, 0.5)",
    textTransform: "inherit",
  },
  downloadButton: {
    color: theme.palette.primary.main,
    width: theme.spacing(20),
    borderRadius: 50,
    fontWeight: 500,
    padding: "12px",
    backgroundColor: "#e1f5fe",
    textTransform: "inherit",
    "&:hover": {
      backgroundColor: "#e3f2fd",
    },
  },
  updateButton: {
    background: theme.palette.warning.main,
    color: "#fff",
    width: theme.spacing(27),
    padding: "12px",
    fontWeight: 500,
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      background: theme.palette.warning.main,
    },
  },
  insertButton: {
    background: theme.palette.primary.main,
    color: "#fff",
    width: theme.spacing(27),
    padding: "12px",
    fontWeight: 500,
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
}));
