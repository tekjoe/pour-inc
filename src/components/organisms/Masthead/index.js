import * as React from "react"
import styled from "styled-components"
import { Button } from "../../atoms/Button"
import { StaticImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"

const Masthead = styled.section`
  background-color: ${({ theme }) => theme.colors.codGray};
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    height: 820px;
  }
`

Masthead.Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 4rem 1.5rem 11rem 1.5rem;
  z-index: 1000;
  h1 {
    font-weight: 300;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  p {
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    padding: 4rem 6rem 11.5rem;
    h1 {
      font-size: 3rem;
    }
  }
  @media (min-width: 992px) {
    padding: 4rem 1.5rem;
    grid-column: 2 / span 5;
    grid-row: 1;
    text-align: left;
    align-items: flex-start;
    h1 {
      font-size: ${({ theme }) => theme.typography.h1};
      max-width: 12ch;
    }
    p {
      max-width: 35ch;
    }
  }
  @media (min-width: 1200px) {
    grid-column: 3 / span 5;
  }
  @media (min-width: 1400px) {
    grid-column: 4 / span 5;
  }
`

Masthead.Image = styled.div`
  height: 20rem;
  grid-row: 1;
  position: relative;
  @media (min-width: 768px) {
    height: 23rem;
  }
  @media (min-width: 992px) {
    grid-column: 6 / -1;
    height: 820px;
  }
`

const AnimatedTitle = styled(motion.h1)`
  font-weight: 300;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    font-size: 3rem;
  }
  @media (min-width: 992px) {
    font-size: ${({ theme }) => theme.typography.h1};
    max-width: 12ch;
  }
`

const ImageWiper = styled(motion.div)`
  position: absolute;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.codGray};
  z-index: 50;
`

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.04, 0.9] }

export default () => {
  return (
    <Masthead>
      <Masthead.Body>
        <AnimatedTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { ...transition },
          }}
        >
          Raising the bar at your next event
        </AnimatedTitle>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.5, ...transition },
          }}
        >
          Pour Inc. is a professional Mobile Bartending Service based in
          Milwaukee, Wisconsin, offering a high-quality experience achieved
          through years of expertise in the event industry.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.75, ...transition },
          }}
        >
          <Button to="/">Book an Event</Button>
        </motion.div>
      </Masthead.Body>
      <Masthead.Image>
        <ImageWiper
          initial={{ width: "100%" }}
          animate={{
            width: 0,
            transition: { delay: 0.8, ...transition },
          }}
        />
        <StaticImage
          src="../../../images/masthead-placeholder.jpg"
          alt="A signature Pour Inc. cocktail"
          placeholder="blurred"
          layout="fullWidth"
          style={{ height: "100%" }}
        />
      </Masthead.Image>
    </Masthead>
  )
}
