import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Search } from '@styled-icons/boxicons-solid'

import SearchBarStore from '../../states/searchBarProvider'

const WrapperSearch = styled.div `
    display: block;
    text-align: center;

    padding: 1.5rem;
    background-color: #ff7575;
    border-radius: 20px;
    /* box-shadow: 0 10px 40px #ff7c7c, 0 0 0 20px #ffffffeb; */
    transform: scale(0.6);
    
    .tb {
        display: table;
        width: 100%;
    }

    .td {
        display: table-cell;
        vertical-align: middle;
    }

    input {
        color: #000;
        padding: 0;
        margin: 0;
        border: 0;
        background-color: transparent;
    }

    input[type="text"] {
        width: 100%;
        height: 96px;
        font-size: 60px;
        line-height: 1;
        color: #fff;
    } 

    input[type="text"]::placeholder {
        color: #e16868
    }
`

const WideSearchBarComponent = () => {
  const searchBar = SearchBarStore.useContainer()

  return (
  <WrapperSearch>
      <div className="tb">
          <div className="td">
              <input type="text" placeholder="Search"
                     value={ searchBar.value }
                     onChange={ searchBar.onChange }/>
          </div>
          <div className="td">
              <Search />           
          </div>
      </div>
  </WrapperSearch>
  )
}

WideSearchBarComponent.propTypes = {
    search: PropTypes.string.isRequired,
    update: PropTypes.func.isRequired
}

export default WideSearchBarComponent