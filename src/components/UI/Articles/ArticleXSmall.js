// importing modules
import React from 'react';
import PropTypes from 'prop-types';

const articleXSmall = props => (
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.10), rgba(66, 66, 66, 0.70)), url(${props.urlToImage})`
        }}
          className="page__article--xsmall"
        >
            <h3 className="page__article--title xsmall__text">{props.description}</h3>
        </a>
        );

export default articleXSmall;

articleXSmall.propTypes = {
    description: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
};

articleXSmall.defaultProps = {
    description: '',
    url: '',
    urlToImage: ''
};
