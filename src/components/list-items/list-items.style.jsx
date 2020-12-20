import { withStyles } from "@material-ui/core/styles";
import MuiListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  controlIcons: {
    color: theme.palette.grey.text,
    fontWeight: 500,
    fontSize: "14px",
  },
  itemText: {
    textDecoration: "none",
    color: "black",
  },
  controlText: {
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
  controlFont: {
    fontWeight: 350,
  },
  selectedText: {
    color: "#fff",
  },
  textVillage: {
    paddingRight: theme.spacing(4),
  },
}));

export const ListItem = withStyles({
  root: {
    borderRadius: 50,
    width: "auto",
    height: 50,
    marginTop: 5,
    "&$selected": {
      backgroundColor: "#DAEFF7",
      borderRadius: 50,
    },
    "&$selected:hover": {
      backgroundColor: "#DAEFF7",
      borderRadius: 50,
    },
    "&:hover": {
      backgroundColor: "none",
    },
  },
  selected: {},
})(MuiListItem);
