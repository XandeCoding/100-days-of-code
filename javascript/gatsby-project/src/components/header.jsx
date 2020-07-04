import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"
import { CartAlt } from "@styled-icons/boxicons-solid"

const Header = styled.header ` 
  background: #ea5455;
  margin-bottom: 1.45rem;
  text-decoration: none;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 960;
    padding: 1.45rem 1.0875rem
  }
`

const Icon = styled.a `
  cursor: pointer;
`

const HeaderComponent = ({ siteTitle }) => (
  <Header>
    <div>
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>    
      <Icon>
        <CartAlt size="32"></CartAlt>
      </Icon>  
    </div>
  </Header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default HeaderComponent
