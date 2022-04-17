import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            
    
        <footer className='text-center mt-5 text-danger'>
            <p><small>copyright © {year} Sazid Photography Event</small></p>
        </footer>
        </div>
    );
};

export default Footer;