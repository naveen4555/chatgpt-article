import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is ChatGPT" text="ChatGPT is a natural language processing tool driven by AI technology that allows you to have human-like conversations and much more with the chatbot. The language model can answer questions and assist you with tasks like composing emails, essays, and code." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Microsoft" text="Elon Musk has disowned OpenAI, the nonprofit he helped launch that is responsible for AI sensation ChatGPT. Microsoft is now effectively controlling the company." />
      <Feature title="Origin" text="ChatGPT was launched on November 30, 2022, by San Francisco–based OpenAI, the creator of DALL. E 2 and Whisper AI. The service was launched as initially free to the public, with plans to monetize the service later. By December 4, 2022, ChatGPT already had over one million users." />
      <Feature title="What is openAI" text="The OpenAI API can be applied to virtually any task that involves understanding or generating natural language, code, or images. We offer a spectrum of models with different levels of power suitable for different tasks, as well as the ability to fine-tune your own custom models." />
    </div>
  </div>
);

export default WhatGPT3;
