import { signOut } from 'firebase/auth';
import React from 'react';
import { NavLink } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';

const Header = () => {
  const [user]=useAuthState(auth);

  const handleSignOut = () =>{
    signOut(auth);
}
  return (
    <div className='header mb-4' >
    <div className='container '>
      <nav class="navbar  fixed-top navbar-expand-lg navbar-light bg-light ">
<div class="container-fluid">

<Link class="navbar-brand text-primary fs-5" to="/">Sazid Photography Event</Link>
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav ms-auto mb-2 mb-lg-0">
  <li class="nav-item">
  
  <Link class="nav-link " to="/">Home</Link>
   
  </li>
  <li class="nav-item">

  <NavLink href="home#services">Services</NavLink>
  

  </li>
  <li class="nav-item">
 
    <Link class="nav-link" to="/about" >About</Link>
  </li>
  <li class="nav-item">
    
    <Link class="nav-link" to="/blog" >Blog</Link>
  </li>
  <li class="nav-item">
    {
      user? 
      <button className='btn btn-danger text-decoration-none' onClick={handleSignOut}>sign out</button>
    :
    <Link class="nav-link" to="/login" >Login</Link>
}
  </li>

 

</ul>

</div>
</div>
</nav>
</div>
</div>
  );
};

export default Header;