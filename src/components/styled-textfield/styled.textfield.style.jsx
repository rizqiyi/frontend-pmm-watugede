import { fade, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid #e0e0e0",
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    outline: "none",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
    "&$focused": {
      backgroundColor: "#f5f5f5",
      boxShadow: `${fade(theme.palette.primary.main, 0.6)} 0 0 0 2px`,
    },
  },
  input: {
    "&.Mui-focused": {
      color: theme.palette.primary.main,
    },
  },
  focused: {},
}));
