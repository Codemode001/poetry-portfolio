import React from "react";
import styled from "@emotion/styled";

import { ThemeProps } from "types/types";

//passed the isDark prop to know what is the chosen theme of the user

const Header = ({ isDark }: ThemeProps) => {
  return (
    <Main style={isDark ? { color: "white" } : { color: "black" }}>
      <img alt="HaroldPisos" src="tehe.png" style={{ width: 65, height: 60 }} />
      <h2>HaroldPisos.</h2>
    </Main>
  );
};

export default Header;

const Main = styled.div`
  display: flex;
  align-items: center;
  & h2 {
    font-family: var(--fat-font);
    letter-spacing: 2px;
    font-size: 1.3rem;
    margin: 0 0 0 1.5rem;
    font-weight: 300;
  }
`;
