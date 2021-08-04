import React from 'react';
import './Article.scss';
import Arti from '../../assets/images/arti.jpg';

export default function Article(props) {
  const { data } = props;
  const { title, author, content } = data;
  return (
    <div className="article-item">
      <div className="image-wrap"><img src={Arti} /></div>
      <div className="content-wrap">
        <div className="content-item title">{title} - {author}</div>
        <div className="content-item">{content}</div>
      </div>
    </div>
  )
}
