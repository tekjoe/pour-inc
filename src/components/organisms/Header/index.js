import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useViewportScroll } from "framer-motion"
import { Container } from "../../atoms/Container"
import FullNav from "../FullNav"
import { StaticImage } from "gatsby-plugin-image"

const _Header = styled.header`
  position: fixed;
  z-index: 15;
  top: 0;
  width: 100%;
  transition: background 0.3s ease-in-out;
  background: ${({ theme, yValue }) =>
    yValue > 0 ? theme.colors.codGray : "none"};
`

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
  color: white;
  z-index: 200;
  position: relative;
`

const MenuToggle = styled.button`
  padding: 1.5rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: ${({ theme }) => theme.colors.beaver};
  span {
    width: 1rem;
    display: block;
    height: 2px;
    background: white;
    margin-bottom: 0.25rem;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`

const Header = () => {
  const { scrollYProgress } = useViewportScroll()
  const [yValue, setYValue] = useState(scrollYProgress.current)
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => scrollYProgress.onChange(v => setYValue(v)), [
    scrollYProgress,
  ])
  return (
    <_Header yValue={yValue}>
      <Container>
        <Controls>
          <div>
            <StaticImage
              src="../../../images/pour-logo-circle-white.png"
              layout="fixed"
              width={64}
            />
          </div>
          <MenuToggle onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </MenuToggle>
        </Controls>
        <FullNav isOpen={isOpen} />
      </Container>
    </_Header>
  )
}

export default Header
