import React from 'react';
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SideBtnWrap,
    SidebarLink,
    SidebarRoute,
    SidebarWrapper,
    SidebarMenu
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-70} onClick={toggle}>About</SidebarLink>
                    <SidebarLink to='skill' smooth={true} duration={500} spy={true} exact='true' offset={-70} onClick={toggle}>Skill</SidebarLink>
                    <SidebarLink to='project' smooth={true} duration={500} spy={true} exact='true' offset={-70} onClick={toggle}>Project</SidebarLink>
                    <SideBtnWrap>
                        <SidebarRoute to="contact" onClick={toggle}>Contact</SidebarRoute>
                    </SideBtnWrap>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar