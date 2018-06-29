import React from 'react';
import PropTypes from "prop-types";

function NewsTickerItem (props) {
  return (
    <div className="news-ticker-item">
      <p><strong>{props.headline}</strong></p>
      <p>{props.blurb}</p>
      <p>{props.author}</p>
    </div>
  );
}

export default NewsTickerItem;
