import * as React from "react"
import Layout from "../components/organisms/Layout"
import { Container } from "../components/atoms/Container"
import {
  UniqueSellingPoints,
  SellingPoint,
} from "../components/organisms/UniqueSellingPoints"
import { Button } from "../components/atoms/Button"
import { Masthead } from "../components/organisms/Masthead"
import Highlights from "../components/organisms/Highlights"
import Services from "../components/organisms/Services"
import SEO from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import CallToAction from "../components/organisms/CallToAction"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Masthead>
      <Masthead.Body>
        <h1>Raising the bar at your next event</h1>
        <p>
          Pour Inc. is a professional Mobile Bartending Service based in
          Milwaukee, Wisconsin, offering a high-quality experience achieved
          through years of expertise in the event industry.
        </p>
        <Button to="/">Book an Event</Button>
      </Masthead.Body>
      <Masthead.Image>
        <StaticImage
          src="../images/masthead-placeholder.jpg"
          alt="A signature Pour Inc. cocktail"
          placeholder="blurred"
          layout="fullWidth"
          style={{ height: "100%" }}
        />
      </Masthead.Image>
    </Masthead>
    <UniqueSellingPoints>
      <Container>
        <SellingPoint>
          <SellingPoint.Image>
            <StaticImage
              src="../images/usp-placeholder.jpg"
              alt="A signature Pour Inc. cocktail"
              placeholder="blured"
              layout="constrained"
              style={{ width: "100%" }}
            />
          </SellingPoint.Image>
          <SellingPoint.Body>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam labore officiis voluptatibus totam. Aut laboriosam
              natus, deserunt distinctio quam expedita.
            </p>
          </SellingPoint.Body>
        </SellingPoint>
        <SellingPoint reversed>
          <SellingPoint.Body>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laboriosam labore officiis voluptatibus totam. Aut laboriosam
              natus, deserunt distinctio quam expedita.
            </p>
          </SellingPoint.Body>
          <SellingPoint.Image reversed>
            <StaticImage
              src="../images/usp-placeholder-2.jpg"
              alt="A signature Pour Inc. cocktail"
              placeholder="blurred"
              layout="constrained"
            />
          </SellingPoint.Image>
        </SellingPoint>
      </Container>
    </UniqueSellingPoints>
    <Highlights />
    <Services />
    <CallToAction />
  </Layout>
)

export default IndexPage
