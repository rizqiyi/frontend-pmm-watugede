import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: "none",
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
}));
