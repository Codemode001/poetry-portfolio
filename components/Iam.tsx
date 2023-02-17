import React from "react";
import styled from "@emotion/styled";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FaTiktok } from "react-icons/fa";
import { ThemeProps } from "types/types";

const Iam = ({ isDark }: ThemeProps) => {
  return (
    <>
      <MainContainer
        style={
          isDark ? { color: "white" } : { color: "var(--dark-background)" }
        }
      >
        <IamContainer className="Iam-container">
          <section className="upper-section">
            <p>I AM</p>
          </section>
          <h1 className="Iam-haroldP">Harold P.</h1>
          <section className="lower-section">
            <p>SPOKEN ARTIST</p>
          </section>
        </IamContainer>
      </MainContainer>
      <div
        className="video-plat-container"
        style={{ color: isDark ? "white" : "black" }}
      >
        <VideoPlat className="video-plat">
          <VideoPlatIcons
            style={{ backgroundColor: isDark ? "#455163" : "#eeeeee" }}
          >
            <YouTubeIcon
              style={{ fontSize: "3rem", color: isDark ? "white" : "black" }}
            />
          </VideoPlatIcons>
          <VideoPlatIcons
            style={{ backgroundColor: isDark ? "#455163" : "#eeeeee" }}
          >
            <FaTiktok style={{ color: isDark ? "white" : "black" }} />
          </VideoPlatIcons>
        </VideoPlat>
      </div>
    </>
  );
};

const VideoPlatIcons = styled.div`
  background-color: #455163;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const VideoPlat = styled.div`
  height: 11rem;
`;

const IamContainer = styled.div`
  width: 80%;
  background-color: gray;
`;

const MainContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightblue;

  & .lower-section {
    display: flex;
    justify-content: flex-end;
    font-family: var(--prof-font);
    background-color: black;
  }

  & .upper-section {
    width: 100%;
    font-family: var(--prof-font);
  }

  & h1 {
    font-family: var(--prof-font);
  }
`;

export default Iam;
