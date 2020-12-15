import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  controlEdit: {
    padding: "5px",
    color: theme.palette.warning.main,
  },
  controlDelete: {
    padding: "5px",
    color: theme.palette.error.main,
  },
  controlText: {
    whiteSpace: "normal",
    wordWrap: "break-word",
    maxWidth: "300px",
  },
  controlLink: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
}));
