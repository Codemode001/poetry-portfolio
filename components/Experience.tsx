import React from "react";
import styled from "@emotion/styled";

import { ThemeProps } from "types/types";

const Experience = ({ isDark }: ThemeProps) => {
  return (
    <MainContainer
      style={isDark ? { color: "white" } : { color: "var(--dark-background)" }}
    >
      <ExperienceText>PROJECTS</ExperienceText>
    </MainContainer>
  );
};

const ExperienceText = styled.div`
  font-size: 3rem;
  font-family: var(--formal-font);
  font-weight: 600;
  letter-spacing: 3px;
`;

const MainContainer = styled.div`
  padding: 2rem;
`;

export default Experience;
