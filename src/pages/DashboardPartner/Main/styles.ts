import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 0 1rem 100px;
  display: grid;
  grid-template-columns: 90vw;
  transition: all 350ms;
  grid-gap: 3rem;

  @media screen and (min-width: 720px) {
    padding: 0 1rem 0 150px;
    grid-template-columns: 40vw 1fr;
  }

  @media screen and (min-width: 980px) {
    grid-template-columns: 50vw 1fr;
  }
`;

export const FeaturesColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const FeedColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
