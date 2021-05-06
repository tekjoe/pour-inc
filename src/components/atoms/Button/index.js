import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ inverse, theme }) =>
    inverse ? theme.colors.codGray : "transparent"};
  cursor: pointer;
  display: inline-block;
  color: white;
  text-decoration: none;
  padding: 1.5rem 3.5rem;
  border: 1px solid white;
  transition: all 0.3s ease-in-out;
  font-weight: 600;
  width: max-content;
  &:hover {
    background: white;
    border: ${({ inverse, theme }) =>
      inverse ? `1px solid ${theme.colors.codGray}` : "1px solid white"};
    color: ${({ theme }) => theme.colors.codGray};
  }
`
