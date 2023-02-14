import React from "react";
import styled from "@emotion/styled";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { FaTiktok } from "react-icons/fa";

const Iam = ({ isDark }: { isDark: boolean }) => {
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
      <VideoPlat>
        <VideoPlatIcons>
          <YouTubeIcon style={{ fontSize: "3rem" }} />
        </VideoPlatIcons>
        <VideoPlatIcons>
          <FaTiktok />
        </VideoPlatIcons>
      </VideoPlat>
    </>
  );
};

const VideoPlatIcons = styled.div`
  background-color: #455163;
  border-radius: 50%;
  height: 4rem;
  width: 4rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
`;

const VideoPlat = styled.div`
  margin: 2rem 0 0 0;
  width: 10%;
  height: 11rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const IamContainer = styled.div`
  width: 80%;
`;

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
