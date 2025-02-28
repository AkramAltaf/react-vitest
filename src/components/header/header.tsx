import { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="static" className={styles.navbar}>
        <Toolbar>
          <h1 className={styles.logo}>React+Vitest</h1>

          <div className={styles.navLinks}>
            <NavLink to="/" className={styles.navItem}>
              Home
            </NavLink>
            <NavLink to="/todos" className={styles.navItem}>
              Todos
            </NavLink>
          </div>

          <IconButton
            edge="end"
            color="inherit"
            className={styles.menuIcon}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
        <div className={styles.mobileMenu}>
          <IconButton
            onClick={handleDrawerToggle}
            className={styles.closeButton}
          >
            <CloseIcon />
          </IconButton>

          <List>
            <ListItem component={NavLink} to="/" onClick={handleDrawerToggle}>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              component={NavLink}
              to="/todos"
              onClick={handleDrawerToggle}
            >
              <ListItemText primary="Todos" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
