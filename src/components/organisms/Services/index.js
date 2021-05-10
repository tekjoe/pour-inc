import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { useState } from "react"
import styled from "styled-components"
import { Button } from "../../atoms/Button"
import { Container } from "../../atoms/Container"
import { Row, Col } from "../../atoms/Layout"
import lines from "../../../images/pattern-lines.svg"

const Section = styled.section`
  padding: 5rem 0;
  @media (min-width: 992px) {
    padding: 10rem 0;
  }
`

const ServiceImage = styled.div`
  box-shadow: 0 75px 100px -50px hsl(219 20% 28% / 50%);
  position: relative;
  @media (min-width: 768px) {
    &::before {
      position: absolute;
      content: "";
      height: 20rem;
      width: 150%;
      background: hsl(219 14% 42% / 8%);
      top: -5rem;
      left: -85%;
      border-radius: 0 100px 0 0;
    }
    &::after {
      position: absolute;
      content: url(${lines});
      z-index: 1000;
      top: -2rem;
      left: -3.5rem;
    }
  }
  @media (min-width: 992px) {
    &::before {
      position: absolute;
      content: "";
      height: 20rem;
      width: 150%;
      background: hsl(219 14% 42% / 8%);
      top: -10rem;
      left: -85%;
      border-radius: 0 100px 0 0;
    }
  }
`

const ServiceDescription = styled.div`
  text-align: center;
  h3 {
    font-size: ${({ theme }) => theme.typography.h2};
    font-weight: bold;
    margin-bottom: 1rem;
  }
  @media (min-width: 768px) {
    order: 1;
    margin-bottom: 4rem;
  }
  @media (min-width: 992px) {
    text-align: left;
  }
`

const ServiceControls = styled.ul`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style-type: none;
  gap: 1.25rem;
  li {
    color: gray;
    width: 100%;
    border: none;
    background: none;
    font-size: ${({ theme }) => theme.typography.h4};
    font-family: ${({ theme }) => theme.typography.body};
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 1px;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    position: relative;
    &:hover > button {
      color: black;
    }
  }

  li.active {
    color: ${({ theme }) => theme.colors.codGray};
    &::before {
      content: "";
      height: 2px;
      background: ${({ theme }) => theme.colors.beaver};
      width: 3rem;
      position: absolute;
      bottom: -0.5rem;
      left: calc(50% - 1.5rem);
      transition: all 0.3s ease-in-out;
    }
    @media (min-width: 992px) {
      &::before {
        content: "";
        height: 2px;
        background: ${({ theme }) => theme.colors.beaver};
        width: 6rem;
        position: absolute;
        left: -9rem;
        top: 50%;
      }
    }
    @media (min-width: 1200px) {
      &::before {
        left: -8rem;
      }
    }
    @media (min-width: 1200px) {
      &::before {
        left: -11rem;
      }
    }
    button {
      color: black;
    }
  }
  li.active:hover {
    &::before {
      width: 7rem;
    }
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3rem;
    li {
      width: auto;
    }
  }
  @media (min-width: 992px) {
    li {
      text-align: left;
    }
    order: 2;
    flex-direction: column;
    justify-content: flex-start;
  }
`

const Service = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 992px) {
    padding-left: 4rem;
  }
  @media (min-width: 1200px) {
    padding-left: 5rem;
  }
  @media (min-width: 1400px) {
    padding-left: 8rem;
  }
`

const barServicesImage = (
  <StaticImage
    src="../../../images/cocktail_consultation.jpg"
    layout="fullWidth"
    aspectRatio={1}
  />
)

const cocktailConsultationImage = (
  <StaticImage
    src="../../../images/bar_services-1.jpg"
    layout="fullWidth"
    aspectRatio={1}
  />
)

const barStaffingImage = (
  <StaticImage
    src="../../../images/bar_staff-1.jpg"
    layout="fullWidth"
    aspectRatio={1}
  />
)

const services = {
  cocktailConsultation: {
    title: "Cocktail Consultation",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae rerum quibusdam quidem inventore doloribus, fuga obcaecati voluptates nulla nemo optio omnis delectus minus voluptatem! Cocktails?",
    image: cocktailConsultationImage,
  },
  barServices: {
    title: "Premium Bar Services",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae rerum quibusdam quidem inventore doloribus, fuga obcaecati voluptates nulla nemo optio omnis delectus minus voluptatem! Services?",
    image: barServicesImage,
  },
  barStaffing: {
    title: "Professional Bar Staffing",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae rerum quibusdam quidem inventore doloribus, fuga obcaecati voluptates nulla nemo optio omnis delectus minus voluptatem! Staffing?",
    image: barStaffingImage,
  },
}

const Services = () => {
  const [service, setService] = useState("cocktailConsultation")
  const [active, setActive] = useState("cocktailConsultation")
  const handleClick = e => {
    e.preventDefault()
    setService(e.target.dataset.service)
    setActive(e.target.dataset.service)
  }
  return (
    <Section>
      <Container>
        <Row gap={3}>
          <Col>
            <ServiceImage>{services[service].image}</ServiceImage>
          </Col>
          <Col justify="center">
            <Service>
              <ServiceControls>
                <li
                  className={active === "cocktailConsultation" ? "active" : ""}
                  onClick={handleClick}
                  data-service="cocktailConsultation"
                >
                  Cocktail Consultation
                </li>
                <li
                  className={active === "barServices" ? "active" : ""}
                  onClick={handleClick}
                  data-service="barServices"
                >
                  Bar Services
                </li>
                <li
                  className={active === "barStaffing" ? "active" : ""}
                  onClick={handleClick}
                  data-service="barStaffing"
                >
                  Bar Staffing
                </li>
              </ServiceControls>
              <ServiceDescription>
                <h3>{services[service].title}</h3>
                <p>{services[service].description}</p>
                <Button inverse to="/">
                  Learn More
                </Button>
              </ServiceDescription>
            </Service>
          </Col>
        </Row>
      </Container>
    </Section>
  )
}

export default Services
