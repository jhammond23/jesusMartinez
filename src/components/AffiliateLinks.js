import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <form action="https://formsubmit.co/your-email@gmail.com" method="POST" className='contact-form'>
      <input type="hidden" name="_subject" value="New submission from Jesus Martinez Landing Page!"/>
      <input type="hidden" name="_autoresponse" value="We have received your message and will get back to you soon. - Jesus Martinez"/>

      <div>
        <label htmlFor='name'>Your Name:</label>
        <input
          id='name'
          type='text'
          name='name'
          placeholder='Your Name'
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor='email'>Your Email:</label>
        <input
          id='email'
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor='message'>Your Message:</label>
        <textarea
          id='message'
          name='message'
          placeholder='Your Message'
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button type='submit'>Send Message</button>
    </form>
  );
}

export default ContactForm;
