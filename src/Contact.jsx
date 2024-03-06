import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function MyForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_1t0up1l', 'template_v0xx25p', form.current, {
        publicKey: 'LzWuUjVnImVl14RvS',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          // Reset the form after successful submission
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="formm">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" placeholder='farduswahid87@gmail.com' />
        <label>Recommendations to 'Fardus wahid'</label>
        <textarea name="message"  />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}

export default MyForm;

