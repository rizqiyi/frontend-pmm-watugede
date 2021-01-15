import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: theme.spacing(40),
  },
  spacingText: {
    letterSpacing: 1,
    fontSize: 22,
    marginLeft: 7,
    fontWeight: 600,
  },
  cancelButton: {
    color: "#8F8F8F",
    fontWeight: 500,
    border: "2px solid rgba(143, 143, 143, 0.5)",
    width: theme.spacing(14),
    padding: "10px",
    borderRadius: 50,
    textTransform: "inherit",
  },
  filterButton: {
    background: theme.palette.primary.main,
    color: "#fff",
    width: theme.spacing(13),
    padding: "12px",
    fontWeight: 500,
    borderRadius: 50,
    textTransform: "inherit",
    "&:hover": {
      background: theme.palette.primary.main,
    },
  },
}));
