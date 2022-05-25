import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=ecf784631a0345e98edc2640c7f7365a&page=1&pagesize=20";
    let result = await fetch(url);
    let data = await result.json();

    this.setState({ articles: data.articles ,totalResults:data.totalResults});
    //return data;
  }
   handleNextClick=async () =>{
    console.log(this.state.page+1);
    if(this.state.page+1>Math.ceil((this.state.totalResults)/20))
    {

    }
    else{
    let num=this.state.page+1;
    console.log(num);
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ecf784631a0345e98edc2640c7f7365a&page=${num}&pagesize=20`;
  let result = await fetch(url);
  let data = await result.json();
   this.setState({
     page:this.state.page+1,
     articles:data.articles,
   })}
  }
   handlePrevClick=async ()=> {
    console.log("prev buton clicked");
    let num=this.state.page-1;
    let url =`https://newsapi.org/v2/top-headlines?country=in&apiKey=ecf784631a0345e98edc2640c7f7365a&page=${num}&pagesize=20`;
  let result = await fetch(url);
  // console.log(result);
  let data = await result.json();
   this.setState({
     page:this.state.page-1,
     articles:data.articles,
   })
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1 className="text-center" style={{ color: "white" }}>NewsPigeon-The News Carrier</h1>
          <h1 style={{ color: "white" }}>Top Headlines</h1>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col md-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://images.news18.com/ibnlive/uploads/2022/03/2022-03-09t042643z_1_lynxmpei28066_rtroptp_4_markets-india-stocks-164681548916x9.jpg"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn-dark btn"
            onClick={this.handlePrevClick}
            disabled={this.state.page<=1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn-dark btn"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
