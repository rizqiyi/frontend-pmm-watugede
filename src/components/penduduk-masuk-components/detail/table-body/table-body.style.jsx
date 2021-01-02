import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  controlEdit: {
    textTransform: "inherit",
  },
  controlDelete: {
    padding: "5px",
    color: theme.palette.error.main,
    textTransform: "inherit",
    "&:hover": {
      background: theme.palette.error.light,
    },
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
  tableBodyStyle: {
    backgroundColor: "#fff3e0",
  },
}));
