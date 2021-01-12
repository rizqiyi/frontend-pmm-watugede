import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  controlImage: {
    width: "265px",
    height: "265px",
    objectFit: "cover",
    objectPosition: "center",
    borderRadius: 10,
  },
  header_number: {
    color: theme.palette.grey.main,
    textDecoration: "underline",
  },
  values_number: {
    fontWeight: 500,
    textDecoration: "underline",
  },
  header: {
    color: theme.palette.grey.main,
  },
  values: {
    fontWeight: 500,
  },
}));
