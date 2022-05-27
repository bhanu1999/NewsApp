import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl,author,time } = this.props;
    return (
      <div className="card my-3" style={{ width: "18rem", height: "550px" }}>
        <img
          src={imageUrl}
          style={{ height: "180px" }}
          className="card-img-top"
          alt="Img Not Found"
        />
        <div className="card-body">
          <h5 className="card-title">{title?title.slice(0,100):title}...</h5>
          <p className="card-text">{description?description.slice(0,140):description}...</p>
          <p><b>News By {author?author:"Unknown"} at {time}</b></p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            ReadMore
          </a>
        </div>
      </div>
    );
  }
}

export default NewsItem;
