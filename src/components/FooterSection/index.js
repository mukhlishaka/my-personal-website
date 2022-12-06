import React from "react";
import {
    FooterContainer,
    FooterWrap,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    FooterLinkImage,
    Img,
    FooterText,
    MobileIcon,
    IconItem,
    LinkIcon
} from "../FooterSection/FooterElements";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import Logo from '../../images/hakalogowhite.png'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinkContainer>
                        <FooterLinkWrapper>
                            <FooterLinkItems>
                                <FooterLinkImage>
                                    <Img src={Logo} />
                                </FooterLinkImage>
                                <FooterText>
                                    Jl. Taman Nuri Blok NC. 2 Nomor 15, Pasar Kemis, Kabupaten Tangerang
                                </FooterText>
                                <MobileIcon>
                                    <IconItem>
                                        <LinkIcon href="https://www.youtube.com/channel/UCdqgiGegCYxUEwlwaDHddqQ" target="blank">
                                            <FaYoutube />
                                        </LinkIcon>
                                    </IconItem>
                                    <IconItem>
                                        <LinkIcon href="https://www.tiktok.com/@mukhlishaka" target="blank">
                                            <FaTiktok />
                                        </LinkIcon>
                                    </IconItem>
                                    <IconItem>
                                        <LinkIcon href="https://www.instagram.com/mukhlishaka/" target="blank">
                                            <FaInstagram />
                                        </LinkIcon>
                                    </IconItem>
                                </MobileIcon>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>
                                    Mukhlis Haka Website
                                </FooterLinkTitle>
                                <FooterLink to="/">Home</FooterLink>
                                <FooterLink to="/">About</FooterLink>
                                <FooterLink to="/">Project</FooterLink>
                                <FooterLink to="/">Contact Me</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>My Email for Business</FooterLinkTitle>
                                <FooterLink>mukhlishaka@gmail.com</FooterLink>
                            </FooterLinkItems>
                        </FooterLinkWrapper>
                    </FooterLinkContainer>
                </FooterWrap>
            </FooterContainer>
        </>
    );
};

export default Footer;
