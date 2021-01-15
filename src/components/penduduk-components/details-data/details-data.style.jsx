import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 300,
    color: theme.palette.grey.main,
    marginBottom: 5,
  },
  value: {
    marginBottom: 30,
  },
  isFetching: {
    marginTop: 5,
    marginBottom: 30,
    width: "200px",
  },
  detailText: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    marginBottom: 30,
    cursor: "pointer",
  },
  detailTextEmpty: {
    marginBottom: 30,
  },
}));
