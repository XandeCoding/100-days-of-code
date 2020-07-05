import React from "react"
import styled from "styled-components"

const Search = styled.div `
    display: block;
    text-align: center;

    input {
        color: #2d4059;
        border-radius: 0.65rem;
    }
`

const WideSearchBarComponent = () => (
    <Search>
        <input type="search" />
    </Search>
)

export default WideSearchBarComponent