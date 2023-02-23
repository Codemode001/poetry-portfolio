import React from "react";
import styled from "@emotion/styled";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FaTiktok } from "react-icons/fa";
import { ThemeProps } from "types/types";
import { Bounce } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

const Iam = ({ isDark }: ThemeProps) => {
  return (
    <>
      <MainContainer
        style={
          isDark ? { color: "white" } : { color: "var(--dark-background)" }
        }
      >
        <IamContainer className="Iam-container">
          <Bounce triggerOnce={true}>
            <section className="upper-section">
              <p>I AM</p>
            </section>
            <h1 className="Iam-haroldP">Harold P.</h1>
            <section className="lower-section">
              <p>SPOKEN ARTIST</p>
            </section>
          </Bounce>
        </IamContainer>
      </MainContainer>
      <div
        className="video-plat-container"
        style={{ color: isDark ? "white" : "black" }}
      >
        <VideoPlat className="video-plat">
          <Slide cascade triggerOnce={true}>
            <a
              href="https://www.youtube.com/channel/UC6HRXETZCXGO2cR7qi6XUcg"
              target="_blank"
            >
              <Bounce triggerOnce={true} duration={600}>
                <VideoPlatIcons
                  style={{ backgroundColor: isDark ? "#455163" : "#eeeeee" }}
                >
                  <YouTubeIcon
                    style={{
                      fontSize: "3rem",
                      color: isDark ? "white" : "black",
                    }}
                  />
                </VideoPlatIcons>
              </Bounce>
            </a>
            <a
              href="https://www.tiktok.com/@haroldrhey?lang=en"
              target="_blank"
            >
              <Bounce triggerOnce={true} duration={600}>
                <VideoPlatIcons
                  style={{ backgroundColor: isDark ? "#455163" : "#eeeeee" }}
                >
                  <FaTiktok style={{ color: isDark ? "white" : "black" }} />
                </VideoPlatIcons>
              </Bounce>
            </a>
          </Slide>
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

const IamContainer = styled.div``;

const MainContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .lower-section {
    display: flex;
    justify-content: flex-end;
    font-family: var(--prof-font);
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
