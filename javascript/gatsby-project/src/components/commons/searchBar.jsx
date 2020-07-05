import React from "react"
import styled from "styled-components"

const Search = styled.div `
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
    } 

    input[type="text"]::placeholder {
        color: #e16868
    }

    .s-cover {
        width: 1px;
        padding-left: 35px;
    }

    #s-circle {
        position: relative;
        top: -8px;
        left: 0;
        width: 43px;
        height: 43px;
        margin-top: 0;
        border-width: 15px;
        border: 15px solid #fff;
        background-color: transparent;
        border-radius: 50%;
        transition: 0.5s ease all;
    }

    #s-cover:hover #s-circle {
        top: -1px;
        width: 67px;
        height: 15px;
        border-width: 0;
        background-color: #fff;
        border-radius: 20px;
    }

    #s-cover:hover span {
        top: 50%;
        left: 56px;
        width: 25px;
        margin-top: -9px;
        transform: rotateZ(0);
    }

    #s-cover:hover {
        bottom: 11px;
        transform: rotateZ(52deg);
    }

    #s-cover:hover {
        bottom: -11px;
        transform: rotateZ(-52deg);
    }

    #s-cover:hover, #s-cover:hover {
        right: -6px;
        width: 40px;
        background-color: #fff;
    }

`

const WideSearchBarComponent = () => (
    <Search>
        <div className="tb">
        <div className="td"><input type="text" placeholder="Search" required /></div>
        <div className="td" id="s-cover">
            <button type="submit">
            <div id="s-circle"></div>
            <span></span>
            </button>
        </div>
        </div>
    </Search>
)

export default WideSearchBarComponent