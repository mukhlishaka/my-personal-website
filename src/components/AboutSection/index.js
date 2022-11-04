import { useState } from 'react'
import { Button } from '../ButtonElements'
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
        <AboutContainer>
            <AboutBg>
                <AboutContent>
                    <ImageWrapper>
                        <Img src={Foto} />
                    </ImageWrapper>
                    <TextWrapper>
                        <AboutTitle>About Me</AboutTitle>
                        <AboutSubTitle>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium deserunt debitis error perferendis ipsam optio suscipit, deleniti inventore. Omnis labore nulla explicabo repellat dolorum provident est incidunt nisi, asperiores velit repudiandae amet tenetur neque nam deleniti adipisci debitis veritatis accusantium.
                        </AboutSubTitle>
                        <AboutBtn>
                            <Button to="login" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                                Resume
                            </Button>
                        </AboutBtn>
                    </TextWrapper>
                </AboutContent>
            </AboutBg>
        </AboutContainer>
    )
}

export default About