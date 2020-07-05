import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import  styled, { createGlobalStyle }from 'styled-components'

import HeaderComponent from "./header"
import WideSearchBarComponent from "./commons/searchBar"



const GlobalStyles = createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  a {
    text-decoration: none;
    color: white;
  }
`

const Wrapper = styled.section `
  margin: 0 auto;
  max-width: 960px;
  padding: 1 1.0875rem 1.45rem;
`

const Layout = ({ children }) => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />
      <HeaderComponent siteTitle={ site.siteMetadata.title } />
      <WideSearchBarComponent />
      <Wrapper>
        <main>{children}</main>
        <footer>
          © { new Date().getFullYear() }, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout
