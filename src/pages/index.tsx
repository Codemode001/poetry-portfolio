import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { Header } from "components";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import IconButton from "@mui/material/IconButton";
import { useSelector, useDispatch } from "react-redux";
import Brightness2Icon from "@mui/icons-material/Brightness2";

import type { RootState } from "../../store/store";
import { updateValue } from "slices/slices";
import Iam from "./Iam";

export default function Home() {
  const [isDark, setIsDark] = useState(true);

  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  function handleToggle() {
    dispatch(updateValue(theme === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    if (theme === "light") {
      setIsDark(false);
    } else {
      setIsDark(true);
    }
  }, [theme]);

  return (
    <MainContainer
      style={
        isDark
          ? { backgroundColor: "var(--dark-background)" }
          : { backgroundColor: "var(--light-background)" }
      }
    >
      <HeaderContainer>
        <Header isDark={isDark} />
        <IconButton
          style={isDark ? { color: "white" } : { color: "black" }}
          onClick={handleToggle}
        >
          {isDark ? <WbSunnyIcon /> : <Brightness2Icon />}
        </IconButton>
      </HeaderContainer>
      <Iam />
    </MainContainer>
  );
}

const HeaderContainer = styled.div`
  display: flex;
`;

const MainContainer = styled.div`
  padding: 2rem 2rem 0 2rem;
  transition: background-color 0.2s ease-in-out;
`;
