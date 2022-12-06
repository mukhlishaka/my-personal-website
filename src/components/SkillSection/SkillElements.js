import styled from "styled-components";

export const SkillContainter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
    position: relative;

    @media screen and (max-width: 768px) {
        height: 40vh;
    }

    @media screen and (max-width: 576px) {
        height: 40vh;
    }

    @media screen and (max-width: 360px) {
        height: 40vh;
    }
`

export const SkillBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
`

export const SkillContent = styled.div`

`

export const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

export const SkillTitle = styled.h1`
    font-size: 40px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 30px;
        margin-top: 20px;
    }
`

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Img = styled.img`
    width: 70%;
    height: 70%;
    margin-top: 30px;
    cursor: pointer;
`