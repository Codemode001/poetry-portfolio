import React from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import YouTubeIcon from "@mui/icons-material/YouTube";

import { ThemeProps } from "types/types";

const Experience = ({ isDark }: ThemeProps) => {
  return (
    <MainContainer
      style={isDark ? { color: "white" } : { color: "var(--dark-background)" }}
    >
      <ExperienceText>PROJECTS</ExperienceText>
      <h1>01</h1>
      <PerProjects>
        <Grid container>
          <Grid item md={6} xs={12}>
            <PerImage>
              <Image src="Jesus-reigns.jpg" />
            </PerImage>
          </Grid>
          <Grid item md={6} xs={12}>
            <PerInfo className="exp-perinfo">
              <h2>Jesus reigns 2022</h2>
              <p>
                It is a time to bring honor and praise by testifying the Lord's
                powerful work in their province and give Glory to God.
              </p>
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
                <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>view</h2>
                <hr
                  style={{
                    width: "100%",
                    border: "1px solid #6a6e75",
                    marginLeft: "10px",
                  }}
                />
              </div>
              <div className="icons-section">
                <YouTubeIcon
                  style={{
                    fontSize: "3rem",
                    color: isDark ? "white" : "black",
                  }}
                />
              </div>
            </PerInfo>
          </Grid>
        </Grid>
      </PerProjects>
    </MainContainer>
  );
};

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
`;

const PerProjects = styled.div`
  margin: 7rem 0 10rem 0;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
`;

const ExperienceText = styled.div`
  font-size: 3rem;
  font-family: var(--semi-formal);
  font-weight: 600;
  letter-spacing: 3px;
`;

const MainContainer = styled.div`
  padding: 2rem;
  margin-top: 10rem;

  & h1 {
    font-size: 12rem;
    color: #6f7175;
    position: absolute;
    left: -3rem;
  }
`;

export default Experience;
