import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  textLink: {
    color: theme.palette.info.main,
    cursor: "pointer",
  },
  updateButton: {
    color: "#fff",
    borderRadius: theme.spacing(13),
    width: theme.spacing(20),
    textTransform: "inherit",
    padding: theme.spacing(1.2),
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
  deleteButton: {
    color: "#fff",
    backgroundColor: theme.palette.error.main,
    borderRadius: theme.spacing(13),
    width: theme.spacing(20),
    textTransform: "inherit",
    padding: theme.spacing(1.2),
    "&:hover": {
      backgroundColor: theme.palette.error.main,
    },
  },
}));
