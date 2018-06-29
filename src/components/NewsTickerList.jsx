import React from 'react';
import NewsTickerItem from './NewsTickerItem';
import newsStories from './NewsData';

function NewsTickerList () {
  return (
    <div>
      <h3>News</h3>
      <div className="news">
        {newsStories.map((newsItem, index) =>
          <NewsTickerItem headline={newsItem.headline}
            author={newsItem.author}
            blurb={newsItem.blurb}
            key={index}/>
        )}
      </div>
    </div>
  );
}

export default NewsTickerList;
