import React from 'react'
import FotoSkill from '../../images/skill.png'
import {
    SkillContainter,
    SkillBg,
    SkillContent,
    TextWrapper,
    SkillTitle,
    ImageWrapper,
    Img,
} from '../SkillSection/SkillElements'

const Skill = () => {
    return (
        <SkillContainter name="skill">
            <SkillBg>
                <SkillContent>
                    <TextWrapper>
                        <SkillTitle>Expertise</SkillTitle>
                    </TextWrapper>
                    <ImageWrapper>
                        <Img src={FotoSkill} />
                    </ImageWrapper>
                </SkillContent>
            </SkillBg>
        </SkillContainter>
    )
}

export default Skill