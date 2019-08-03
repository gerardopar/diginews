// importing modules
import React from 'react';
import PropTypes from 'prop-types';

const articleLarge = props => (
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.10), rgba(66, 66, 66, 0.70)), url(${props.urlToImage})`
        }}
          className="page__box--one"
        >
            <h1 className="page__article--title">{props.title}</h1>
            <p className="page__article--text">{props.description}</p>
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
