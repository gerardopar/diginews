import React from 'react';

const ArticleLarge = (props) => {
    
    return (
        <a href={props.articleUrl} target="_blank" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.10), rgba(66, 66, 66, 0.70)), url(${props.articleImage})`
        }} className="page__box--one">    
            <h1 className="page__article--title">{props.articleTitle}</h1>
            <p className="page__article--text">{props.articleDescription}</p>
        </a>
        );
    };

export default ArticleLarge;