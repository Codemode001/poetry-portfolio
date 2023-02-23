import React from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Fade } from "react-awesome-reveal";

import { ThemeProps } from "types/types";

const projectsList = [
  {
    id: "01",
    title: "Jesus reigns bukidnon 2022",
    desc: " It is a time to bring honor and praise by testifying the Lord's powerful work in their province and give Glory to God.",
    image: "Jesus-reigns.jpg",
    youtube: "https://www.youtube.com/watch?v=qXWpQEVuq0M&t=20s",
  },
  {
    id: "02",
    title: "Mindanao youth Congress 2022",
    desc: "The Mindanao Youth Congress is a gathering of young people from across the region, brought together by a shared passion for serving the Lord and making a positive impact in their communities.",
    image: "myc.jpg",
    youtube: "https://www.youtube.com/watch?v=o7I1Vd5AUsM",
  },
  {
    id: "03",
    title: "El and Abi's wedding",
    desc: "El and Abi's wedding was a magical celebration of love and commitment. The ceremony was held outdoors under a beautiful arch adorned with flowers and greenery, and the couple exchanged heartfelt vows that left not a dry eye in the house.",
    image: "wedding1.jpg",
    youtube: "https://www.youtube.com/watch?v=cCtP3-GO3h8",
  },
  {
    id: "04",
    title: "NCMDC representative for national poetry 2021",
    desc: "As the NCMDC representative for national poetry 2021, I promoted poetry on a national scale with fellow poets, making a positive impact in the community and glorifying God.",
    image: "ncmdc1.png",
    youtube: "https://www.youtube.com/watch?v=H-e03ALqz2k",
  },
  {
    id: "05",
    title: "Mothers day entry 2020",
    desc: "Through poetry, I seek to honor the immeasurable love and selflessness of all mothers. With heartfelt and poignant words, I aim to unite readers from all walks of life with a deep appreciation for the women who shape and inspire us, bringing us together in a powerful bond of gratitude and admiration.",
    image: "mothersday.png",
    youtube: "https://www.youtube.com/watch?v=W4E1t4ZNIc0",
  },
  {
    id: "06",
    title: "Youth Alive national spoken poetry competition 2020",
    desc: "The Youth Alive national spoken poetry competition 2020 brought together talented young poets from across the country, who showcased their passion and artistry through powerful words and captivating performances, leaving a lasting impact on their audience.",
    image: "ya-2020.png",
    youtube: "https://www.youtube.com/watch?v=cZRDxdtugHI",
  },
];

const Experience = ({ isDark }: ThemeProps) => {
  return (
    <MainContainer
      style={isDark ? { color: "white" } : { color: "var(--dark-background)" }}
      className="projects-mainContainer"
    >
      <ExperienceText>PROJECTS</ExperienceText>
      <Fade duration={2000}>
        {projectsList.map((item) => (
          <div className="perProjects-container" key={item.title}>
            {/* <Zoom triggerOnce={true}> */}
            <PerProjects>
              <h1>{item.id}</h1>
              <Grid container>
                <Grid item md={6} xs={12}>
                  <PerImage>
                    <Image src={item.image} />
                  </PerImage>
                </Grid>
                <Grid item md={6} xs={12}>
                  <PerInfo className="exp-perinfo">
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
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
                      <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
                        view
                      </h2>
                      <hr
                        style={{
                          width: "100%",
                          border: "1px solid #6a6e75",
                          marginLeft: "10px",
                        }}
                      />
                    </div>
                    <a href={item.youtube} target="_blank">
                      <div className="icons-section">
                        <YouTubeIcon
                          style={{
                            fontSize: "3rem",
                            color: isDark ? "white" : "black",
                          }}
                        />
                      </div>
                    </a>
                  </PerInfo>
                </Grid>
              </Grid>
            </PerProjects>
            {/* </Zoom> */}
          </div>
        ))}
      </Fade>
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
  width: 100%;
`;

const PerProjects = styled.div`
  margin: 7rem 0 8rem 0;
  // position: relative;
  width: 100%;
  height: 100%;
  display: flex;

  // padding: 5rem 0 0 0;

  & h1 {
    font-size: 12rem;
    color: #6f7175;
    position: absolute;
    left: -3rem;
    top: 0;
    z-index: -99;
  }
`;

const ExperienceText = styled.div`
  font-size: 3rem;
  font-family: var(--semi-formal);
  font-weight: 600;
  letter-spacing: 3px;
`;

const MainContainer = styled.div`
  margin-top: 10rem;

  & .perProjects-container {
    display: flex;
    position: relative;
  }
`;

export default Experience;
