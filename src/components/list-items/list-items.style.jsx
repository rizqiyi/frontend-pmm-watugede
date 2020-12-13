import { withStyles } from "@material-ui/core/styles";
import MuiListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  selectedIcons: {
    color: "#673ab7",
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
    borderBottom: "3px solid black",
  },
}));

export const ListItem = withStyles({
  root: {
    borderRadius: 20,
    "&$selected": {
      backgroundColor: "#ede7f6",
      borderRadius: 20,
    },
    "&$selected:hover": {
      backgroundColor: "#d1c4e9",
      borderRadius: 20,
    },
    // "&:hover": {
    //   backgroundColor: "#ede7f6",
    // },
  },
  selected: {},
})(MuiListItem);
