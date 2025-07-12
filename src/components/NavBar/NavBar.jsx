import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";


export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, width: "100vw" }}>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#17dcebff", boxShadow: 2 }}
      >
        <Toolbar variant="dense" sx={{ justifyContent: "center" }}>
          <Typography variant="h6" color="inherit">
            GoDaddy Repositories
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
