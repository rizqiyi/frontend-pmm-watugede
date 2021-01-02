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
  warningChip: {
    color: "#fff",
    background: theme.palette.warning.main,
  },
  succesChip: {
    color: "#fff",
    background: "#66bb6a",
  },
}));
