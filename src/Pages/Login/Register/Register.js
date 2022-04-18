import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

const navigate=useNavigate();
  const navigateLogin = () => {
    navigate('/login');
}

if(user){
  navigate('/home');
}
const nameRef= useRef(' ');
  const emailRef= useRef(' ');
  const passwordRef=useRef(' ');

  const handleSignupSubmit=(event)=>{
    event.preventDefault();
    const name=nameRef.current.value;
    const email= emailRef.current.value;
    const password=passwordRef.current.value;
    createUserWithEmailAndPassword(email, password)
    console.log(name, email,password);
      }
    return (
        <div className="container w-50 mx-auto">
            <form className='cus' onSubmit={handleSignupSubmit}>
            <div class="mb-3">
    <label for="exampleInputName" class="form-label">Your Name</label>
    <input ref={nameRef}  type="namel" class="form-control" id="exampleInputName"/>
    
  </div>
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

<div  ><p className='pt-5 mt-5'>Already have an account? <Link  to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p></div>
        </div>
    );
};

export default Register;