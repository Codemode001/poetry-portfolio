import React, { useState } from "react";
import styled from "@emotion/styled";
import { Fade } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";

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

const AboutMe = ({ isDark }: ThemeProps) => {
  const [isActive, setIsActive] = useState(true);
  return (
    <MainContainer
      style={isDark ? { color: "white" } : { color: "var(--dark-background)" }}
    >
      <Fade duration={1300} triggerOnce={true}>
        <AboutMeText>ABOUT ME</AboutMeText>
      </Fade>
      <AboutMeContent>
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
        <Reveal keyframes={customAnimation} duration={500}>
          <Fade duration={1000}>
            <Image src="normal.png" />
          </Fade>
        </Reveal>
      </AboutMeContent>
    </MainContainer>
  );
};

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

const AboutMeContent = styled.div`
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
