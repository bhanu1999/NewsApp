import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, time,source } = this.props;
    return (
      <div className="card my-3" style={{ width: "18rem", height: "550px" }}>
        <img
          src={imageUrl}
          style={{ height: "180px" }}
          className="card-img-top"
          alt="Img Not Found"
        />
        <div className="card-body">
          <h5 className="card-title">
            {title ? title.slice(0, 75) : title}...
          </h5>
          <p className="card-text">
            {description ? description.slice(0, 140) : description}...
          </p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on{" "}
              {new Date(time).toDateString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            ReadMore
          </a>
          <span className="position-absolute top-0  translate-middle badge rounded-pill bg-success" style={{left:"90%",zIndex:"1"}}>
    {source}
    <span className="visually-hidden">source information</span>
  </span>
        </div>
      </div>
    );
  }
}

export default NewsItem;
