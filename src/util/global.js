import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *,*::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };
  *:focus {
  }
  body {
    font-size: 1rem;
    font-family: ${({ theme }) => theme.typography.body};
    color: ${({ theme }) => theme.colors.codGray}; 
    transition-property: background, color;
  };
  p {
    font-size: ${({ theme }) => theme.typography.p};
    line-height: 1.6;
    margin-bottom: 1.25rem;
    letter-spacing: -0.22px;
    @media (min-width: 1024px) {
      font-size: 1.125rem;
    }
  }
  
  li {
    font-size: ${({ theme }) => theme.typography.p};
    @media (min-width: 1024px) {
      font-size: 1.125rem;
    }
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.typography.headings};
    font-weight: 600;
  }
  h1 {
      font-size: ${({ theme }) => theme.typography.h1};
      letter-spacing: -0.8px;
      line-height: 1.125
  }
  h2 {
    font-size: 2rem;
    @media (min-width: 992px) {
    font-size: ${({ theme }) => theme.typography.h2};
    }
  }
  h3 {
    font-size: ${({ theme }) => theme.typography.h3};
  }
  h4 {
    font-size: ${({ theme }) => theme.typography.h4};
   }
`
