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
  navBarIcon: {
    size: "large",
    edge: "start",
    marginRight: 2,
  },
  closeNavBarIcon: {
    size: "large",
    edge: "start",
    color: "black",
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
  navMenu: {
    height: "100vh",
    display: "flex",
    width: "250px",
    justifyContent: "center",
    position: "fixed",
    top: "0",
    zIndex: "9999",
    left: "-100%",
    transition: "850ms",
  },
  navMenuActive: {
    background: "white",
    height: "100vh",
    display: "flex",
    width: "250px",
    justifyContent: "center",
    position: "fixed",
    top: "0",
    zIndex: "9999",
    left: "0",
    transition: "350ms",
    boxShadow: "0 0 0 100vw rgba(0,0,0,.50)",
  },
  navText: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    padding: "8px 0px 8px 16px",
    height: "60px",
  },
  navMenuItems: {
    width: "100%",
  },
}));
