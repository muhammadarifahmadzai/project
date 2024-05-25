// AboutPage.js

import React from 'react';
import Navbar from './components/navbar';

function AboutPage() {
  return (
   <div>
    <Navbar/>
     <div className="container">
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula vitae orci nec gravida.</p>
    </div>
   </div>
  );
}

export default AboutPage;
