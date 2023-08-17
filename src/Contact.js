import React from "react";


export default function Contact() {
    return (
        <div className="contact-container">
            <form className="contact-form" action="https://formsubmit.co/caogiahuy615@gmail.com" method="POST">
                <input type="hidden" name="_subject" value="New email"/>
                <input type="hidden" name="_captcha" value="true"/>
                <input className="input-field" type="text" name="name" placeholder="Name" required/>
                <input className="input-field" type="email" name="email" placeholder="Email Address" required />
                <textarea className="input-field" name="message" placeholder="Write your message here" required />
                <button className="submit-button" type="submit">Send</button>
            </form>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.047180565149!2d106.66871947554358!3d10.807698489342965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529214f9b9d29%3A0x6083a6f306da8e76!2zMTIyIMSQLiBQaOG7lSBRdWFuZywgUGjGsOG7nW5nIDksIFBow7ogTmh14bqtbiwgVGjDoG5oIHBo4buRIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1692254522927!5m2!1sen!2s"
                    width="100%"
                    height="300"
                    title="Google Maps"
                    frameBorder="0"
                    style={{ border: "0" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}
