import {
    ProjectContainer,
    ProjectBg,
    ProjectContent,
    TextWrapper1,
    Heading,
    CardRow,
    CardCol,
    ImageWrapper,
    Img,
    CardTitle, CardText, CardBtnWrapper, ArrowForward, ArrowRight
} from '../ProjectSection/ProjectElements'
import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import Project1 from '../../images/kawanbantu.jpg'

const Project = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <ProjectContainer name="project">
                <ProjectBg>
                    <ProjectContent>
                        <TextWrapper1>
                            <Heading>Project Experience</Heading>
                        </TextWrapper1>
                        <CardRow>
                            <CardCol>
                                <ImageWrapper>
                                    <Img src={Project1} />
                                    <CardTitle>Kawan Bantu</CardTitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</CardText>
                                    <CardBtnWrapper>
                                        <Button to="login" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                                            Live Demo {hover ? <ArrowForward /> : <ArrowRight />}
                                        </Button>
                                    </CardBtnWrapper>
                                </ImageWrapper>
                            </CardCol>
                            <CardCol>
                                <ImageWrapper>
                                    <Img src={Project1} />
                                    <CardTitle>Kawan Bantu</CardTitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</CardText>
                                    <CardBtnWrapper>
                                        <Button to="login" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                                            Live Demo {hover ? <ArrowForward /> : <ArrowRight />}
                                        </Button>
                                    </CardBtnWrapper>
                                </ImageWrapper>
                            </CardCol>
                            <CardCol>
                                <ImageWrapper>
                                    <Img src={Project1} />
                                    <CardTitle>Kawan Bantu</CardTitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</CardText>
                                    <CardBtnWrapper>
                                        <Button to="login" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                                            Live Demo {hover ? <ArrowForward /> : <ArrowRight />}
                                        </Button>
                                    </CardBtnWrapper>
                                </ImageWrapper>
                            </CardCol>
                        </CardRow>
                    </ProjectContent>
                </ProjectBg>
            </ProjectContainer>
        </>
    )
}

export default Project