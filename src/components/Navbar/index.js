import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    ImageLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'
import Logo from '../../images/hakalogodark.png'

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLinks to="home" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        <NavLogo to="/">
                            <ImageLogo src={Logo} /> Home
                        </NavLogo>
                    </NavLinks>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skill" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skill
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="project" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Project
                            </NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                                <NavBtnLink to="/">Contact</NavBtnLink>
                            </NavLinks>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar