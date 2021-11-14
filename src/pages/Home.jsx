import React, { useState, useEffect } from "react";
import ArticleCard from "../components/ArticleCard";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "../assets/home.css";

function Home() {
  const [articlesList, setArticelsList] = useState([]);

  const fetchArticles = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=Apple&from=2021-11-12&sortBy=popularity&apiKey=877646ef686d49e89d2c799b9819f50a"
      )
      .then((result) => {
        setArticelsList(result.data.articles);
      })
      .catch((err) => {
        alert("Terjadi kesalahan pada server");
      });
  };

  const renderArticles = (val, id) => {
    return (
      <ArticleCard
        key={id}
        image={val.urlToImage}
        title={val.title}
        url={val.url}
        desc={val.description}
      />
    );
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="row">
      <div className="section">
        <h1>Popular Articles</h1>
      </div>
      <hr className="solid" />
      <div className="row">
        <div className="d-flex justify-content-center flex-wrap">
          {articlesList.map(renderArticles)}
        </div>
      </div>
    </div>
  );
}

export default Home;
