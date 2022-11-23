import styled from "styled-components";
import { MdKeyboardArrowRight, MdArrowForward } from "react-icons/md"

export const ProjectContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
    position: relative;

    @media screen and (max-width: 768px) {
        height: 220vh;
    }

    @media screen and (max-width: 420px) {
        height: 160vh;
    }
`

export const ProjectBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #DFF6FF;
`

export const ProjectContent = styled.div`

`

export const TextWrapper1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

export const Heading = styled.h1`
    font-size: 40px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 30px;
        margin-top: 20px;
    }
`

export const CardRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto 150px;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const CardCol = styled.div`
    height: 320px;
    width: 300px;
    border-radius: 20px;
    margin-top: 30px;
    border: 2px solid black;
    padding: 10px;
`

export const ImageWrapper = styled.div`

`

export const Img = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 20px;
`

export const CardTitle = styled.h2`
    display: flex;
    justify-content: start;
    margin-top: 10px;
`

export const CardText = styled.p`
    margin-top: 10px;
`

export const CardBtnWrapper = styled.div`
    margin-top: 10px;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
