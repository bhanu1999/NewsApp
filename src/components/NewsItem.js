import React from "react";

const  NewsItem=(props) =>{
 
    let { title, description, imageUrl, newsUrl, author, time, source } =
      props;
    return (
      <div className="card my-3" style={{ width: "18rem", height: "550px" }}>
        <div
            style={{  display: "flex", justifyContent: "flex-end",position:'absolute',right: "0", }}
          >
            <span className="badge rounded-pill bg-success">{source}</span>
          </div>
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
          
        </div>
      </div>
    );
  
}

export default NewsItem;
