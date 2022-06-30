import React, { useState } from 'react';
import "./ComingSoon.css";
import Fade from 'react-reveal/Fade';

const ComingSoon = () => {
  
  return (
    <>
      <section class="section_stories">
        <div className="section_content">
        <Fade bottom>
          <h1>Coming Soon</h1>
          <a href='https://dslegends.org'><button className="btn btn--white">KNOW MORE</button></a>
          </Fade>
        </div>
      </section>
    </>
  )
};
export default ComingSoon;