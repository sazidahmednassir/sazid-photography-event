import React from 'react';
import './Checkout.css';

const Checkout = () => {
    return (
        <div>
             <div className='container w-50 mx-auto '>
     <form className='cus pb-5 mb-5'    >
     <h2>Please CheckOut</h2>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>



              
        </div>
        </div>
    );
};

export default Checkout;