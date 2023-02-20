import React, { useState } from "react";
import styled from "@emotion/styled";
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";
import Grid from "@mui/material/Grid";
import { FaGuitar, FaDrum, FaMusic } from "react-icons/fa";

import { ThemeProps } from "types/types";

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-100px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const customAnimationRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(50px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const customAnimationUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 50px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const AboutMe = ({ isDark }: ThemeProps) => {
  const [isActive, setIsActive] = useState(true);
  const [otherSkills, setOtherSkills] = useState(false);

  return (
    <MainContainer
      style={isDark ? { color: "white" } : { color: "var(--dark-background)" }}
      className="about-me-main-container"
    >
      <Fade duration={1300} triggerOnce={true}>
        <AboutMeText className="aboutme-text">ABOUT ME</AboutMeText>
      </Fade>
      <AboutMeContentContainer>
        <Fade duration={1300} triggerOnce={true}>
          <TwinButton>
            <Button
              style={{
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
                backgroundColor: isActive
                  ? "var(--purple)"
                  : "var(--darker-color)",
              }}
              onClick={() => {
                setIsActive(true);
                setOtherSkills(false);
              }}
            >
              Know me more
            </Button>
            <Button
              style={{
                borderTopRightRadius: "10px",
                borderBottomRightRadius: "10px",
                backgroundColor: isActive
                  ? "var(--darker-color)"
                  : "var(--purple)",
              }}
              onClick={() => {
                setIsActive(false);
                setOtherSkills(true);
              }}
            >
              Other Skills
            </Button>
          </TwinButton>
        </Fade>
        {!otherSkills ? (
          <Grid container style={{ width: "100%" }}>
            <Grid
              item
              md={6}
              xs={12}
              className="center-grid"
              style={{ width: "100%", backgroundColor: "gray" }}
            >
              <Reveal
                keyframes={customAnimation}
                duration={500}
                triggerOnce={true}
                className="aboutme-image"
                style={{ width: "100%" }}
              >
                <Fade duration={1000} triggerOnce={true}>
                  <Image src="normal.png" />
                </Fade>
              </Reveal>
            </Grid>
            <Grid item md={6} xs={12}>
              <Reveal keyframes={customAnimationRight} triggerOnce={true}>
                <Fade duration={1000} triggerOnce={true}>
                  <AboutMeContent className="aboutme-content">
                    <h1 className="aboutme-content-h1">
                      Spoken word poet | Fullstack developer
                    </h1>
                    <p className="aboutme-content-p">
                      Greetings, I'm Harold, a spoken word poet and fullstack
                      web developer who believes that art and technology can
                      coexist in perfect harmony. As a poet, I excel at crafting
                      compelling stories and conveying powerful emotions through
                      carefully chosen words. With my skillful use of language
                      and keen sense of rhythm, I can capture audiences and hold
                      them spellbound. I bring this same level of artistry to my
                      work as a fullstack web developer, where I use my
                      expertise to design and build websites and web
                      applications that are both aesthetically pleasing and
                      highly functional. My attention to detail and commitment
                      to delivering quality results enable me to consistently
                      exceed client expectations. So, whether I'm performing on
                      stage or in front of my computer, I'm always striving to
                      find the perfect balance between my creative and logical
                      sides.
                    </p>
                  </AboutMeContent>
                </Fade>
              </Reveal>
            </Grid>
          </Grid>
        ) : (
          <Fade duration={1000}>
            <OtherSkillsContainer>
              <Grid container>
                <Grid
                  item
                  xs={12}
                  md={6}
                  className="center-grid"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Reveal
                    keyframes={customAnimationUp}
                    triggerOnce={true}
                    className="skills-card"
                  >
                    <LargeCard className="largeCard-skills">
                      <h2>Drumming</h2>
                      <p>
                        <FaDrum style={{ margin: "0 5px 0 0 " }} /> I've been
                        playing drums since 2020
                      </p>
                      <p> This video is from 2022</p>
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
                          <FaMusic />
                        </h2>
                        <hr
                          style={{
                            width: "100%",
                            border: "1px solid #6a6e75",
                            marginLeft: "10px",
                          }}
                        />
                      </div>
                      {/* <GIF src="dec 31, 2022 - Trim.gif" /> */}
                      <Vid autoPlay loop muted>
                        <source src="drum.mp4" type="video/mp4" />
                      </Vid>
                    </LargeCard>
                  </Reveal>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  className="center-grid"
                  style={{
                    display: "flex",
                    justifyContent: "center",

                    padding: 0,
                  }}
                >
                  <Reveal
                    keyframes={customAnimationUp}
                    delay={500}
                    triggerOnce={true}
                    className="skills-card"
                  >
                    <LargeCard className="largeCard-skills">
                      <h2>Playing Guitar</h2>
                      <div>
                        <p>
                          <FaGuitar style={{ margin: "0 5px 0 0 " }} /> I've
                          been playing guitar since 2016
                        </p>
                        <p> This video is from 2018</p>
                      </div>
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
                          <FaMusic />
                        </h2>
                        <hr
                          style={{
                            width: "100%",
                            border: "1px solid #6a6e75",
                            marginLeft: "10px",
                          }}
                        />
                      </div>
                      {/* <GIF src="Harold - Trim - Trim.gif" /> */}
                      <Vid autoPlay loop muted>
                        <source src="guitar.mp4" type="video/mp4" />
                      </Vid>
                    </LargeCard>
                  </Reveal>
                </Grid>
              </Grid>
            </OtherSkillsContainer>
          </Fade>
        )}
      </AboutMeContentContainer>
    </MainContainer>
  );
};

const Vid = styled.video`
  width: 100%;
  border-radius: 10px;
`;
const LargeCard = styled.div`
  & .lower-hobby-desc {
    margin: 1rem 0 2rem 0;
  }
  & h2 {
    letter-spacing: 3px;
  }
  & p {
    color: #6f7175;
    margin-top: 5px;
  }
  background-color: var(--darker-color);

  border-radius: 10px;
  padding: 5rem 3rem 0 3rem;
  font-family: var(--formal-font);
  margin-top: 2rem;
`;

const OtherSkillsContainer = styled.div`
  margin: 5rem 0 0 0;
`;

const AboutMeContent = styled.div`
  & h1 {
    font-family: var(--prof-font);
    letter-spacing: 2px;
  }

  & p {
    font-family: var(--prof-font);
    margin: 1.5rem 0 0 0;
    line-height: 1.4rem;
    letter-spacing: 1px;
    color: #c7c8c8;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 25rem;
`;

const Button = styled.button`
  width: 12rem;
  height: 3.3rem;
  font-size: 1rem;
  font-family: var(--formal-font);
  font-weight: 800;
  color: white;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    cursor: pointer;
  }
`;

const TwinButton = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0 4rem 0;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const AboutMeContentContainer = styled.div`
  //   margin: 15rem 0 0 0;
  // background-color: gray;
  width: 100%;
`;

const AboutMeText = styled.div`
  font-size: 3rem;
  font-family: var(--semi-formal);
  font-weight: 600;
  letter-spacing: 3px;
`;

const MainContainer = styled.div`
  position: relative;
`;

export default AboutMe;
