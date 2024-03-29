import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  controlInput: {
    margin: "10px 0px",
    width: theme.spacing(40),
  },
  controlInputDate: {
    margin: "12px 0px 20px 2px",
    width: theme.spacing(40),
  },
  fontCons: {
    color: theme.palette.grey.main,
    fontSize: 13,
  },
  cancelButton: {
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
    width: theme.spacing(16),
    padding: "11px",
    fontWeight: 500,
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
}));
