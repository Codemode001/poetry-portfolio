import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Header } from "components";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useSelector, useDispatch } from "react-redux";
import Brightness2Icon from "@mui/icons-material/Brightness2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";

import type { RootState } from "../../store/store";
import { updateValue } from "slices/slices";
import { Iam } from "components";
import { SayHi } from "components";
import { AboutMe } from "components";
import { Experience } from "components";
import { Footer } from "components";

type Anchor = "top" | "left" | "bottom" | "right";

const drawerStyle = {
  color: "white",
  fontFamily: "sans-serif",
  fontWeight: 600,
  letterSpacing: "2px",
  height: "25rem",
};

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(updateValue(theme === "dark" ? "light" : "dark"));
  }

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      style={{
        backgroundColor: "#0f1115",
      }}
    >
      <List style={drawerStyle}>
        <ListItem
          style={{ padding: "1rem 0 0 1.2rem" }}
          onClick={(event) => event.stopPropagation()}
        >
          {" "}
          {isDark ? (
            <motion.div
              whileTap={{
                rotate: 360,
                transition: { duration: 0.5 },
              }}
            >
              <WbSunnyIcon
                onClick={handleToggle}
                style={{ fontSize: "1.5rem" }}
                className="buttons-hover"
              />
            </motion.div>
          ) : (
            <motion.div
              whileTap={{
                rotate: 360,
                transition: { duration: 0.5 },
              }}
            >
              <Brightness2Icon
                onClick={handleToggle}
                style={{ fontSize: "1.5rem" }}
                className="buttons-hover"
              />
            </motion.div>
          )}
        </ListItem>

        <div className="drawer-design-container">
          <div className="socials-drawer">
            <a href="https://www.facebook.com/harold.pisos.9" target="_blank">
              <ListItem>
                <FacebookIcon className="drawer-icons" />
                <div className="list-items-desc">FACEBOOK</div>
              </ListItem>
            </a>
            <a href="https://www.instagram.com/haroldpisos/" target="_blank">
              <ListItem>
                <InstagramIcon className="drawer-icons" />
                <div className="list-items-desc">INSTAGRAM</div>
              </ListItem>
            </a>
            <a href="https://twitter.com/RheyHarolld" target="_blank">
              <ListItem>
                <TwitterIcon className="drawer-icons" />
                <div className="list-items-desc">TWITTER</div>
              </ListItem>
            </a>
            <ListItem
              style={{
                margin: "1.5rem 0 0 0",
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <SayHi />
            </ListItem>
          </div>
          <ListItem>
            <img
              src="write.png"
              style={{
                width: "10rem",
                height: "10rem",
                position: "absolute",
                top: 20,
                left: 40,
              }}
            />
          </ListItem>
        </div>
      </List>
    </Box>
  );

  useEffect(() => {
    if (theme === "light") {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
    document.body.style.backgroundColor =
      theme === "dark" ? "var(--dark-background)" : "white";
  }, [theme]);

  return (
    <MainContainer>
      <HeaderContainer className="main-header-container">
        <Header isDark={isDark} />
        <SocialIcons
          style={
            isDark ? { color: "white" } : { color: "var(--dark-background)" }
          }
        >
          <Fade>
            <a
              href="https://www.facebook.com/harold.pisos.9"
              target="_blank"
              style={
                isDark
                  ? { color: "white" }
                  : { color: "var(--dark-background)" }
              }
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="social-icons"
              >
                FACEBOOK
              </motion.div>
            </a>
            <a
              href="https://www.instagram.com/haroldpisos/"
              target="_blank"
              style={
                isDark
                  ? { color: "white" }
                  : { color: "var(--dark-background)" }
              }
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="social-icons"
              >
                INSTAGRAM
              </motion.div>
            </a>
            <a
              href="https://twitter.com/RheyHarolld"
              target="_blank"
              style={
                isDark
                  ? { color: "white" }
                  : { color: "var(--dark-background)" }
              }
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                className="social-icons"
              >
                TWITTER
              </motion.div>
            </a>
          </Fade>
          {/* <div className="social-icons">GMAIL</div> */}
          {/* <div className="social-icons">DEVELOPER MODE</div> */}
        </SocialIcons>
        <MenuContainer>
          {(["top"] as const).map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <MenuIcon
                  style={
                    isDark
                      ? { color: "white" }
                      : { color: "var(--dark-background)" }
                  }
                />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                BackdropProps={{
                  style: { opacity: 0 },
                }}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </MenuContainer>
        <HeaderButtonsContainer
          style={isDark ? { color: "white" } : { color: "black" }}
        >
          <SayHiMediaQuery>
            <SayHi />
          </SayHiMediaQuery>
          {isDark ? (
            <motion.div
              whileTap={{
                rotate: 360,
                transition: { duration: 0.5 },
              }}
            >
              <WbSunnyIcon
                onClick={handleToggle}
                style={{ fontSize: "1.5rem" }}
                className="buttons-hover"
              />
            </motion.div>
          ) : (
            <motion.div
              whileTap={{
                rotate: 360,
                transition: { duration: 0.5 },
              }}
            >
              <Brightness2Icon
                onClick={handleToggle}
                style={{ fontSize: "1.5rem" }}
                className="buttons-hover"
              />
            </motion.div>
          )}
        </HeaderButtonsContainer>
      </HeaderContainer>
      <Iam isDark={isDark} />
      <AboutMe isDark={isDark} />
      <Experience isDark={isDark} />
      <Footer isDark={isDark} />
    </MainContainer>
  );
}

const SayHiMediaQuery = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuContainer = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  align-items: center;
  width: 28rem;
  justify-content: space-around;
  font-size: 1.1rem;
  font-family: sans-serif;
  letter-spacing: 1.5px;
  margin: 0 0 0 12rem;

  @media (max-width: 768px) {
    display: none;
  }

  & .social-icons {
    position: relative;
    display: inline-block;
    transition: border-bottom-color 0.3s ease-in-out;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 2px;
    &:hover {
      cursor: pointer;
      // border-bottom: 1px solid purple;
      &::after {
        content: "";
        position: absolute;
        bottom: -1px;
        left: 50%;
        width: 0;
        height: 1px;
        background-color: purple;
        transition: width 0.6s ease-in-out;
        transform: translateX(-50%);
      }
    }
  }
`;

const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 13rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  // background-color: gray;

  height: 5rem;
  backdrop-filter: blur(8px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  transition: 0.6s;
  z-index: 20;

  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

const MainContainer = styled.div`
  height: 100%;
  position: relative;
  margin-top: 15rem;

  & .buttons-hover {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
