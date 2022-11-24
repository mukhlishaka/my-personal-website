import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;
    position: relative;

    @media screen and (max-width: 768px) {
        height: 60vh;
    }

    @media screen and (max-width: 576px) {
        height: 65vh;
    }

    @media screen and (max-width: 360px) {
        height: 70vh;
    }
`

export const ContactBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
`

export const ContactContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`

export const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

export const ContactTitle = styled.h1`
    font-size: 40px;
    font-weight: 700;

    @media screen and (max-width: 768px) {
        font-size: 25px;
        margin-top: 10px;
    }
`

export const ContactFormWrapper = styled.div`
    background-color: #DFF6FF;
    padding: 20px;
    border-radius: 20px;

    @media screen and (max-width: 420px) {
        
    }
`

export const Form = styled.form`
    margin: 10px auto;

    
`

export const FormLabel = styled.label`
    display: flex;
    font-weight: bold;
    margin-bottom: 10px;
`

export const FormInput = styled.input`
    padding: 10px 200px;
    border-radius: 10px;

    @media screen and (max-width: 768px) {
        padding: 10px 50px;
    }
`

export const FormBtnWrapper = styled.div`
    margin-top: 20px;
`