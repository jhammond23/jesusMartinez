import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className='contact-bg'>
      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-header-block1">
            <h1>Get In Touch</h1>
            <a href='mailto:hammerhammond23@gmail.com' className="contact-email">hammerhammond23@gmail.com</a>
          </div>
          <div className='contact-blurb'>Like what you see? Curious about how we can work together? Ask me anything. Tell me what you need. My team will get back to you within 48 hours.</div>
        </div>
        <form
          className="contact-form"
          action="https://formsubmit.co/hammerhammond23@gmail.com"
          method="POST"
        >
          {/* Remove the _next hidden field to use FormSubmit's default redirection */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New submission!" />
          <div className="form-field">
            <label htmlFor="name" className="form-label">Hi, I'm</label>
            <input type="text" id="name" name="name" placeholder="Name*" required className="form-input" />
          </div>
          <div className="form-field">
            <label htmlFor="company" className="form-label">and I work with</label>
            <input type="text" id="company" name="company" placeholder="Company*" required className="form-input" />
          </div>
          <div className="form-field">
            <label htmlFor="phone" className="form-label">You can reach me at</label>
            <input type="tel" id="phone" name="phone" placeholder="Phone*" required className="form-input" />
          </div>
          <div className="form-field">
            <label htmlFor="email" className="form-label">or at</label>
            <input type="email" id="email" name="email" placeholder="Email*" required className="form-input" />
          </div>
          <div className="form-field message-field">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea id="message" name="message" placeholder="Message*" required className="form-textarea"></textarea>
          </div>
          {/* The reCAPTCHA has been removed as FormSubmit will handle spam protection */}
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
