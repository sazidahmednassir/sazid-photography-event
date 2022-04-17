import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='cus'>
            <div class="container mt-3">
      <div class="card border-0 mb-3">
        
          <div class=" card-body ">
            <div class="card-body text-dark ">
              <h5 class="card-title text-danger  text-center">Difference between authorization and authentication?</h5>
              <p class="card-text">
              Authorization is the process of verifying that a user is who they say they are. This is usually done by checking their username and password against a database of authorized users. Authentication is the process of verifying that a user is who they say they are and that they have permission to access the requested resource. This is usually done by checking the user's credentials against a permissions database.
              </p>
            </div>
          </div>
          
        </div>
        <div class="card border-0 mb-3">
        
          <div class=" card-body">
            <div class="card-body text-dark ">
              <h5 class="card-title text-danger text-center">Why are you using firebase? What other options do you have to implement authentication?</h5>
              <p class="card-text">
              Firebase is a real time database that helps developers to easily synchronize data across devices. It also offers authentication and authorization features, which can be used to protect data and keep track of user activity. There are other options available for implementing authentication, such as using a traditional database, NativeScript, Oracle , AWS Amplify or developing your own authentication system. However, Firebase is easy to use and offers many features that are helpful for managing user data.
              </p>
            </div>
          </div>
        </div>
        <div class="card border-0 mb-3">
        
        <div class=" card-body ">
          <div class="card-body text-dark ">
            <h5 class="card-title text-danger  text-center"> What other services does firebase provide other than authentication?</h5>
            <p class="card-text">
            Firebase provides a variety of services for developers, including authentication, real-time database, cloud storage, and more. Authentication allows developers to create secure applications by verifying user identities. The real-time database allows developers to build applications that update data in real-time. Cloud storage provides developers with a way to store and access user data anywhere.</p>
          </div>
        </div>
        
      </div>
        </div>
        </div>
    );
};

export default Blog;