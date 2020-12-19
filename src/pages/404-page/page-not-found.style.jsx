import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  imageSize: {
    width: theme.spacing(50),
    height: "auto",
  },
  backButton: {
    width: theme.spacing(20),
    borderRadius: theme.spacing(10),
    padding: theme.spacing(1.1),
    textTransform: "inherit",
    fontWeight: 350,
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));
