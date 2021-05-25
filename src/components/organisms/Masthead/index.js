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
    height: ${({ size }) => (size === "small" ? "30rem" : "820px")};
  }
  @media (min-width: 1200px) {
    height: ${({ size }) => (size === "small" ? "35rem" : "820px")};
    height: ${({ size }) => (size === "extraSmall" ? "30rem" : "")};
  }
`

Masthead.Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: ${({ size }) =>
    size === "small" ? "4rem 1.5rem 7rem 1.5rem" : "4rem 1.5rem 11rem 1.5rem"};
  padding: ${({ size }) => (size === "extraSmall" ? "4rem 1.5rem" : "")};
  z-index: 14;
  h1 {
    font-weight: 300;
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  p {
    margin-bottom: 2rem;
  }
  @media (min-width: 768px) {
    padding: ${({ size }) =>
      size === "small" ? "4rem 1.5rem 7rem 1.5rem" : "4rem 6rem 11.5rem"};
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
  @media (min-width: 992px) {
    height: ${({ size }) => (size === "small" ? "30rem" : "51.25rem")};
    grid-column: 6 / -1;
  }
  @media (min-width: 1200px) {
    height: ${({ size }) => (size === "small" ? "35rem" : "51.25rem")};
    height: ${({ size }) => (size === "extraSmall" ? "30rem" : "")};
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
  z-index: 13;
`

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.04, 0.9] }

export default ({ title, subtitle, button, size }) => {
  return (
    <Masthead size={size}>
      <Masthead.Body size={size}>
        <AnimatedTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { ...transition },
          }}
        >
          {title}
        </AnimatedTitle>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { ...transition },
          }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { ...transition },
          }}
        >
          {button ? <Button to="/contact">Book an Event</Button> : null}
        </motion.div>
      </Masthead.Body>
      <Masthead.Image size={size}>
        <ImageWiper
          initial={{ width: "100%" }}
          animate={{
            width: 0,
            transition: { ...transition },
          }}
        />
        <StaticImage
          src="../../../images/masthead-placeholder.jpg"
          alt="A signature Pour Inc. cocktail"
          placeholder="blurred"
          layout="fullWidth"
          style={{ height: "100%" }}
          imgStyle={{ objectFit: "cover" }}
        />
      </Masthead.Image>
    </Masthead>
  )
}
