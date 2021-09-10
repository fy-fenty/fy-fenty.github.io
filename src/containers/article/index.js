import React from 'react';
import { useLocation } from 'react-router-dom';
import './Article.scss';

export default function ArticleContainer() {
  let { state } = useLocation();
  return (
    <div className="container article-wrap">
      <div className="article-title">{state.title}</div>
      <div className="article-author">{state.author} / {state.date}</div>
      <section>
        {state.content}
      </section>
    </div>
  )
}
