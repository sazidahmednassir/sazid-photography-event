import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css';

const Login = () => {

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const navigateRegister = () => {
    navigate('/register');
}

  const emailRef= useRef(' ');
  const passwordRef=useRef(' ');

  const handleSubmit=(event)=>{
event.preventDefault();
const email= emailRef.current.value;
const password=passwordRef.current.value;
signInWithEmailAndPassword(email, password)
console.log(email,password);
  }

  if(user){
    navigate('/home');
  }
    return (
      <div className='container w-50 mx-auto '>
     <form className='cus'  onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input ref={emailRef} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input ref={passwordRef} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

<div><p>New to Genius Car? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p></div>

              
        </div>
    );
};

export default Login;