import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    height: "124px",
    display: "flex",
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "left",
    background: "linear-gradient(45deg, #7ec9ec 50%, #4b76ec 70% 100%)",
  },
  navbarIcon: {
    size: "large",
    edge: "start",
    marginRight: 2,
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  pageName: {
    flexGrow: 1,
  },
}));
