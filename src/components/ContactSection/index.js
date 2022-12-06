import React from 'react'
import { useState } from 'react'
import { Button } from '../ButtonElements'
import {
    ContactContainer,
    ContactBg,
    ContactContent,
    TextWrapper,
    ContactTitle,
    ContactFormWrapper,
    Form,
    FormLabel,
    FormInput,
    FormBtnWrapper,
    FormTextArea
} from '../ContactSection/ContactElements'

const Contact = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <ContactContainer name="contact">
            <ContactBg>
                <TextWrapper>
                    <ContactTitle>Contact For Service</ContactTitle>
                </TextWrapper>
                <ContactContent>
                    <ContactFormWrapper>
                        <Form>
                            <FormLabel>Fullname</FormLabel>
                            <FormInput type="name" placeholder="Enter Your Name" />
                        </Form>
                        <Form>
                            <FormLabel>Email</FormLabel>
                            <FormInput type="email" placeholder="Enter Your Email" />
                        </Form>
                        <Form>
                            <FormLabel>Message</FormLabel>
                            <FormTextArea type="text" placeholder="Enter Your Message"></FormTextArea>
                        </Form>
                        <FormBtnWrapper>
                            <Button to="login" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Send</Button>
                        </FormBtnWrapper>
                    </ContactFormWrapper>
                </ContactContent>
            </ContactBg>
        </ContactContainer>
    )
}

export default Contact