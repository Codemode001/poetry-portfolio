import React from "react";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Bounce } from "react-awesome-reveal";

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
    desc: "The Mindanao Youth Congress is a gathering of young people from across the region, brought together by a shared passion for serving the Lord and making a positive impact in their communities.",
    image: "wedding1.jpg",
    youtube: "https://www.youtube.com/watch?v=cCtP3-GO3h8",
  },
  {
    id: "04",
    title: "NCMDC representative for national poetry 2021",
    desc: "The Mindanao Youth Congress is a gathering of young people from across the region, brought together by a shared passion for serving the Lord and making a positive impact in their communities.",
    image: "ncmdc1.png",
    youtube: "https://www.youtube.com/watch?v=H-e03ALqz2k",
  },
  {
    id: "05",
    title: "Mothers day entry 2020",
    desc: "The Mindanao Youth Congress is a gathering of young people from across the region, brought together by a shared passion for serving the Lord and making a positive impact in their communities.",
    image: "mothersday.png",
    youtube: "https://www.youtube.com/watch?v=W4E1t4ZNIc0",
  },
  {
    id: "06",
    title: "Youth Alive national spoken poetry competition 2020",
    desc: "The Mindanao Youth Congress is a gathering of young people from across the region, brought together by a shared passion for serving the Lord and making a positive impact in their communities.",
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
      {projectsList.map((item) => (
        <div className="perProjects-container">
          {/* <Bounce> */}
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
                  <div className="icons-section">
                    <YouTubeIcon
                      style={{
                        fontSize: "3rem",
                        color: isDark ? "white" : "black",
                      }}
                    />
                    {/* youtube ? kana dayun */}
                  </div>
                </PerInfo>
              </Grid>
            </Grid>
          </PerProjects>
          {/* </Bounce> */}
        </div>
      ))}
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
  margin: 7rem 0 10rem 0;
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
