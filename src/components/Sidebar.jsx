import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  Tooltip,
} from "@mui/material";
import {
  Home,
  Settings,
  Dashboard as DashboardIcon,
  AccountCircle,
  Notifications,
  Mail,
  BarChart,
  HelpOutline,
  ExitToApp,
} from "@mui/icons-material";

const iconSidebarItems = [
  { icon: <Home sx={{ color: "gray", "&:hover": { color: "blue" } }} />, label: "Home" },
  { icon: <DashboardIcon sx={{ color: "gray", "&:hover": { color: "blue" } }} />, label: "Dashboard" },
  { icon: <AccountCircle sx={{ color: "gray", "&:hover": { color: "blue" } }} />, label: "Profile" },
  { icon: <Notifications sx={{ color: "gray", "&:hover": { color: "blue" } }} />, label: "Notifications" },
  { icon: <Mail sx={{ color: "gray", "&:hover": { color: "blue" } }} />, label: "Messages" },
  { icon: <BarChart sx={{ color: "gray", "&:hover": { color: "blue" } }} />, label: "Analytics" },
  { icon: <HelpOutline sx={{ color: "gray", "&:hover": { color: "blue" } }} />, label: "Help" },
  { icon: <Settings sx={{ color: "gray", "&:hover": { color: "blue" } }} />, label: "Settings" },
  { icon: <ExitToApp sx={{ color: "gray", "&:hover": { color: "blue" } }} />, label: "Logout" },
];

const Sidebar = ({ open, setOpen }) => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? 200 : 70,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 200 : 70,
          boxSizing: "border-box",
          backgroundColor: "white",
          color: "black",
        },
      }}
    >
      <List>
        {iconSidebarItems.map((item, index) => (
          <Tooltip
            title={!open ? item.label : ""}
            placement="right"
            key={index}
          >
            <ListItem button onClick={() => setOpen(!open)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              {open && <span>{item.label}</span>}
            </ListItem>
          </Tooltip>
        ))}
      </List>
       
    </Drawer>
  );
};

export default Sidebar;
