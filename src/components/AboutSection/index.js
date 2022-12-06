import { useState } from 'react'
import { ButtonLink } from '../ButtonElements'
import {
    AboutContainer,
    AboutBg,
    AboutContent,
    ImageWrapper,
    Img,
    TextWrapper,
    AboutTitle,
    AboutSubTitle,
    AboutBtn
} from '../AboutSection/AboutElements'
import Foto from '../../images/foto.jpg'

const About = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <AboutContainer name="about">
            <AboutBg>
                <AboutContent>
                    <ImageWrapper>
                        <Img src={Foto} />
                    </ImageWrapper>
                    <TextWrapper>
                        <AboutTitle>About Me</AboutTitle>
                        <AboutSubTitle>
                            Perkenalkan nama saya Mukhlis Haliqul Karim. Saya adalah seorang lulusan Akuntansi yang saat ini sedang beralih profesi menjadi seorang Frontend Developer melalui Pelatihan Fullstack Web Development di Binar Academy. Selain itu, saat ini saya juga seorang Gaming Streamer Partner di platform Facebook Gaming. 
                        </AboutSubTitle>
                        <AboutBtn>
                            <ButtonLink href='https://drive.google.com/file/d/1XpQx4jnqNBzAhIXCjgqoCNzq07hVEM9n/view?usp=sharing' target='blank' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                                Resume
                            </ButtonLink>
                        </AboutBtn>
                    </TextWrapper>
                </AboutContent>
            </AboutBg>
        </AboutContainer>
    )
}

export default About