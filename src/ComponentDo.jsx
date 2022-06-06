import React from 'react';
import faker from 'faker'

const ComponentDo = (props) => {
  console.log({faker:faker});
  return(
    <div className="ui container comments">
    <div className="comment">
      <a href="/" className="avatar">
        <img  alt="avatar" src={faker.image.animals(50,50)} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className='date'>{props.date}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
    </div>
  );
};

export default ComponentDo;