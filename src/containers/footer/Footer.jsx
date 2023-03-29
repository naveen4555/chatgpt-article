import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>
    {/* <div className="gpt3__footer-btn">
    </div> */}

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
      </div>
      {/* <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div> */}
      <div className="gpt3__footer-links_div">
        <h2 className="gradient__text">Links</h2>
        <h4><a href="#home">Home</a></h4>
        <h4><a href="#wgpt3">What is ChatGPT?</a></h4>
        <h4><a href="#possibility">Open AI</a></h4>
        <h4><a href="#features">Features</a></h4>
        <h4><a href="#blog">Library</a></h4>
      </div>
      <div className="gpt3__footer-links_div">
        <h2 className="gradient__text">Contact</h2>
        <h4><a href="https://github.com/naveen4555?tab=repositories">Github</a></h4>
        <h4><a href="https://www.instagram.com/naveen_4555_/">Instagram</a></h4>
        <h4>naveenkumarsenthil18@gmail.com</h4>
      </div>
    </div>

  </div>
);

export default Footer;
