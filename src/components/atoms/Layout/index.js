import styled from "styled-components"

const Row = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "column-reverse" : "column")};
  gap: ${({ gap }) => `${gap}rem`};
  @media (min-width: 992px) {
    flex-direction: row;
  }
`

const Col = styled.div`
  flex: ${({ flex }) => (flex ? flex : 1)};
  display: flex;
  flex-direction: column;
  align-items: ${({ justify }) => (justify ? `${justify}` : "auto")};
  justify-content: ${({ justify }) => (justify ? `${justify}` : "flex-start")};
`

export { Row, Col }
