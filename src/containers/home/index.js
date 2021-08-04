import React, { Component } from "react";
import { connect } from 'react-redux';
import Article from '../../components/article';
import { fetch as fetchArticle } from '../../store/article';
import './HomeContainer.scss';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchArticle([{
      title: '标题',
      author: '作者',
      content: '这是文章的标题。'
    }]);
  }

  render() {
    const { list } = this.props;
    return (
      <div className="article-list">
        {list.map(article => <Article key={article.title} data={article} />)}
      </div>
    )
  }
}

const mapStateToProps = ({ article: { list } }) => {
  return { list }
}

const mapDispatchToProps = {
  fetchArticle,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
