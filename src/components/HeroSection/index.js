import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import {
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH2,
    HeroH1,
    HeroBtnWrapper,
    HeroP,
    ArrowForward,
    ArrowRight
} from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer name="home">
            <HeroBg></HeroBg>
            <HeroContent>
                <HeroH2>Hi, I'm</HeroH2>
                <HeroH1>Mukhlis Haliqul Karim</HeroH1>
                <HeroP>
                    Frontend Developer, Gaming Streamer and Enterprenuer
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80} onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                        Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection