import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
 
  // {
  //   super();
  // }
 
  constructor() {
    super();
    this.state = {
      articles: []
    };
    // console.log(this.articles[0]);
  }
  async componentDidMount(){
    let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=ecf784631a0345e98edc2640c7f7365a';
    let result=await fetch(url);
    // console.log(result);
    let data=await result.json();
    // console.log(data);
    
    this.setState({articles:data.articles});
    return data;
  }
  render() {
    return (
      <div>
        <div className="container">
         
          <h1 style={{color:"white"}}>Top Headlines</h1>
          <div className="row">
          {this.state.articles.map((element)=>{
           return <div className="col md-3" key={element.url}>
           <NewsItem
             title={element.title}
             description={element.description}
             imageUrl={element.urlToImage?element.urlToImage:"https://images.news18.com/ibnlive/uploads/2022/03/2022-03-09t042643z_1_lynxmpei28066_rtroptp_4_markets-india-stocks-164681548916x9.jpg"}
             newsUrl={element.url}
           />
         </div>
          })}
          </div>
        </div>
      </div>
    );
  }
}

export default News;
