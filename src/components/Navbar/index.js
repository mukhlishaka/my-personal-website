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
                    <NavLogo to="/">
                        <ImageLogo src={Logo} /> Home
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="skill" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Skill</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="project" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Project</NavLinks>
                        </NavItem>
                        <NavBtn>
                            <NavBtnLink to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavBtnLink>
                        </NavBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar