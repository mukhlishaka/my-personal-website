import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import ReactLoading from 'react-loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();

        if (!formIsValid()) {
            return;
        }

        setIsLoading(true);

        try {
            const result = await emailjs.sendForm(
                'service_6gvxme7',
                'template_2fvv3j4',
                form.current,
                'PmAV134Km_aqFeRkq'
            );

            console.log(result.text);
            console.log('message sent successfully');
            toast.success('Message sent successfully!', {
                position: 'bottom-right',
                autoClose: 3000, // 3 seconds
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            form.current.reset();
        } catch (error) {
            console.log(error.text);
        } finally {
            setIsLoading(false);
        }
    };

    const formIsValid = () => {
        const inputs = form.current.getElementsByTagName('input');
        let isValid = true;

        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].hasAttribute('required') && !inputs[i].value) {
                isValid = false;
                break;
            }
        }

        return isValid;
    };

    return (
        <div className='container' name="contact">
            <div className='background'>
                <div className='heading'>
                    Contact Me
                </div>
                <div className='contentWrapper'>
                    <form className='formWrapper' ref={form} onSubmit={sendEmail}>
                        <label className='my-label-class'>Name</label>
                        <input className='my-input-class' type="text" name="user_name" required />
                        <label className='my-label-class'>Email</label>
                        <input className='my-input-class' type="email" name="user_email" required />
                        <label className='my-label-class'>Message</label>
                        <textarea className='my-input-area' name="message" required />
                        <button className='custom-button' type='submit' disabled={isLoading}>
                            {isLoading ? (
                                <div className='center-spinner'>
                                    <ReactLoading type='spin' color='#fff' height={20} width={20} />
                                </div>
                            ) : (
                                'Kirim'
                            )}
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Contact;