import styled from "styled-components";

export const FooterContainer = styled.div`
    background-color: #181d29;
`

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinkContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
        padding-top: 32px;
    }
`

export const FooterLinkWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px;
    text-align: left;
    width: 250px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 18px;
    margin-bottom: 2rem;
`

export const FooterLink = styled.div`
    color: #fff;
    text-decoration: none;
    margin-bottom: 1rem;
    font-size: 14px;

    &:hover {
        color: #47B5FF;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`

export const FooterLinkImage = styled.div`
    margin-bottom: 1rem;
    cursor: pointer;
`

export const Img = styled.img`
    display: flex;
    height: 50px;
    width: 100%;
`

export const FooterText = styled.p`
    margin-bottom: 1rem;
    font-size: 12px;
`

export const MobileIcon = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
`

export const IconItem = styled.div`
    margin-top: 20px;
    margin-right: 30px;
    cursor: pointer;
`
