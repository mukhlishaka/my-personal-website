import styled from "styled-components";
import {MdKeyboardArrowRight, MdArrowForward} from "react-icons/md"

export const HeroContainer = styled.div`
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 75vh;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparant);
        z-index: 2;
    }

    @media screen and (max-width: 768px) {
        height: 60vh;
    }

    @media screen and (max-width: 576px) {
        height: 60vh;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #DFF6FF;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH2 = styled.h2`
    color: #06283D;
    font-size: 36px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const HeroH1 = styled.h1`
    margin-top: 20px;
    color: #47B5FF;
    font-size: 54px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 42px;
    }

    @media screen and (max-width: 480px) {
        font-size: 36px;
    }
`

export const HeroP = styled.p`
    margin-top: 20px;
    color: #06283D;
    font-size: 20px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }

    @media screen and (max-width: 480px) {
        font-size: 12px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`