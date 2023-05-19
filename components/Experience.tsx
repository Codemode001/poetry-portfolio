import React, { useState } from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { Zoom } from "react-awesome-reveal";

import { ThemeProps } from "types/types";
import data from "../data/data.json";
import DeveloperMode from "./DeveloperMode";

const normalize = data[0].projects;

const Experience = ({ isDark }: ThemeProps) => {
  const [developerMode, setDeveloperMode] = useState(false);

  return (
    <MainContainer
      style={isDark ? { color: "white" } : { color: "var(--dark-background)" }}
      className="projects-mainContainer"
    >
      <ModeContainer>
        <ExperienceText>PROJECTS</ExperienceText>
        <motion.div
          whileTap={{ marginBottom: "1rem" }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <DeveloperModeButton onClick={() => setDeveloperMode(!developerMode)}>
            Developer Mode
          </DeveloperModeButton>
        </motion.div>
      </ModeContainer>
      {developerMode ? (
        <DeveloperMode />
      ) : (
        <Fade duration={2000}>
          {normalize.map((item) => (
            <div className="perProjects-container" key={item.title}>
              {/* <Zoom triggerOnce={true}> */}
              <PerProjects>
                <h1>{item.id}</h1>
                <Grid container>
                  <Grid item md={6} xs={12}>
                    <PerImage>
                      <Image src={item.image} />
                    </PerImage>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <PerInfo className="exp-perinfo">
                      <h2>{item.title}</h2>
                      <p>{item.desc}</p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "20px 0 1rem 0",
                        }}
                      >
                        <hr
                          style={{
                            width: "100%",
                            border: "1px solid #6a6e75",
                            marginRight: "10px",
                          }}
                        />
                        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
                          view
                        </h2>
                        <hr
                          style={{
                            width: "100%",
                            border: "1px solid #6a6e75",
                            marginLeft: "10px",
                          }}
                        />
                      </div>
                      <a href={item.youtube} target="_blank">
                        <div className="icons-section">
                          <YouTubeIcon
                            style={{
                              fontSize: "3rem",
                              color: isDark ? "white" : "black",
                            }}
                          />
                        </div>
                      </a>
                    </PerInfo>
                  </Grid>
                </Grid>
              </PerProjects>
              {/* </Zoom> */}
            </div>
          ))}
        </Fade>
      )}
    </MainContainer>
  );
};

const DeveloperModeButton = styled.button`
  margin: 0 0 0 2rem;
  height: 2rem;
  background-color: #ececec;
  border-radius: 10px;
  transition: ease-in-out 0.2s;

  &:hover {
    background-color: #ffd700;
    cursor: pointer;
  }
`;

const ModeContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 22rem;
  border-radius: 10px;
  object-fit: cover;
  margin: 0 0 3rem 0;
`;

const PerInfo = styled.div`
  & .icons-section {
    display: flex;
    justify-content: center;
  }
  & h2 {
    font-family: var(--casual-font);
    font-size: 2rem;
    letter-spacing: 2px;
  }

  & p {
    font-size: 1rem;
    letter-spacing: 1.2px;
    font-family: var(--formal-font);
    color: var(--dark-text);
    margin: 2rem 0 5rem 0;
  }
  // background-color: tomato;
  height: 100%;
`;

const PerImage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const PerProjects = styled.div`
  margin: 7rem 0 8rem 0;
  // position: relative;
  width: 100%;
  height: 100%;
  display: flex;

  // padding: 5rem 0 0 0;

  & h1 {
    font-size: 12rem;
    color: #6f7175;
    position: absolute;
    left: -3rem;
    top: 0;
    z-index: -99;
  }
`;

const ExperienceText = styled.div`
  font-size: 3rem;
  font-family: var(--semi-formal);
  font-weight: 600;
  letter-spacing: 3px;
`;

const MainContainer = styled.div`
  margin-top: 10rem;

  & .perProjects-container {
    display: flex;
    position: relative;
  }
`;

export default Experience;
