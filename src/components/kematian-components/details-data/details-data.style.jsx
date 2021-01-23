import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 300,
    color: theme.palette.grey.main,
  },
  textLink: {
    color: theme.palette.primary.main,
    cursor: "pointer",
    textDecoration: "none",
  },
}));
