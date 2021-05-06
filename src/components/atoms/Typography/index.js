import styled from "styled-components"

const Typography = styled.div`
  text-align: center;
  h2 {
    margin-bottom: 1rem;
    max-width: 12ch;
  }
  p {
    max-width: 31ch;
  }
  &::before {
    content: "";
    width: 5rem;
    height: 2px;
    background: ${({ theme }) => theme.colors.beaver};
    display: block;
    margin: 0 auto 3rem;
  }
  @media (min-width: 768px) {
    text-align: left;
    &::before {
      margin: 0 0 3rem 0;
    }
  }
  @media (min-width: 992px) {
    padding-right: 7rem;
  }
`

export default Typography
