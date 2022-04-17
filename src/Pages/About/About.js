import React from 'react';
import img from '../../Images/about/sazid.png';
import './About.css';

const About = () => {
    return (
        <div>
       <div class="container cus w-50 mx-auto">
       <div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Hi, I am Sazid Ahmed Nassir</h5>
        <p class="card-text">I  completed HTML, CSS, and javascript. I am currently learning React. My goal is to create a website like amazon, Airbnb & Daraz and become a full-stack web developer. I am trying to make some projects myself and practicing the programming hero module to become a good full-stack web developer and create some large projects myself.</p>
        
      </div>
    </div>
  </div>
</div>
</div>
        </div>
    );
};

export default About;