import styled from "styled-components"

export const Masthead = styled.section`
  background-color: ${({ theme }) => theme.colors.codGray};
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    height: 820px;
  }
`

Masthead.Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 4rem 1.5rem 11rem 1.5rem;
  z-index: 1000;
  h1 {
    font-weight: 300;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  p {
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    padding: 4rem 6rem 11.5rem;
    h1 {
      font-size: 3rem;
    }
  }
  @media (min-width: 992px) {
    padding: 4rem 1.5rem;
    grid-column: 2 / span 5;
    grid-row: 1;
    text-align: left;
    align-items: flex-start;
    h1 {
      font-size: ${({ theme }) => theme.typography.h1};
      max-width: 12ch;
    }
    p {
      max-width: 35ch;
    }
  }
  @media (min-width: 1200px) {
    grid-column: 3 / span 5;
  }
  @media (min-width: 1400px) {
    grid-column: 4 / span 5;
  }
`

Masthead.Image = styled.div`
  height: 20rem;
  grid-row: 1;
  @media (min-width: 768px) {
    height: 23rem;
  }
  @media (min-width: 992px) {
    grid-column: 6 / -1;
    height: 820px;
  }
`
