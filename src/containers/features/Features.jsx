import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Research',
    text: 'Chat GPT 4 can help students conduct research by answering questions and providing relevant information.',
  },
  {
    title: 'Language Translation',
    text: 'This can help students translate text and phrases from one language to another.',
  },
  {
    title: 'Mental Health Support',
    text: 'Chat GPT 4 can provide mental health support by offering resources and advice on coping strategies and self-care.',
  },
  {
    title: 'Personal Development',
    text: 'Chat GPT 4 can help students with personal development, including self-improvement, goal-setting, and mindfulness.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
