import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 300,
    color: theme.palette.grey.main,
  },
  detailText: {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  textIsEmpty: {
    color: theme.palette.grey.main,
    textDecoration: "none",
    cursor: "inherit",
    fontWeight: 550,
  },
}));
