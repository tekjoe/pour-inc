import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const DesktopNavigation = styled.div`
  display: none;
  padding: 1rem 0;
  color: white;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Left = styled.div``
const Middle = styled.div``
const Right = styled.div``

const Nav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    gap: 3rem;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  padding-bottom: 0.25rem;
  transition: all 0.3s ease-in-out;
  border-bottom: 2px solid rgba(0 0 0 / 0%);
  &.active {
    border-bottom: 2px solid white;
  }
  &:hover {
    border-bottom: 2px solid white;
  }
`

const Navigation = () => {
  return (
    <>
      <DesktopNavigation>
        <Left>
          <Link to="/">
            <StaticImage
              src="../../../images/pour-logo-circle-white.png"
              loading="eager"
              layout="fixed"
              width={65}
            />
          </Link>
        </Left>
        <Middle>
          <Nav>
            <ul>
              <li>
                <NavLink to="/services" activeClassName="active">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
          </Nav>
        </Middle>
        <Right>Cart</Right>
      </DesktopNavigation>
    </>
  )
}

export default Navigation
