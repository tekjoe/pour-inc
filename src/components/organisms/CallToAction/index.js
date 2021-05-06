import * as React from "react"
import styled from "styled-components"
import { Button } from "../../atoms/Button"
import { Container } from "../../atoms/Container"
import { Col, Row } from "../../atoms/Layout"
import ctaImage from "../../../images/cta-image.jpg"

const Section = styled.section`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.85) 100%
    ),
    url(${ctaImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  padding: 5rem 0;
  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`

const CtaText = styled.div`
  text-align: center;
  p {
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.1;
    margin-bottom: 0;
  }
  @media (min-width: 768px) {
    p {
      font-size: ${({ theme }) => theme.typography.h2};
    }
  }
  @media (min-width: 992px) {
    text-align: left;
  }
`

const CallToAction = () => {
  return (
    <Section>
      <Container>
        <Row gap={2}>
          <Col flex={2} justify="center">
            <CtaText>
              <p>Ready to make a reservation?</p>
            </CtaText>
          </Col>
          <Col flex={1}>
            <CtaText>
              <Button to="/">Book an Event</Button>
            </CtaText>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default CallToAction
