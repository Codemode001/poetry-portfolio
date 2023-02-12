import React from "react";
import styled from "@emotion/styled";

import { ThemeProps } from "types/types";

//passed the isDark prop to know what is the chosen theme of the user

const Header = ({ isDark }: ThemeProps) => {
  return (
    <Main>
      <h2>HaroldPisos</h2>
    </Main>
  );
};

export default Header;

const Main = styled.div``;
