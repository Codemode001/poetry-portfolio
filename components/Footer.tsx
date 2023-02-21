import React from "react";
import styled from "@emotion/styled";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { ThemeProps } from "types/types";

const Footer = ({ isDark }: ThemeProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <MainContainer
      style={isDark ? { color: "white" } : { color: "var(--dark-background)" }}
    >
      <p>© {currentYear} Harold Pisos. All rights reserved</p>
      <div>
        Made with <FavoriteIcon style={{ color: "#bc1e1b" }} />
      </div>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  & p {
    font-size: 1rem;
    font-family: var(--formal-font);
  }
  & div {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    letter-spacing: 1px;
    font-weight: 700;
    font-family: var(--formal-font);
    margin: 1rem 0 0 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 10rem;
  margin: 7rem 0 0 0;
`;

export default Footer;
