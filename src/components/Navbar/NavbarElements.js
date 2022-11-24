import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: #FFF;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #06283D;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    text-decoration: none;

    &:hover {
        color: #47B5FF;
        transition: 0.2s ease-in-out;
    }
`

export const ImageLogo = styled.img`
    height: 50px;
    width: 100%;
    margin-right: 10px;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #06283D;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: 24px;
    font-size: 1.1rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color: #06283D;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.0rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: #47B5FF;
        transition: 0.2s ease-in-out;
    }

    &:active {
        border-bottom: 3px solid #06283D;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #06283D;
    white-space: nowrap;
    padding: 12px 30px;
    color: #fff;
    font-size: 1.1rem;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #47B5FF;
        color: #fff;
    }
`