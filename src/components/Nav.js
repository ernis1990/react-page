import React from "react";
import styled from "styled-components";

const Nav = () => {
    return(
        <StyledNav>
            <h1><a href="#">Capture</a></h1>
            <ul>
                <li>
                    <a href="#">1. About Us</a>
                </li>
                <li>
                    <a href="#">2. Our Work</a>
                </li>
                <li>
                    <a href="#">3. Contact US</a>
                </li>
            </ul>
        </StyledNav>
    );
};

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    a{
        color: white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    h1{
        font-family: "Lobster", cursive;
        font-weight: lighter;
        a{
            font-size: 2rem;
        }
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
`;

export default Nav;