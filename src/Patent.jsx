import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import MyForm from './Contact.jsx'

function ParentComponent() {
    const [isFormVisible, setIsFormVisible] = useState(false);
  
    const handleClick = () => {
      setIsFormVisible(!isFormVisible);
    };
  
    return (
      <div>
        <button className='hide' onClick={handleClick}>
          {isFormVisible ? 'Demise🎶' : 'Recommend a music you want me to add..'}
        </button>
        {isFormVisible && <MyForm />}
      </div>
    );
  }
  
  export default ParentComponent;
