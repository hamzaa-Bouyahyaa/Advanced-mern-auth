import React from "react";
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/user";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout()).then(() => navigate("/"));
  };

  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>
          <Typography
            variant="h5"
            component={Link}
            to="/"
            style={{ textDecoration: "none", color: "white" }}
          >
            Mern auth
          </Typography>
          <Box sx={{ ml: "auto" }}>
            <Tabs indicatorColor="secondary" textColor="inherit">
              {!user ? (
                <React.Fragment>
                  {" "}
                  <Tab LinkComponent={Link} to="/signup" label="Signup" />
                  <Tab LinkComponent={Link} to="/login" label="Login" />
                </React.Fragment>
              ) : (
                <Tab onClick={handleLogout} label="Logout" />
              )}
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
