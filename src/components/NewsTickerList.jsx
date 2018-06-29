import React from 'react';
import NewsTickerItem from './NewsTickerItem';
import newsStories from './NewsData';
import taps from '../assets/img/taps.jpg';

function NewsTickerList () {
  return (
    <div>
      <div className="brew-news">
        <h3>Craft Brew News</h3>
      </div>
      <div className="flex">
        <div className="news-section">
          <div className="news">
            {newsStories.map((newsItem, index) =>
              <NewsTickerItem headline={newsItem.headline}
                author={newsItem.author}
                blurb={newsItem.blurb}
                key={index}/>
            )}
          </div>
        </div>
        <div className="image">
          <img src={taps}/>
        </div>
      </div>
      <style jsx>{`
          h3{
            font-size: 3em;
            padding-left: 30px;
            padding-top: 20px;
          }
          .news{
            max-width: 1200px;
            margin: 40px 0;
            padding-left: 30px;
            max-width: 500px;
          }
          .flex{
            display: flex;
            justify-content: space-between;
            margin-bottom: 50px;
          }
          img{
            padding-right: 30px;
            padding-top: 80px;
          }
          .brew-news{
            background-color: #E48F3B;
            text-align: center;
            padding: 30px;
            color: #fff;
            margin-top:40px;
          }
          `}</style>
      </div>
    );
  }

export default NewsTickerList;
