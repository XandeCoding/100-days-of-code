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

const NavLinks = styled.div `
  font-size: 1.8rem;

  a {
    cursor: pointer;
    margin: 0 1rem;
  }

  svg {
    margin-left: 2.3rem;
    margin-right: -2rem;
  }
`

const HeaderComponent = ({ siteTitle }) => {
  return (
    <Header>
      <div>
        <h1>
          <Link to="/">
            {siteTitle}
          </Link>
        </h1> 
        <NavLinks>
          <Link to="/">
              Home
          </Link>
          <Link to="/">
              Shop
          </Link>
          <Link to="/">
              Contact
          </Link>
          <Link to="/">
            <CartAlt size="32" />            
          </Link>
        </NavLinks>      
      </div>
    </Header>   
  )  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}


export default HeaderComponent
