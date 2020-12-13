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
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "#ede7f6",
    },
    "&$selected:hover": {
      backgroundColor: "#d1c4e9",
    },
    "&:hover": {
      backgroundColor: "#ede7f6",
    },
  },
  selected: {},
})(MuiListItem);
