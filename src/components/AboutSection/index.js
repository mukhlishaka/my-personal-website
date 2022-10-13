import React, { useState } from "react";
import { Button } from "../ButtonElements";
import {
    AboutContainer,
    AboutWrapper,
    AboutRow,
    Column1,
    TextWrapper,
    Heading,
    Subtitle,
    BtnWrap,
    Column2,
    ImgWrap,
    Img,
} from "./AboutElements";
import profile from "../../images/profile.png";

const index = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <AboutContainer>
            <AboutWrapper>
                <AboutRow>
                    <Column1>
                        <ImgWrap>
                            <Img src={profile} alt="photo" />
                        </ImgWrap>
                    </Column1>
                    <Column2>
                        <TextWrapper>
                            <Heading>About Me</Heading>
                            <Subtitle>
                                Saya adalah seorang lulusan Akuntansi yang saat
                                ini sedang beralih profesi menjadi seorang
                                Frontend Developer melalui Pelatihan Fullstack
                                Web Development di Binar Academy.
                            </Subtitle>
                            <BtnWrap>
                                <Button
                                    to={{
                                        pathname:
                                            "https://drive.google.com/file/d/1zFA7_UV2RAPb8MAYE1a8FPrmhullwnbk/view",
                                    }}
                                    target="_blank"
                                    onMouseEnter={onHover}
                                    onMouseLeave={onHover}
                                    primary="true"
                                    dark="true"
                                >
                                    Download Resume
                                </Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column2>
                </AboutRow>
            </AboutWrapper>
        </AboutContainer>
    );
};

export default index;
