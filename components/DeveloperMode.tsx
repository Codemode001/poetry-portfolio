import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";

import developerData from "../data/developer.json";

// Main Component
const MyComponent: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.getElementsByClassName("card");
      for (let i = 0; i < cards.length; i++) {
        const card = cards[i] as HTMLElement;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const cardsContainer = document.getElementById("cards");
    if (cardsContainer) {
      cardsContainer.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (cardsContainer) {
        cardsContainer.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const normalize = developerData[0].projects;

  return (
    <MainContainer>
      <CardsContainer
        id="cards"
        style={{
          height: "100%",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6}>
            {normalize.map((proj) => (
              <Card className="card">
                <CardContent className="card-content">
                  <CardImage className="card-image">
                    <CardIcon className="fa-duotone fa-apartment"></CardIcon>
                  </CardImage>
                  <CardInfoWrapper className="card-info-wrapper">
                    <CardInfo className="card-info">
                      <CardInfoIcon className="fa-duotone fa-apartment"></CardInfoIcon>
                      <CardInfoTitle className="card-info-title">
                        <h3>{proj.title}</h3>
                        <h4>{proj.desc}</h4>
                      </CardInfoTitle>
                    </CardInfo>
                  </CardInfoWrapper>
                </CardContent>
              </Card>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              className="card"
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CardContent className="card-content">
                <CardImage className="card-image">
                  <CardIcon className="fa-duotone fa-apartment"></CardIcon>
                </CardImage>
                <CardInfoWrapper className="card-info-wrapper">
                  <CardInfo className="card-info">
                    <CardInfoIcon className="fa-duotone fa-apartment"></CardInfoIcon>
                    <CardInfoTitle className="card-info-title">
                      <h3>Piano God</h3>
                      <h4>Card Subtitle</h4>
                    </CardInfoTitle>
                  </CardInfo>
                </CardInfoWrapper>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </CardsContainer>
    </MainContainer>
  );
};

const DeveloperMode = () => (
  <Root>
    <MyComponent />
  </Root>
);

export default DeveloperMode;

const MainContainer = styled.div`
  display: flex;
`;

const Root = styled.div`
  --bg-color: rgb(20, 20, 20);
  --card-color: rgb(23, 23, 23);

  body {
    align-items: center;
    background-color: var(--bg-color);
    display: flex;
    height: 100vh;
    justify-content: center;
    margin: 0px;
    overflow: hidden;
    padding: 0px;
  }

  #cards {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    max-width: 100%;
    width: calc(100% - 20px);
  }

  #cards:hover > .card::after {
    opacity: 1;
  }

  .card {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    height: 260px;
    flex-direction: column;
    position: relative;
    width: 100%;
  }

  .card:hover::before {
    opacity: 1;
  }

  .card::before,
  .card::after {
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    width: 100%;
  }

  .card::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    z-index: 3;
  }

  .card::after {
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.4),
      transparent 40%
    );
    z-index: 1;
  }

  .card > .card-content {
    background-color: var(--card-color);
    border-radius: inherit;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    inset: 1px;
    padding: 10px;
    position: absolute;
    z-index: 2;
  }

  /* -- ↓ ↓ ↓ extra card content styles ↓ ↓ ↓ -- */

  h1,
  h2,
  h3,
  h4,
  span {
    color: rgb(240, 240, 240);
    font-family: "Rubik", sans-serif;
    font-weight: 400;
    margin: 0px;
  }

  i {
    color: rgb(240, 240, 240);
  }

  .card-image {
    align-items: center;
    display: flex;
    height: 140px;
    justify-content: center;
    overflow: hidden;
  }

  .card-image > i {
    font-size: 6em;
    opacity: 0.25;
  }

  .card-info-wrapper {
    align-items: center;
    display: flex;
    flex-grow: 1;
    justify-content: flex-start;
    padding: 0px 20px;
  }

  .card-info {
    align-items: flex-start;
    display: flex;
    gap: 10px;
  }

  .card-info > i {
    font-size: 1em;
    height: 20px;
    line-height: 20px;
  }

  .card-info-title > h3 {
    font-size: 1.1em;
    line-height: 20px;
  }

  .card-info-title > h4 {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85em;
    margin-top: 8px;
  }

  /* -- ↓ ↓ ↓ some responsiveness ↓ ↓ ↓ -- */

  @media (max-width: 1000px) {
    body {
      align-items: flex-start;
      overflow: auto;
    }

    #cards {
      max-width: 1000px;
      padding: 10px 0px;
    }

    .card {
      flex-shrink: 1;
      width: calc(50% - 4px);
    }
  }

  @media (max-width: 500px) {
    .card {
      height: 180px;
    }

    .card-image {
      height: 80px;
    }

    .card-image > i {
      font-size: 3em;
    }

    .card-info-wrapper {
      padding: 0px 10px;
    }

    .card-info > i {
      font-size: 0.8em;
    }

    .card-info-title > h3 {
      font-size: 0.9em;
    }

    .card-info-title > h4 {
      font-size: 0.8em;
      margin-top: 4px;
    }
  }

  @media (max-width: 320px) {
    .card {
      width: 100%;
    }
  }

  /* -- ↓ ↓ ↓ YouTube link styles ↓ ↓ ↓ -- */

  #youtube-link {
    bottom: 10px;
  }

  #youtube-link > i {
    color: rgb(239, 83, 80);
  }

  #source-link {
    bottom: 60px;
  }

  #source-link > i {
    color: rgb(94, 106, 210);
  }

  .link {
    align-items: center;
    backdrop-filter: blur(3px);
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 6px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    display: inline-flex;
    gap: 5px;
    left: 10px;
    padding: 10px 20px;
    position: fixed;
    text-decoration: none;
    z-index: 100;
  }

  .link:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .link > i,
  .link > span {
    height: 20px;
    line-height: 20px;
  }

  .link > span {
    color: white;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  max-width: 916px;
  width: calc(100% - 20px);
  margin: 5rem 0 0 0;
  width: 100%;
`;

const Card = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  height: 260px;
  flex-direction: column;
  position: relative;
  width: 300px;

  &:hover::before {
    opacity: 1;
  }

  &:before,
  &:after {
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    width: 100%;
  }

  &:before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.06),
      transparent 40%
    );
    z-index: 3;
  }

  &:after {
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      rgba(255, 255, 255, 0.4),
      transparent 40%
    );
    z-index: 1;
  }
`;

const CardContent = styled.div`
  background-color: var(--card-color);
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  inset: 1px;
  padding: 10px;
  position: absolute;
  z-index: 2;
`;

const CardImage = styled.div`
  align-items: center;
  display: flex;
  height: 140px;
  justify-content: center;
  overflow: hidden;
`;

const CardIcon = styled.i`
  font-size: 6em;
  opacity: 0.25;
`;

const CardInfoWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  justify-content: flex-start;
  padding: 0px 20px;
`;

const CardInfo = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 10px;
`;

const CardInfoIcon = styled.i`
  font-size: 1em;
  height: 20px;
  line-height: 20px;
`;

const CardInfoTitle = styled.div`
  h3 {
    font-size: 1.1em;
    line-height: 20px;
  }

  h4 {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.85em;
    margin-top: 8px;
  }
`;
