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
  pendudukShape: {
    width: "27%",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: 250,
    color: "#fff",
    backgroundColor: "#329DF7",
  },
  pendudukMasukShape: {
    width: "27%",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: 250,
    color: "#fff",
    backgroundColor: "#6AB4F6",
  },
  pendudukKeluarShape: {
    width: "27%",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: 250,
    color: "#fff",
    backgroundColor: "#A4D4FF",
  },
  values: {
    fontWeight: "600",
    fontSize: 20,
  },
}));
