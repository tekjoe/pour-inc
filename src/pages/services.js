import React, { useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/organisms/Layout"
import { Container } from "../components/atoms/Container"
import Masthead from "../components/organisms/Masthead"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { Button } from "../components/atoms/Button"

const ServicesSection = styled.section`
  padding: 4rem 0;
  @media (min-width: 992px) {
    padding: 6rem 0;
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(12, 1fr);
    margin-bottom: 6rem;
  }
  @media (min-width: 992px) {
    margin-bottom: 8rem;
  }
`

const Left = styled.div`
  h2 {
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    grid-column: 1/5;
  }
`
const Right = styled.div`
  @media (min-width: 768px) {
    grid-column: span 6;
    padding-top: 56px;
  }
`
const Middle = styled.div`
  position: relative;
  height: 4rem;
  &::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.colors.codGray};
    top: 50%;
    left: 0;
  }
  @media (min-width: 768px) {
    height: 100%;
    &::after {
      content: "";
      position: absolute;
      width: 1px;
      background: black;
      height: calc(100% - 56px);
      top: unset;
      left: 50%;
      bottom: 0;
    }
    grid-column: span 1;
  }
`

const ServicesPage = () => {
  return (
    <Layout>
      <SEO title="Services" />
      <Masthead
        title="Services"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus adipiscing vel quis."
        size="extraSmall"
      />
      <ServicesSection>
        <Container>
          <Grid>
            <Left>
              <h2>Bar Services</h2>
              <StaticImage
                src="../images/bar_services-1.jpg"
                layout="fullWidth"
                style={{
                  boxShadow: "0 75px 100px -50px hsl(219 20% 28% / 50%)",
                }}
              />
            </Left>
            <Middle />
            <Right>
              <p>
                <strong>
                  Whatever your needs, we have a variety of customizable
                  packages and services to ensure your event’s bar is everything
                  you have envisioned it to be.
                </strong>
              </p>
              <p>
                When you book with Pour Inc., no matter what services you
                select, we will help you assess your bar necessities. Once
                booked, we can offer estimates on amounts of product to purchase
                for the event, or if you prefer, we can handle the bar in its’
                entirety. Rest assured that we will keep your bar stocked for
                the whole event!
              </p>
              <Button inverse to="/">
                View Options
              </Button>
            </Right>
          </Grid>
          <Grid>
            <Left>
              <h2>Cocktail Consultation</h2>
              <StaticImage
                src="../images/cocktail_consultation.jpg"
                layout="fullWidth"
                style={{
                  boxShadow: "0 75px 100px -50px hsl(219 20% 28% / 50%)",
                }}
              />
            </Left>
            <Middle />
            <Right>
              <p>
                <strong>
                  Our mixologists create a unique menu of craft cocktails for
                  two to sample in preparation for an event.
                </strong>
              </p>
              <p>
                When you book a full package with Pour Inc., we offer you the
                opportunity to sample cocktails of your choosing in a one and
                one-half hour session with our top bartenders. While we learn
                more about you and your event, you will sample personally
                crafted cocktails and provide feedback on flavor and
                presentation. We then tweak the beverages until they meet your
                expectations and are uniquely crafted to your preferences.
                Whether you opt to feature these cocktails at your event or
                simply want to kick back and enjoy quality time with your
                favorite Pour Inc. Bartenders, it’s entirely up to you. The
                Cocktail Consultation is also a separate package you can
                purchase if you haven’t gone with one of our full packages.
              </p>
              <Button inverse to="/">
                Get a Quote
              </Button>
            </Right>
          </Grid>
          <Grid>
            <Left>
              <h2>Bar Staffing</h2>
              <StaticImage
                src="../images/bar_staff-1.jpg"
                layout="fullWidth"
                style={{
                  boxShadow: "0 75px 100px -50px hsl(219 20% 28% / 50%)",
                }}
              />
            </Left>
            <Middle />
            <Right>
              <p>
                <strong>
                  Our staff is our most valuable asset, and as such, we invest a
                  great deal of time & effort to ensure they are continually
                  improving their knowledge & skill set.
                </strong>
              </p>
              <p>
                Pour Inc. has developed a series of mandatory educational
                sessions that are one-part lecture, one-part tasting, and
                one-part drink making to further expand our understanding of the
                craft. We take pride in knowing that our staff is providing the
                best possible experience for our clients from behind the bar.
              </p>
              <Button inverse to="/">
                Get a Quote
              </Button>
            </Right>
          </Grid>
        </Container>
      </ServicesSection>
    </Layout>
  )
}

export default ServicesPage
