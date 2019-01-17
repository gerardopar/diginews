import React from 'react';

const ArticleSmall = (props) => {
    return (
        <a href={props.url} target="_blank" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.10), rgba(66, 66, 66, 0.70)), url(${props.urlToImage})`
        }} className="page__box--one z-depth-5">    
            <h3 className="page__article--title small__text">{props.title}</h3>
        </a>
    );
};

export default ArticleSmall;