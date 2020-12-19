import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  pengikutTextField: {
    marginTop: theme.spacing(2),
    width: "20%",
  },
  input: {
    display: "none",
  },
  controlFileName: {
    color: theme.palette.primary.main,
  },
  controlFileError: {
    color: theme.palette.error.main,
  },
  insertButton: {
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));
