import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import Button from "@material-ui/core/Button";
import auth from "./auth/auth-helper";
import { Link, useNavigate, useLocation } from "react-router-dom";

const isActive = (location, path) => {
  return {
    color: location.pathname === path ? "#C689C6" : "#ffffff",
  };
};

const Menu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSignOut = () => {
    auth.clearJWT(() => navigate("/"));
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit">
          CommunIT
        </Typography>
        <Link to="/">
          <IconButton aria-label="Home" style={isActive(location, "/")}>
            <HomeIcon />
          </IconButton>
        </Link>
        {!auth.isAuthenticated() && (
          <span>
            <Link to="/signup">
              <Button style={isActive(location, "/signup")}>Sign up</Button>
            </Link>
            <Link to="/signin">
              <Button style={isActive(location, "/signin")}>Sign In</Button>
            </Link>
          </span>
        )}
        {auth.isAuthenticated() && (
          <span>
            <Link to={`/user/${auth.isAuthenticated().user._id}`}>
              <Button
                style={isActive(
                  location,
                  `/user/${auth.isAuthenticated().user._id}`
                )}
              >
                My Profile
              </Button>
            </Link>
            <Button color="inherit" onClick={handleSignOut}>
              Sign out
            </Button>
          </span>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
