// importing modules
import React from 'react';
import PropTypes from 'prop-types';

const articleSmall = props => (
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.10), rgba(66, 66, 66, 0.70)), url(${props.urlToImage})`
        }}
          className="page__box--one"
        >    
            <h3 className="page__article--title small__text">{props.title}</h3>
        </a>
    );

export default articleSmall;

articleSmall.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    urlToImage: PropTypes.string,
};

articleSmall.defaultProps = {
    title: '',
    url: '',
    urlToImage: ''
};
