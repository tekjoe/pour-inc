import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: ${({ theme }) => theme.typography.h1};
  font-weight: bold;
  position: relative;
  transition: all 0.3s ease-in-out;
  z-index: 101;
  &::after {
    content: "";
    background: hsl(0 100% 100% / 10%);
    height: 0;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    &::after {
      height: 50%;
    }
  }
`

const Details = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 2;
`

Details.Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h2,
  p {
    position: relative;
  }
  h2 {
    max-width: 420px;
    font-size: ${({ theme }) => theme.typography.h2};
    font-weight: bold;
  }
  p {
    font-size: 1.25rem;
    font-weight: bold;
  }
`

const NavMenu = styled(motion.div)`
  background: hsl(0, 0%, 15%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  align-items: center;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

const NavItem = styled(motion.li)`
  position: relative;
`

const NavMask = styled(motion.div)`
  position: absolute;
  background: hsl(0, 0%, 15%);
  width: 100%;
  z-index: 120;
`

const DetailsMask = styled(motion.div)`
  position: absolute;
  background: ${({ theme }) => theme.colors.codGray};
  width: 100%;
  z-index: 120;
`

const Navigation = styled(motion.div)`
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 100;
  top: 0;
  left: 0;
  background: ${({ theme }) => theme.colors.codGray};
  color: white;
  display: flex;
`

const FullNav = ({ isOpen }) => {
  const variants = {
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.4,
        staggerDirection: 1,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
        when: "afterChildren",
        staggerDirection: -1,
      },
    },
  }

  const details = {
    open: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.4,
        staggerDirection: 1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
        when: "afterChildren",
        staggerDirection: -1,
      },
    },
  }

  const navMenu = {
    open: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.4,
        staggerDirection: 1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
        when: "afterChildren",
        staggerDirection: -1,
      },
    },
  }

  const navItem = {
    open: {
      height: 0,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.4,
        staggerDirection: 1,
      },
    },
    closed: {
      height: "100%",
      transition: {
        staggerChildren: 0.4,
        delayChildren: 0.4,
        when: "afterChildren",
        staggerDirection: -1,
      },
    },
  }

  return (
    <Navigation
      isOpen={isOpen}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
    >
      <Details>
        <Details.Body>
          <h2>
            <DetailsMask variants={navItem} />
            Let's raise the bar at your next event.
          </h2>
          <p>
            <DetailsMask variants={navItem} />
            (414) 559-7394
          </p>
          <p>
            <DetailsMask variants={navItem} />
            info@pourinc.co
          </p>
          <p>
            <DetailsMask variants={navItem} />
            5517A W North Ave, Milwaukee, WI 53208
          </p>
        </Details.Body>
      </Details>
      <NavMenu>
        <ul>
          <NavItem>
            <NavMask variants={navItem} />
            <NavLink to="/services">Services</NavLink>
          </NavItem>
          <NavItem>
            <NavMask variants={navItem} />
            <NavLink to="/about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavMask variants={navItem} />
            <NavLink to="/">Partners</NavLink>
          </NavItem>
          <NavItem>
            <NavMask variants={navItem} />
            <NavLink to="/contact">Contact</NavLink>
          </NavItem>
        </ul>
      </NavMenu>
    </Navigation>
  )
}

export default FullNav
