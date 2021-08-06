import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser.js'

class ArticleList extends Component {
  
  
  render() {
    return (
      <div>

        {this.props.articles.map( (article, i) => <ArticleTeaser
        id={i}
        title={article.title}
        created_date={article.created_date}
        handleTitleClick={(articleID) => { console.log(articleID) }} />)}

      </div>
    );
  }
}

export default ArticleList;
