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
    CardTitle, CardText, CardBtnWrapper
} from '../ProjectSection/ProjectElements'
import React, { useState } from 'react'
import { ButtonLink } from '../ButtonElements'
import Project1 from '../../images/playtraditionalgame.jpg'
import Project2 from '../../images/kawanbantu.jpg'

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
                                    <CardTitle>Traditional Game</CardTitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</CardText>
                                    <CardBtnWrapper>
                                        <ButtonLink href="https://play-traditional-game.netlify.app/" target="blank" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                                            Live Demo
                                        </ButtonLink>
                                    </CardBtnWrapper>
                                </ImageWrapper>
                            </CardCol>
                            <CardCol>
                                <ImageWrapper>
                                    <Img src={Project2} />
                                    <CardTitle>Kawan Bantu</CardTitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</CardText>
                                    <CardBtnWrapper>
                                        <ButtonLink href="https://kawan-bantu-mukhlishaka.netlify.app/" target="blank" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                                            Live Demo
                                        </ButtonLink>
                                    </CardBtnWrapper>
                                </ImageWrapper>
                            </CardCol>
                            <CardCol>
                                <ImageWrapper>
                                    <Img src={Project1} />
                                    <CardTitle>Kawan Bantu</CardTitle>
                                    <CardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</CardText>
                                    <CardBtnWrapper>
                                        <ButtonLink href="https://kawan-bantu-mukhlishaka.netlify.app/" target="blank" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">
                                            Live Demo
                                        </ButtonLink>
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