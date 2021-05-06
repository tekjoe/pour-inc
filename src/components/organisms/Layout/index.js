import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled, { ThemeProvider } from "styled-components"
import pourTheme from "../../../util/theme"
import { GlobalStyle } from "../../../util/global"
import Header from "../Header"
import Footer from "../Footer"

const Main = styled.main`
  overflow: hidden;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={pourTheme}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
