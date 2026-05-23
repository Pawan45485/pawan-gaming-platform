import React from 'react';

function NewsCard({ news }) {
  return (
    <div className="news-card">
      <img src={news.image} alt={news.title} />
      <h3>{news.title}</h3>
      <p className="news-date">{news.date}</p>
      <p>{news.content}</p>
      <a href={`/news/${news.id}`}>View Full News</a>
    </div>
  );
}

export default NewsCard;
