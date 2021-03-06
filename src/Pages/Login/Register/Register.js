import React, { useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

  const [agree, setAgree]=useState(false)

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword((auth), { sendEmailVerification: true });

const navigate=useNavigate();
  const navigateLogin = () => {
    navigate('/login');
}

if(user){
  navigate('/');

}


const nameRef= useRef(' ');
  const emailRef= useRef(' ');
  const passwordRef=useRef(' ');
  
  const [token, setToken] = useState('');
  const handleSignupSubmit=(event)=>{
    event.preventDefault();
    const name=nameRef.current.value;
    const email= emailRef.current.value;
    const password=passwordRef.current.value;
    
    
    if(agree){
      createUserWithEmailAndPassword(email, password)
      console.log(email)
      const currentUser = {email: email, name:name};
      if(email){
        console.log(email)
        fetch(`http://localhost:5000/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                console.log('data inside useToken', data);
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
                
            })
        
      }
      
      navigate('/login');
    }
   
  
      }
    return (
        <div className="container w-50 mx-auto">
      <div className='mb-5 pb-5'>
            <form className='cus' onSubmit={handleSignupSubmit}>
            <h2>Please Register</h2>
            <div class="mb-5">
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
  
  <div class="mb-3 form-check">
    <input  onClick={()=> setAgree(!agree)} type="checkbox" class="form-check-input" id="terms"/>
    <label  className={`ps-2 ${agree?  'text-primary': 'text-danger'}`}   class="form-check-label" for="terms">Accept Terms and Conditions</label>
  </div>
  <button  disabled={!agree}
   type="submit" class="btn btn-primary">Register</button>
</form>
</div>
<div className='pt-5 mt-5 mb-5' ><p className='pt-5 mt-5'>Already have an account? <Link  to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p></div>
<SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;