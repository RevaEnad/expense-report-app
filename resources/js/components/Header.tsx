import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

interface HeaderProps {
  onLogoutClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogoutClick }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
         EXPENSE REPORT APP
        </Typography>
        <Button color="inherit" onClick={onLogoutClick}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
