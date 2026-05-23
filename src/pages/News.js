import React from 'react';
import NewsCard from '../components/NewsCard';

function News() {
  const newsList = [];

  return (
    <div className="news-page">
      <h1>Latest News</h1>
      <div className="news-grid">
        {newsList.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}

export default News;
