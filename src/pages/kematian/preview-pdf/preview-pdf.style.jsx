import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
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
    width: theme.spacing(18),
    padding: "6px",
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));