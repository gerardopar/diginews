// importing modules
import React from 'react';
import PropTypes from 'prop-types';

const articleLarge = ({
 url, urlToImage, title, description 
}) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.10), rgba(66, 66, 66, 0.70)), url(${urlToImage})`
  }}
    className="page__box--one"
  >
      <h1 className="page__article--title">{title}</h1>
      <p className="page__article--text">{description}</p>
  </a>
);

articleLarge.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
};

articleLarge.defaultProps = {
    description: '',
    title: '',
    url: '',
    urlToImage: ''
};

export default articleLarge;
