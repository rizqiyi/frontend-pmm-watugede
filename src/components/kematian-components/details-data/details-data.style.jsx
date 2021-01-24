import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 300,
    color: theme.palette.grey.main,
  },
  isEmpty: {
    color: theme.palette.grey.main,
    fontWeight: 550,
    textDecoration: "none",
    cursor: "inherit",
  },
  textLink: {
    color: theme.palette.primary.main,
    cursor: "pointer",
    textDecoration: "none",
  },
}));
