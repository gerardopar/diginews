import React from 'react';
 
const ArticleSmall = (props) => {
    return (
        <a href={props.articleUrl} target="_blank" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.10), rgba(66, 66, 66, 0.70)), url(${props.articleImage})`
        }} className="page__box--one">    
            <h3 className="page__article--title small__text">{props.articleTitle}</h3>
        </a>
    );
};

export default ArticleSmall;