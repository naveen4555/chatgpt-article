import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">Active users of ChatGPT</h1>
      <p> ChatGPT has more than 100 million users within the first two months of its launch and has more than 13 million daily visitors as of 2023. In January 2023, ChatGPT crossed 100 million users, making it the fastest-growing consumer application in a short period of time.</p>
    </div>
  </div>
);

export default Possibility;
