import * as React from "react"
import styled from "styled-components"
import Layout from "../components/organisms/Layout"
import { Container } from "../components/atoms/Container"
import Masthead from "../components/organisms/Masthead"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import CallToAction from "../components/organisms/CallToAction"
import { Row, Col } from "../components/atoms/Layout"

const AboutSection = styled.section`
  padding: 4rem 0;
  @media (min-width: 992px) {
    padding: 8rem 0;
  }
`

const AboutRow = styled(Row)`
  gap: 4rem;
  margin-top: ${({ withMargin }) => (withMargin ? "-10rem" : 0)};
  @media (min-width: 992px) {
    margin-top: ${({ withMargin }) => (withMargin ? "-12rem" : 0)};
    gap: 0;
  }
  @media (min-width: 1200px) {
    margin-top: ${({ withMargin }) => (withMargin ? "-15rem" : 0)};
  }
`

const AboutCol = styled(Col)`
  display: flex;
  flex-direction: ${({ reversed }) => (reversed ? "column-reverse" : "column")};
  @media (min-width: 992px) {
    flex-direction: row;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
AboutCol.Image = styled.div`
  box-shadow: ${props =>
    props.reversed ? "none" : "0 75px 100px -50px hsl(219 20% 28% / 50%)"};
  position: relative;
  display: flex;
  height: 420px;
  @media (min-width: 768px) {
    height: 560px;
  }
  @media (min-width: 992px) {
    flex: 1;
    height: 100%;
  }
`

AboutCol.Body = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 4rem;
  h2 {
    font-weight: bold;
    margin-bottom: 1rem;
  }
  ul {
    list-style-position: inside;
    padding-left: 1rem;
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
    padding: 4rem 5rem;
  }
  @media (min-width: 992px) {
    padding: 8rem 4rem;
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
  @media (min-width: 1200px) {
    padding-top: ${({ withMargin }) => (withMargin ? "6rem" : "auto")};
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Masthead
      size="small"
      button={false}
      title="About Us"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus adipiscing vel quis."
    />
    <AboutSection>
      <Container>
        <AboutRow withMargin>
          <AboutCol>
            <AboutCol.Image>
              <StaticImage
                src="../images/tom-gabert.jpg"
                layout="fullWidth"
                placeholder="blurred"
                style={{ flex: 1 }}
                imgStyle={{ objectPosition: "top" }}
              />
            </AboutCol.Image>
          </AboutCol>
          <AboutCol>
            <AboutCol.Body withMargin>
              <h2>Our Experience is Your Experience</h2>
              <p>
                At Pour Inc. we want to make the event planning process as
                exciting and stress-free as possible. From providing bartenders
                to entire bar setups with liquor, beer & wine, we will be with
                you every step of the way and remain as involved or hands-off as
                you’d like. Let us help make your next event a memorable one.
              </p>
            </AboutCol.Body>
          </AboutCol>
        </AboutRow>
        <AboutRow reverse>
          <AboutCol>
            <AboutCol.Body>
              <h2>Our Culture</h2>
              <p>
                We understand that our company is only as strong as the culture
                we create within it. We value our employees’ ideas and opinions
                and work together to provide excellent service that is not only
                evident through the events we work, but through the successes of
                the company. A few of the top/most prevalent culture points we
                strive to emulate are:
              </p>
              <p>
                <ul>
                  <li>Professionalism</li>
                  <li>Integrity</li>
                  <li>Education</li>
                  <li>Communication</li>
                  <li>Camaraderie</li>
                  <li>Celebration</li>
                </ul>
              </p>
            </AboutCol.Body>
          </AboutCol>
          <AboutCol>
            <AboutCol.Image>
              <StaticImage
                src="../images/culture.jpg"
                layout="fullWidth"
                placeholder="blurred"
                style={{ flex: 1 }}
              />
            </AboutCol.Image>
          </AboutCol>
        </AboutRow>
        <AboutRow>
          <AboutCol>
            <AboutCol.Image>
              <StaticImage
                src="../images/green.jpg"
                layout="fullWidth"
                placeholder="blurred"
                style={{ flex: 1 }}
              />
            </AboutCol.Image>
          </AboutCol>
          <AboutCol>
            <AboutCol.Body>
              <h2>Our Green Initiative</h2>
              <p>
                As stewards of the earth, we take responsibility for the waste
                we create and always look for new ways to decrease our carbon
                footprint. Some of the ways we’ve moved toward becoming more
                green include:
              </p>
              <p>
                <ul>
                  <li>
                    Juicing & dehydrating leftover garnishes (composting
                    leftovers)
                  </li>
                  <li>Offering glassware rentals to decrease waste</li>
                  <li>
                    Utilizing compostable cups when glassware is not feasible
                  </li>
                  <li>Moving to compostable picks in lieu of plastic picks</li>
                  <li>Nixing napkins as a bar add-on</li>
                  <li>
                    Partnering with local companies to reduce the carbon
                    footprint created through travel
                  </li>
                </ul>
              </p>
            </AboutCol.Body>
          </AboutCol>
        </AboutRow>
        <AboutRow>
          <AboutCol>
            <AboutCol.Body>
              <h2>Charity & Non-Profit Events</h2>
              <p>
                Pour Inc. puts its core beliefs into practice by helping others
                in numerous ways. In our efforts to better the community, we
                donate time, product & services and get involved with spreading
                knowledge of local charities & benefits.
              </p>
              <p>
                <ul>
                  <li>The Alzheimer’s Association of Wisconsin</li>
                  <li>The Leukemia & Lymphoma Society</li>
                  <li>Ignite the Spirit – Milwaukee</li>
                  <li>Wisconsin Burn Camp</li>
                  <li>Feeding America – Eastern Wisconsin</li>
                  <li>Pathfinders MKE</li>
                  <li>Elmbrook Education Foundation</li>
                  <li>Goodwill Industries of South Eastern Wisconsin</li>
                  <li>Good Friends Inc.</li>
                </ul>
              </p>
            </AboutCol.Body>
          </AboutCol>
          <AboutCol>
            <AboutCol.Image>
              <StaticImage
                src="../images/charity.jpg"
                layout="fullWidth"
                placeholder="blurred"
                style={{ flex: 1 }}
              />
            </AboutCol.Image>
          </AboutCol>
        </AboutRow>
      </Container>
    </AboutSection>

    <CallToAction />
  </Layout>
)

export default AboutPage
