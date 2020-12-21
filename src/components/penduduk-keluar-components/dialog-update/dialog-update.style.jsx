import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  backButton: {
    color: "#8F8F8F",
    fontWeight: 500,
    border: "2px solid rgba(143, 143, 143, 0.5)",
    width: theme.spacing(11),
    marginRight: 10,
    padding: "10px",
    borderRadius: 50,
    textTransform: "inherit",
  },
  textField: {
    margin: theme.spacing(1),
    // marginRight: 10,
  },
  updateButton: {
    color: "#fff",
    width: theme.spacing(18),
    padding: "10px",
    borderRadius: 50,
    fontWeight: 400,
    textTransform: "inherit",
    "&:hover": {
      backgroundColor: "#1E94F8",
    },
  },
}));
