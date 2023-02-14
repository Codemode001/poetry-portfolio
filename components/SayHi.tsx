import React from "react";
import styled from "@emotion/styled";

const SayHi = () => {
  return <PurpleButton>Say hi!</PurpleButton>;
};

const PurpleButton = styled.div`
  background-color: var(--purple);
  font-size: 1rem;
  width: 8rem;
  height: 2.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--prof-font);
  font-weight: 600;
  border-radius: 5px;
  color: white !important;

  &:hover {
    cursor: pointer;
  }
`;

export default SayHi;
