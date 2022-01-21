import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import GroupsIcon from "@mui/icons-material/Groups";

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
