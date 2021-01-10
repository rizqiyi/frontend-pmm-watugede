import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  greetingCard: {
    marginTop: "1.8rem",
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(to right, #329DF7, #3DDEED)",
    boxShadow:
      "0 4px 6px 0 rgba(0, 0, 0, 0.1), 0 3px 20px 0 rgba(0, 0, 0, 0.19)",
    borderRadius: 10,
  },
}));
