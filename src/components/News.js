import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>This is News Componant
          <div className='container'>
            <h1>Top Headlines</h1>
            <div className="row">
                <div className="col md-3">
          <NewsItem title="item1" description="description of the news"/></div>
          <div className="col md-3">
          <NewsItem title="item1" description="description of the news"/></div>
          <div className="col md-3">
          <NewsItem title="item1" description="description of the news"/></div>
          
          </div>
          <div className="row">
                <div className="col md-3">
          <NewsItem title="item1" description="description of the news"/></div>
          <div className="col md-3">
          <NewsItem title="item1" description="description of the news"/></div>
          <div className="col md-3">
          <NewsItem title="item1" description="description of the news"/></div>
          
          </div>
          <div className="row">
                <div className="col md-3">
          <NewsItem title="item1" description="description of the news"/></div>
          <div className="col md-3">
          <NewsItem title="item1" description="description of the news"/></div>
          <div className="col md-3">
          <NewsItem title="item1" description="description of the news"/></div>
          
          </div>
          </div>
      </div>
    )
  }
}

export default News