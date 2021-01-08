import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
  backButton: {
    color: "#8F8F8F",
    fontWeight: 500,
    width: theme.spacing(14),
    padding: "8px",
    borderRadius: 50,
    fontSize: 12,
    border: "2px solid rgba(143, 143, 143, 0.5)",
    textTransform: "inherit",
  },
  insertButton: {
    background: theme.palette.primary.main,
    color: "#fff",
    width: theme.spacing(15),
    fontSize: 12,
    padding: "10px",
    fontWeight: 500,
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
}));
