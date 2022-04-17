import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='header mb-4' >
          <div className='container '>
            <nav class="navbar fixed-top  navbar-expand-lg navbar-light ">
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
        {/* <NavLink className={({ isActive }) => (isActive ? "nav-link text-primary" : "nav-link text-danger")}  to="#services"></NavLink> */}
        <a class="nav-link" href="home#services">Services</a>
        
          
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about">About</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/blog">Blog</Link>
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