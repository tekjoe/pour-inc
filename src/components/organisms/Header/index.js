import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useViewportScroll, useTransform } from "framer-motion"
import Navigation from "../Navigation"
import { Container } from "../../atoms/Container"

const _Header = styled.header`
  position: fixed;
  z-index: 15;
  top: 0;
  width: 100%;
  transition: background 0.3s ease-in-out;
  background: ${({ theme, yValue }) =>
    yValue > 0 ? theme.colors.codGray : "none"};
`

const Header = ({ siteTitle }) => {
  const { scrollYProgress } = useViewportScroll()
  const [yValue, setYValue] = useState(scrollYProgress.current)
  useEffect(() => scrollYProgress.onChange(v => setYValue(v)), [
    scrollYProgress,
  ])
  return (
    <_Header yValue={yValue}>
      <Container>
        <Navigation />
      </Container>
    </_Header>
  )
}

export default Header
