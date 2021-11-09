import React from 'react'
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import "./contact.scss"

const SERVICE_ID = "message_from_portfolio";
const TEMPLATE_ID = "template_vuxa3bi"
const USER_ID = "user_FQW0A6ro9kPw1aVQ0SDDl"

export default function Contact() {
    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
    }
    return (
        <div className = "contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input name ="from_email" type="text" placeholder="Your email" />
                    <input name ="from_name" type="text" placeholder="Your full name" />
                    <input name ="subject" type="text" placeholder="Subject" />
                    <textarea name="message" placeholder="Message"></textarea>
                    <button type="Submit">Send</button>
                </form>
            </div>
        </div>
    )
}
