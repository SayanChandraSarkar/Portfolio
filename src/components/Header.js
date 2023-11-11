import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Icon } from "@iconify/react";
import Menuicon from "../images/svg/menuIcon.svg";
import "../scss/Header.scss";

export const Header = () => {
  const [state, setState] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 767;
      setIsMobile(isMobile);
      if (!isMobile) {
        setState(false); // Hide the drawer on larger screens
      }
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsHeaderActive(true);
    } else {
      setIsHeaderActive(false);
    }
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {[
          "Home",
          "About",
          "Service",
          "Projects",
          "Experience",
          "Testimonial",
          "Contact",
        ].map((text, index) => {
          // Generate a unique id for each item
          const id = `section-${index + 1}`;

          // Scroll to the corresponding id when the item is clicked
          const scrollToSection = () => {
            const element = document.getElementById(id);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
            toggleDrawer(false)();
          };

          return (
            <ListItem key={id} disablePadding>
              <ListItemButton
                component={RouterLink}
                to={`#${id}`}
                onClick={scrollToSection}
              >
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider className="none" />
    </Box>
  );

  const renderDrawer = () => (
    <Drawer
      anchor="right"
      open={state}
      onClose={toggleDrawer(false)}
      className="drawer"
    >
      <div className="drawerImage">
        <img src="devfolioLogo.png" alt="portfolio" />
      </div>
      <div className="drawerBio">
        <p>
          Creating stunning digital experiences as a passionate web developer
          and designer
        </p>
      </div>
      <Divider />
      {list()}
      <div className="connecWithSocials">
        <div className="connect">Connect With Me</div>
        <div className="socialmediaIcons">
          <a
            href="https://www.instagram.com/sayansarkarrr/"
            target="_blank"
            rel="noreferrer "
          >
            <div className="Instagram icon">
              <Icon icon="skill-icons:instagram" />
            </div>
          </a>
          <a
            href="https://www.facebook.com/sayan.sarkar.9634340/"
            target="_blank"
            rel="noreferrer "
          >
            <div className="Facebook icon">
              <Icon icon="devicon:facebook" />
            </div>
          </a>
          <a
            href="https://twitter.com/CoderSledge?t=QnFLicjlEhszlHSafTYQlQ&s=09"
            target="_blank"
            rel="noreferrer"
          >
            <div className="Twitter icon">
              <Icon icon="devicon:twitter" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/sayansarkar002/"
            target="_blank"
            rel="noreferrer "
          >
            <div className="Linkedin icon">
              <Icon icon="devicon:linkedin" />
            </div>
          </a>
        </div>
      </div>
    </Drawer>
  );

  return (
    <>
      <header className={isHeaderActive ? "active" : ""}>
        <div className="headerLogoName">
          <img src="devfolioLogo.png" alt="portfolio" />
          {isMobile ? (
            <>
              <img
                src={Menuicon}
                alt="Menuicon"
                className="Menuicon"
                onClick={toggleDrawer(true)}
              />
              {renderDrawer()}
            </>
          ) : (
            // Render the list for laptop and larger screens
            <div className="section">{list()}</div>
          )}
        </div>
      </header>
    </>
  );
};
