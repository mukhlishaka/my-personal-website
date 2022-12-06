import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
    position: relative;

    @media screen and (max-width: 768px) {
        height: 80vh;
    }

    @media screen and (max-width: 576px) {
        height: 105vh;
    }

    @media screen and (max-width: 360px) {
        height: 110vh;
    }
`

export const AboutBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
`

export const AboutContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const ImageWrapper = styled.div`
    max-width: 540px;
    height: 100%;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`

export const Img = styled.img`
    width: 400px;
    height: 400px;
    left: 96px;
    top: 166px;

    @media screen and (max-width: 768px) {
        width: 300px;
        height: 100%;
    }
`

export const TextWrapper = styled.div`
    margin-left: 60px;
    margin-right: 60px;
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const AboutTitle = styled.h1`
    margin-bottom: 24px;
    font-size: 40px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 30px;
        margin-top: 30px;
    }
`

export const AboutSubTitle = styled.p`
    max-width: 450px;
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 24px;
    color: #6d7d8b;
    text-align: justify;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`

export const AboutBtn = styled.div`
    margin-top: 20px;
    float: left;

    @media screen and (max-width: 768px){
        margin-top: -10px
    }
    
`
