import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import github from '../../../../src/Images/social/github.png';
import google from '../../../../src/Images/social/google.png';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate=useNavigate()
    let errorElement;
    if (error || error1) {
        
        errorElement=  <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
          </div>
        
      }

      if(user || user1){
          navigate('/home')
      }
    return (
        <div>
                 <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                             onClick={()=>{signInWithGoogle()}}
                    className='btn btn-light w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                
                <button
                    onClick={()=>{signInWithGithub()}}
                    className='btn btn-light w-50 d-block mx-auto mb-5'>
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;