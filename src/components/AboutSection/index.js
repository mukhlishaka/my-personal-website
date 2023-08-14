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
                            Hello there! I'm Mukhlis, an experienced professional with a unique background in finance and web development. With 2 years of experience as a Finance Project Staff and graduating from a Fullstack Web Development bootcamp last year, I bring a diverse skill set to the table and I'm ready for new challenges.
                        </AboutSubTitle>
                        <AboutBtn>
                            <ButtonLink href='https://drive.google.com/file/d/1Va-mRxnW5UVz7wTjfSki1MSdhTrf5sDA/view?usp=sharing' target='blank' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
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