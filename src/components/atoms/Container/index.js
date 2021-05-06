import styled from "styled-components"

export const Container = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  @media (min-width: 768px) {
    padding: 0;
    max-width: 600px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1120px;
  }
  @media (min-width: 1400px) {
    max-width: 1200px;
  }
  @media (min-width: 1600px) {
    max-width: 1440px;
  }
`
