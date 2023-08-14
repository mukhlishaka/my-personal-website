import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './contact.css'

const Contact = () => {
    // const [hover, setHover] = useState(false)

    // const onHover = () => {
    //     setHover(!hover)
    // }


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6gvxme7', 'template_2fvv3j4', form.current, 'PmAV134Km_aqFeRkq')
            .then((result) => {
                console.log(result.text);
                console.log('message send')
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='container'>
            <div className='background'>
                <div className='heading'>
                    Contact Me
                </div>
                <div className='contentWrapper'>
                    <form className='formWrapper' ref={form} onSubmit={sendEmail}>
                        <label className='my-label-class'>Name</label>
                        <input className='my-input-class' type="text" name="user_name" />
                        <label className='my-label-class'>Email</label>
                        <input className='my-input-class' type="email" name="user_email" />
                        <label className='my-label-class'>Message</label>
                        <textarea className='my-input-area' name="message" />
                        <button className='custom-button' type="submit" value="Send">Kirim</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact