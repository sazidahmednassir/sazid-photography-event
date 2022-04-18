import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='container'>
            
            <footer class="bg-light text-center text-lg-start">

  <div class="text-center p-3" >
    © 2020 Copyright: {year} Sazid Photography Event
   
  </div>
  
</footer>

 
        </div>
    );
};

export default Footer;