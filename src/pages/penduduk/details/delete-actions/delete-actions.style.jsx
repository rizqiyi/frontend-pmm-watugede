import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  deleteButton: {
    background: theme.palette.error.main,
    color: "#fff",
    "&:hover": {
      background: theme.palette.error.main,
    },
  },
}));
