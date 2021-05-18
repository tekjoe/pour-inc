import React, { useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/organisms/Layout"
import { Container } from "../components/atoms/Container"
import Masthead from "../components/organisms/Masthead"
import SEO from "../components/seo"
import CallToAction from "../components/organisms/CallToAction"
import { Row, Col } from "../components/atoms/Layout"
import { StaticImage } from "gatsby-plugin-image"
import lines from "../images/pattern-lines.svg"

const ContactSection = styled.section`
  padding: 4rem 0;
  @media (min-width: 992px) {
    padding: 8rem 0;
  }
`

const ContactForm = styled.div`
  position: relative;
  z-index: 5;
  box-shadow: 0 75px 100px -50px hsl(219 20% 28% / 50%);
  @media (min-width: 992px) {
    &::before {
      position: absolute;
      content: "";
      height: 20rem;
      width: 150%;
      background: hsl(219 14% 42% / 8%);
      top: -8rem;
      right: -40%;
      border-radius: 0 0 0 100px;
      z-index: -1;
    }
    &::after {
      position: absolute;
      content: url(${lines});
      z-index: -1;
      top: -2rem;
      right: -3.5rem;
    }
  }
  @media (min-width: 1200px) {
    &::before {
      width: 210%;
      right: -100%;
    }
  }
`

const ContactImage = styled.div`
  position: relative;
  display: flex;
  height: 420px;
  z-index: 5;
  margin-top: -10rem;
  box-shadow: 0 75px 100px -50px hsl(219 20% 28% / 50%);
  @media (min-width: 768px) {
    height: 560px;
  }
  @media (min-width: 992px) {
    flex: 1;
    max-height: 720px;
    margin-top: -13rem;
  }
  @media (min-width: 1200px) {
    margin-top: -15rem;
  }
`

const ContactPage = () => {
  useEffect(() => {
    ;(function (h, b, s, n, i, p, e, t) {
      h._HB_ = h._HB_ || {}
      h._HB_.pid = i
      t = b.createElement(s)
      t.type = "text/javascript"
      t.async = !0
      t.src = n
      e = b.getElementsByTagName(s)[0]
      e.parentNode.insertBefore(t, e)
    })(
      window,
      document,
      "script",
      "https://widget.honeybook.com/assets_users_production/websiteplacements/placement-controller.min.js",
      "5d64095f46e03700d5583c0b"
    )
  })
  return (
    <Layout>
      <SEO title="Contact " />
      <Masthead
        size="small"
        button={false}
        title="Contact Us"
        subtitle="We would love to assist you with your beverage service needs! Please fill out this form to give us a better idea of what we can help you with. We look forward to hearing from you!"
      />
      <ContactSection>
        <Container>
          <Row gap={4}>
            <Col>
              <ContactImage>
                <StaticImage
                  src="../images/tom-gabert.jpg"
                  layout="fullWidth"
                  placeholder="blurred"
                  style={{ flex: 1 }}
                  imgStyle={{ objectPosition: "top" }}
                />
              </ContactImage>
            </Col>
            <Col>
              <ContactForm>
                <div className="hb-p-5d64095f46e03700d5583c0b-2"></div>
                <img
                  height="1"
                  width="1"
                  style={{ display: "none" }}
                  src="https://www.honeybook.com/p.png?pid=5d64095f46e03700d5583c0b"
                />
              </ContactForm>
            </Col>
          </Row>
        </Container>
      </ContactSection>

      <CallToAction />
    </Layout>
  )
}

export default ContactPage
