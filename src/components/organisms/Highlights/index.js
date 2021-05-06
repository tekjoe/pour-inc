import styled from "styled-components"
import * as React from "react"
import { Container } from "../../atoms/Container"
import { Row, Col } from "../../atoms/Layout"
import { StaticImage } from "gatsby-plugin-image"

const Section = styled.section`
  background: ${({ theme }) => theme.colors.codGray};
  color: white;
  padding: 4rem 0;
  @media (min-width: 992px) {
    padding: 12.5rem 0 7.5rem 0;
  }
`

const Typography = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    &::before {
      margin: 0 0 3rem 0;
    }
  }
  @media (min-width: 992px) {
    padding-right: 7rem;
    text-align: left;
    align-items: flex-start;
  }
`

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Highlight = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  &::after {
    content: "";
    min-height: 1px;
    background: hsl(0 100% 100% / 15%);
    display: block;
    width: 100%;
    flex-basis: 100%;
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 4rem;
    row-gap: 1.5rem;
  }
`

Highlight.Image = styled.div`
  position: relative;

  @media (min-width: 768px) {
    &::after {
      content: "";
      width: 2rem;
      height: 2px;
      top: 1.5rem;
      background: ${({ theme }) => theme.colors.beaver};
      position: absolute;
      margin: 0 auto 3rem;
    }
    height: 96px;
    min-width: 128px;
    flex: 1;
  }
`
Highlight.Body = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  p {
    margin-bottom: 0;
  }
  h3 {
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    align-items: left;
    padding-bottom: 0;
    text-align: left;
    flex: 3;
  }
`

const Highlights = () => {
  return (
    <Section>
      <Container>
        <Row gap={3}>
          <Col>
            <Typography>
              <h2>Highlights from behind the bar</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                sunt quo natus ipsa ex aperiam dolorem delectus excepturi
                sapiente repellat.
              </p>
            </Typography>
          </Col>
          <Col>
            <Stack>
              <Highlight>
                <Highlight.Image>
                  <StaticImage
                    src="../../../images/ig-1.png"
                    style={{ height: "100%" }}
                  />
                </Highlight.Image>
                <Highlight.Body>
                  <h3>Vodka Heisendinger</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, temporibus.
                  </p>
                </Highlight.Body>
              </Highlight>
              <Highlight>
                <Highlight.Image>
                  <StaticImage
                    src="../../../images/ig-2.png"
                    style={{ height: "100%" }}
                  />
                </Highlight.Image>
                <Highlight.Body>
                  <h3>Cranberry Deusseldorf</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, temporibus.
                  </p>
                </Highlight.Body>
              </Highlight>
              <Highlight>
                <Highlight.Image>
                  <StaticImage
                    src="../../../images/ig-1.png"
                    style={{ height: "100%" }}
                  />
                </Highlight.Image>
                <Highlight.Body>
                  <h3>Tequila Reacharound</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, temporibus.
                  </p>
                </Highlight.Body>
              </Highlight>
            </Stack>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default Highlights
