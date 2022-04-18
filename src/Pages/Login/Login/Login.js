import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css';


const Login = () => {

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail( auth );
  const navigate = useNavigate();

  let errorElement;
  if (error ) {
        
    errorElement=  
        <p className='text-danger  py-5'>Error: {error?.message} </p>
      
    
  }

  const location=useLocation()
  let from = location.state?.from?.pathname || "/";

  const navigateRegister = () => {
    navigate('/register');
}

const resetPassword= async ()=>{
  const email= emailRef.current.value;
  await sendPasswordResetEmail(email);
  toast('Sent email');
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
    navigate(from, { replace: true });
  }
    return (
      <div className='container w-50 mx-auto '>
     <form className='cus'  onSubmit={handleSubmit}>
     <h2>Please Login</h2>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input ref={emailRef} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input ref={passwordRef} type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Login</button>
</form>
{errorElement}
<div className='pt-5'>
  <p>New to Sazid Photography Event? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
  <p>Forget Password? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</Link> </p>
</div>
<SocialLogin></SocialLogin>
<ToastContainer />
              
        </div>
    );
};

export default Login;