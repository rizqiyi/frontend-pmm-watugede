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
  controlTextLink: {
    maxWidth: "fit-content",
  },
  controlLink: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));
