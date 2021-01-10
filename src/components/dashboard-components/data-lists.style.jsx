import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 400,
    fontSize: 14,
    color: theme.palette.grey.main,
  },
  values: {
    fontWeight: 550,
  },
}));
