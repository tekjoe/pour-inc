import styled from "styled-components"

const UniqueSellingPoints = styled.section`
  margin-top: -6rem;
  @media (min-width: 992px) {
    margin-top: 0;
  }
`

const SellingPoint = styled.div`
  display: flex;
  flex-direction: ${({ reversed }) => (reversed ? "column-reverse" : "column")};
  gap: 3rem;
  margin-bottom: 5rem;
  @media (min-width: 992px) {
    margin-bottom: 8rem;
    flex-direction: row;
    gap: 8rem;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
SellingPoint.Image = styled.div`
  box-shadow: ${props =>
    props.reversed ? "none" : "0 75px 100px -50px hsl(219 20% 28% / 50%)"};
  position: relative;
  display: flex;
  @media (min-width: 768px) {
    max-height: 360px;
    &::after {
      content: "";
      position: absolute;
      bottom: ${props => (props.reversed ? "-28rem" : "-8rem")};
      height: 75%;
      border-radius: ${props =>
        props.reversed ? "100px 0 0 0" : "0 100px 0 0"};
      background: hsl(219 14% 42% / 8%);
      z-index: -1;
      width: 150%;
      left: ${props => (props.reversed ? "50%" : "-100%")};
    }
  }
  @media (min-width: 992px) {
    &::after {
      content: "";
      position: absolute;
      bottom: ${props => (props.reversed ? 0 : "8rem")};
      height: 45%;
      border-radius: ${props =>
        props.reversed ? "100px 0 0 0" : "0 100px 0 0"};
      background: hsl(219 14% 42% / 8%);
      z-index: -1;
      width: 230%;
      left: ${props => (props.reversed ? "-25%" : "-100%")};
    }
    flex: 1;
    max-height: 720px;
    margin-top: ${props => (props.reversed ? 0 : "-4rem")};
    margin-bottom: ${props => (props.reversed ? "-4rem" : 0)};
  }
`

SellingPoint.Body = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h2 {
    font-weight: bold;
    margin-bottom: 1rem;
  }
  &::before {
    content: "";
    width: 5rem;
    height: 2px;
    background: ${({ theme }) => theme.colors.beaver};
    display: block;
    margin: 0 auto 2rem;
  }
  @media (min-width: 768px) {
    padding: 0 5rem;
  }
  @media (min-width: 992px) {
    flex: 1;
    h2 {
      max-width: 12ch;
    }
    p {
      max-width: 32ch;
    }
    text-align: left;
    &::before {
      margin: 0 0 3rem 0;
    }
  }
`

export { UniqueSellingPoints, SellingPoint }
