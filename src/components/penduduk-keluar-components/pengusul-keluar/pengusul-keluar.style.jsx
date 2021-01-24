import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  header: {
    color: theme.palette.grey.main,
  },
  values: {
    fontWeight: 500,
  },
  textLink: {
    fontWeight: 500,
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  isEmpty: {
    fontWeight: 500,
    textDecoration: "none",
    color: "inherit",
    cursor: "inherit",
  },
}));
