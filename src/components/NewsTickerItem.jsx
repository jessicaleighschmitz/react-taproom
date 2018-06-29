import React from 'react';
import PropTypes from "prop-types";


function NewsTickerItem (props) {
  return (
    <div className="news-ticker-item">
      <div className="content">
      <p className="headline"><strong>{props.headline}</strong></p>
      <p className="blurb">{props.blurb}</p>
      <p className="author"><span className="italic">by {props.author}</span></p>

      <style jsx>{`
          .news-ticker-item{
            margin-bottom: 70px;
          }
          .headline{
            font-size: 1.8rem;
          }
          .italic{
            font-style: italic;
          }
            `}</style>
      </div>
      <hr></hr>
    </div>
  );
}

export default NewsTickerItem;
