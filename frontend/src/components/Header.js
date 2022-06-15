import React, { useState } from "react";
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h5">Mern auth</Typography>
          <Box sx={{ ml: "auto" }}>
            <Tabs
              indicatorColor="secondary"
              value={value}
              onChange={(_, val) => setValue(val)}
              textColor="inherit"
            >
              <Tab LinkComponent={Link} to="/signup" label="Signup" />
              <Tab LinkComponent={Link} to="/login" label="Login" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
