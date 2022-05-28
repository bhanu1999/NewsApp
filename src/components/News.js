import React, { Component } from "react";
import NewsItem from "./NewsItem";
import SpinnerComp from "./SpinnerComp";
import PropTypes from "prop-types";
export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "Sports",
  };
  static propTypes = {
    country: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  updateNews = async () => {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=ecf784631a0345e98edc2640c7f7365a&page=${this.state.page}&pagesize=${this.props.pageSize}&country=${this.props.country}`;
    let result = await fetch(url);
    let data = await result.json();

    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false,
    });
  };
  async componentDidMount() {
    this.updateNews();
  }
  handleNextClick = async () => {
    await this.setState({
      page: this.state.page + 1,
    });
    this.updateNews();
  };
  handlePrevClick = async () => {
    await this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };

  render() {
    return (
      <div>
        <div className="container">
          {this.state.loading && <SpinnerComp />}
          {/* {!this.state.loading &&  <h1 className="text-center" style={{ color: "white" }}>NewsPigeon-The News Carrier</h1>} */}
          {!this.state.loading && (
            <h1 className="text-center" style={{ color: "white" }}>
              News Pigeon - Top Headlines
            </h1>
          )}
          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
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
                      author={element.author}
                      time={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        {!this.state.loading && (
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              className="btn-dark btn"
              onClick={this.handlePrevClick}
              disabled={this.state.page <= 1}
            >
              &larr; Previous
            </button>
            <button
              disabled={
                this.state.page + 1 >
                Math.ceil(this.state.totalResults / this.props.pageSize)
              }
              type="button"
              className="btn-dark btn"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default News;
