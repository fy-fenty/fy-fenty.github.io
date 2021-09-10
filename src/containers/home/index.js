import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Article from '../../components/article';
import { fetch as fetchArticle } from '../../store/article';
import { useInfiniteScroll } from '../../hooks';
import './HomeContainer.scss';

function HomeContainer({ list, fetchArticle }) {
  console.log('rerender home');
  const [loading, setLoading] = useState(false)
  const loadData = () => {
    fetchArticle([{
      title: '标题',
      author: '作者',
      content: '这是简短的文章简介～～',
      date: '2021-12-12',
    },{
      title: '标题',
      author: '作者',
      content: '这是简短的文章简介～～',
      date: '2021-12-12',
    },{
      title: '标题',
      author: '作者',
      content: '这是简短的文章简介～～',
      date: '2021-12-12',
    },{
      title: '标题',
      author: '作者',
      content: '这是简短的文章简介～～',
      date: '2021-12-12',
    },{
      title: '标题',
      author: '作者',
      content: '这是简短的文章简介～～',
      date: '2021-12-12',
    },{
      title: '标题',
      author: '作者',
      content: '这是简短的文章简介～～',
      date: '2021-12-12',
    },{
      title: '标题',
      author: '作者',
      content: '这是简短的文章简介～～',
      date: '2021-12-12',
    }]);
  }
  useEffect(() => {
    if (list.length === 0) {
      loadData();
    }
  })

  useInfiniteScroll({
    offset: 80,
    callback: () => new Promise((res, rej) => {
      setLoading(true);
      setTimeout(() => {
        loadData();
        setLoading(false);
        res(true);
      }, 3000)
    })
  })

  return (
    <div className="article-list">
      {list && list.map((article, key) => <Link key={`${article.title}-${key}`} to={{
        pathname: '/article',
        state: article
      }}><Article data={article} /></Link>)}
      {loading && <div className="loading">Loading...</div>}
    </div>
  )
}

const mapStateToProps = ({ article: { list } }) => {
  return { list }
}

const mapDispatchToProps = {
  fetchArticle,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
