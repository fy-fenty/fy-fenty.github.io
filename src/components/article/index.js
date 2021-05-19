import React from 'react';

export default function Article(props) {
  const { data } = props;
  const { title, author, content } = data;
  return (
    <div>
      <div>title: {title}</div>
      <div>author: {author}</div>
      <div>content: {content}</div>
    </div>
  )
}
