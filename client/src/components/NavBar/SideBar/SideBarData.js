import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const NavMenuData = [
  {
    title: "Ongoing Tasks",
    path: "/",
    icon: <AssignmentLateIcon />,
  },
  {
    title: "Completed Tasks",
    path: "/completed",
    icon: <AssignmentTurnedInIcon />,
  },
];
export default NavMenuData;
