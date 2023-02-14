import React from "react";
import styled from "@emotion/styled";

const Iam = () => {
  return (
    <MainContainer>
      <IamContainer>
        <section className="upper-section">
          <p>I AM</p>
        </section>
        <h1>Harold P.</h1>
        <section className="lower-section">
          <p>SPOKEN ARTIST</p>
        </section>
      </IamContainer>
    </MainContainer>
  );
};

const IamContainer = styled.div`
  width: 50%;
`;

const MainContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;

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
    font-size: 9rem;
    font-family: var(--prof-font);
  }
`;

export default Iam;
