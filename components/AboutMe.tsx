import React, { useState } from "react";
import styled from "@emotion/styled";
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";
import Grid from "@mui/material/Grid";

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

const AboutMe = ({ isDark }: ThemeProps) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <MainContainer
      style={isDark ? { color: "white" } : { color: "var(--dark-background)" }}
    >
      <Fade duration={1300} triggerOnce={true}>
        <AboutMeText>ABOUT ME</AboutMeText>
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
              onClick={() => setIsActive(true)}
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
              onClick={() => setIsActive(false)}
            >
              Other Skills
            </Button>
          </TwinButton>
        </Fade>
        <Grid container>
          <Grid item md={6} xs={12}>
            <Reveal
              keyframes={customAnimation}
              duration={500}
              triggerOnce={true}
            >
              <Fade duration={1000} triggerOnce={true}>
                <Image src="normal.png" />
              </Fade>
            </Reveal>
          </Grid>
          <Grid item md={6} xs={12}>
            <Reveal keyframes={customAnimationRight} triggerOnce={true}>
              <Fade duration={1000} triggerOnce={true}>
                <AboutMeContent>
                  <h1>Spoken word poet | Fullstack developer</h1>
                  <p>
                    Greetings, I'm Harold, a spoken word poet and fullstack web
                    developer who believes that art and technology can coexist
                    in perfect harmony. As a poet, I excel at crafting
                    compelling stories and conveying powerful emotions through
                    carefully chosen words. With my skillful use of language and
                    keen sense of rhythm, I can capture audiences and hold them
                    spellbound. I bring this same level of artistry to my work
                    as a fullstack web developer, where I use my expertise to
                    design and build websites and web applications that are both
                    aesthetically pleasing and highly functional. My attention
                    to detail and commitment to delivering quality results
                    enable me to consistently exceed client expectations. So,
                    whether I'm performing on stage or in front of my computer,
                    I'm always striving to find the perfect balance between my
                    creative and logical sides.
                  </p>
                </AboutMeContent>
              </Fade>
            </Reveal>
          </Grid>
        </Grid>
      </AboutMeContentContainer>
    </MainContainer>
  );
};

const Section = styled.div``;

const AboutMeContent = styled.div`
  & h1 {
    font-family: var(--prof-font);
    font-size: 1.5rem;
    letter-spacing: 2px;
  }

  & p {
    font-family: var(--prof-font);
    margin: 1.5rem 0 0 0;
    line-height: 1.4rem;
    letter-spacing: 1px;
    color: #c7c8c8;
    font-size: 0.9rem;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 25rem;
  padding: 0 0 0 3rem;
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
  width: 38rem;
  border-radius: 10px;
`;

const AboutMeContentContainer = styled.div`
  //   margin: 15rem 0 0 0;
`;

const AboutMeText = styled.div`
  font-size: 3rem;
  font-family: var(--formal-font);
  font-weight: 600;
  letter-spacing: 3px;
`;

const MainContainer = styled.div`
  margin-top: 10rem;
  padding: 2rem;
  position: relative;
`;

export default AboutMe;
