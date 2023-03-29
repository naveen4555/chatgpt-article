import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">ChatGPT <br /> Records and Facts!</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} text="ChatGPT set a record for the fastest app to reach 100 million users, surpassing Google+, which took one year and two months to reach that milestone." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} text="300 billion words were fed into the ChatGPT system." />
        <Article imgUrl={blog03} text="The training dataset contains over 570 GB of text." />
        <Article imgUrl={blog04} text="It is trained on Microsoft’s Azure AI super computing technologies." />
        <Article imgUrl={blog05} text="OpenAI has a subscription-based paid version of ChatGPT" />
      </div>
    </div>
  </div>
);

export default Blog;
