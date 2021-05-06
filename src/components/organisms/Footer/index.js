import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import styled from "styled-components"
import { Container } from "../../atoms/Container"
import { Row, Col } from "../../atoms/Layout"

const Footer = styled.footer`
  padding: 5rem 0;
  background: ${({ theme }) => theme.colors.codGray};
  color: white;
`

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  span {
    display: block;
    font-weight: 500;
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.typography.h4};
    letter-spacing: 1px;
  }
  @media (min-width: 768px) {
    align-items: flex-start;
  }
`

const Facebook = styled.span`
  &::before {
    font-family: "Font Awesome 5 Brands";
    font-weight: 900;
    content: "\f09a";
    margin-right: 0.5rem;
  }
`
const Instagram = styled.span`
  &::before {
    font-family: "Font Awesome 5 Brands";
    font-weight: 900;
    content: "\f16d";
    margin-right: 0.5rem;
  }
`
const YouTube = styled.span`
  &::before {
    font-family: "Font Awesome 5 Brands";
    font-weight: 900;
    content: "\f167";
    margin-right: 0.5rem;
  }
`

const FooterLogo = styled.div`
  height: 4rem;
  width: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  @media (min-width: 768px) {
    height: 6rem;
    width: 6rem;
  }
`

export default () => {
  return (
    <Footer>
      <Container>
        <Row gap={3}>
          <Col>
            <FooterLogo>
              <StaticImage
                src="../../../images/pour-logo-circle-white.png"
                alt="Pour Inc. Logo"
                layout="fullWidth"
                aspectRatio={1}
                style={{ height: "100%", width: "100%" }}
              />
            </FooterLogo>
          </Col>
          <Col>
            <Stack>
              <span>5517A W North Ave</span>
              <span>Milwaukee, WI 53208</span>
              <span>(414) 559-7394</span>
            </Stack>
          </Col>
          <Col>
            <Stack>
              <Instagram>pourincmke</Instagram>
              <Facebook>pourinc</Facebook>
              <YouTube>Pour Inc.</YouTube>
            </Stack>
          </Col>
        </Row>
      </Container>
    </Footer>
  )
}
