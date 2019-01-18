import React from 'react';

const ArticleLarge = (props) => {
    
    return (
        <a href={props.url} target="_blank" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.10), rgba(66, 66, 66, 0.70)), url(${props.urlToImage})`
        }} className="page__box--one">
            <h1 className="page__article--title">{props.title}</h1>
            <p className="page__article--text">{props.description}</p>
        </a>
        );
    };

export default ArticleLarge;