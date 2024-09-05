import React, { useCallback, useEffect, useRef, useState,} from 'react';
import debounce from 'lodash/debounce';
// import './CSS/ContactForm.css'
import { useLocation } from 'react-router-dom';

export const ContactForm = () => {
  const [email,setEmail]=useState("");
  const location=useLocation();
  const btnref=useRef(null);
  const [btn,setBtn]=useState(false);
  useEffect(()=>{
    if(location.state?.email){
      const mail=location.state.email;
      setEmail(mail);
      setUser({ ...user, email: mail });
    }
  },[location.state]);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone_no: "",
    message: ""
  });
  const handleInputs = (e) => {
    const { name, value } = e.target;
    if(name==="email"){
      setEmail(value);
    }
    setUser({ ...user, [name]: value });
  };
  useEffect(()=>{
    if(btn){
      btnref.current.classList.add('btn-show');
    }
    const timer=setTimeout(()=>{
      btnref.current.classList.remove('btn-show');
      setBtn(false);
    },4000);
    return ()=>clearTimeout(timer);
  },[btn]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtn(true);
    try {
      const response = await fetch(`${window.location.origin}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),                         
      });
      const data = await response.json();
      console.log(data);
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const debouncedSubmit = useCallback(debounce(handleSubmit, 5000), [user]);
  return (
    <form method='POST' onSubmit={handleSubmit}>
      <div className="container">
      <h2 className="form-title">Contact Us</h2>

        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="First Name" value={user.firstName} onChange={handleInputs} required />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="lastName" placeholder="Last Name" value={user.lastName} onChange={handleInputs}/>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Your Email" value={email} onChange={handleInputs} required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone no</label>
          <input type="string" id="phone" name="phone_no" placeholder="Enter phone no" value={user.phone_no} onChange={handleInputs} required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={user.message} onChange={handleInputs} required></textarea>
        </div>
        <button type="submit" className="submit-button" ref={btnref}>Send Messege</button>
      </div>
    </form>
  );
};
