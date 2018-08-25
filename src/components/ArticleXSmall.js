import React from 'react';

const ArticleXSmall = (props) => {
    return (
        <a href={props.articleUrl} target="_blank" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.10), rgba(66, 66, 66, 0.70)), url(${props.articleImage})`
        }} className="page__article--xsmall">
            <h3 className="page__article--title">{props.articleDescription}</h3>
        </a>
        );
    };

export default ArticleXSmall;
