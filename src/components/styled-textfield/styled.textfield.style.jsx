import { fade, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    // border: "1px solid #e0e0e0",
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
      boxShadow: `${fade(theme.palette.info.main, 0.6)} 0 0 0 2px`,
    },
  },
  input: {
    "&.Mui-focused": {
      color: theme.palette.info.main,
    },
  },
  focused: {},
}));

export const useStylesSearchField = makeStyles((theme) => ({
  search: {
    position: "relative",
    backgroundColor: fade(theme.palette.grey.main, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.grey.main, 0.25),
    },
    marginLeft: 0,
    width: "30%",
    borderRadius: 50,
  },
  searchIcon: {
    padding: theme.spacing(2, 3, 1, 1.5),
    height: "90%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  closeIcon: {
    padding: theme.spacing(2, 3, 1.2, 1.5),
    height: "90%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    right: 0,
    zIndex: 100,
    cursor: "pointer",
  },
  inputRoot: {
    color: theme.palette.grey.main,
  },
  inputInput: {
    padding: theme.spacing(2, 3, 2, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));
