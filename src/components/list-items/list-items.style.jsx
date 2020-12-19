import { withStyles } from "@material-ui/core/styles";
import MuiListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  selectedIcons: {
    color: "#fff",
  },
  itemText: {
    textDecoration: "none",
    color: "black",
  },
  selectedBorderRadiusNested: {
    paddingLeft: theme.spacing(4),
  },
  controlText: {
    marginLeft: theme.spacing(2),
    fontWeight: 500,
  },
  controlFont: {
    fontWeight: 350,
  },
  selectedBorderRadius: {
    borderRadius: 20,
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
    borderRadius: 20,
    "&$selected": {
      backgroundColor: "#329DF7",
      borderRadius: 20,
    },
    "&$selected:hover": {
      backgroundColor: "#1E94F8",
      borderRadius: 20,
    },
    "&:hover": {
      backgroundColor: "#DAEFF7",
    },
  },
  selected: {},
})(MuiListItem);
