import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  textPengusul: {
    fontWeight: 400,
  },
  textLink: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    fontSize: 14,
    fontWeight: 450,
    cursor: "pointer",
  },
}));
