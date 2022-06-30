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
          <button className="btn btn--white">KNOW MORE</button>
          </Fade>
        </div>
      </section>
    </>
  )
};
export default ComingSoon;