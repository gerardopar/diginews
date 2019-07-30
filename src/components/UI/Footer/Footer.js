import React from 'react';
import news_api_logo from '../../../assets/img/news-api-logo.png';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer__img--wrap">
                    <a className="footer__link" href="https://newsapi.org/" target="_blank">
                        <img src={news_api_logo} placeholder="news api logo" className="footer__img"/>
                    </a>
                </div>
                <div>
                    <h5 className="footer__title">POWERED BY <a className="footer__link" href="https://newsapi.org/" target="_blank">NEWS API</a></h5>
                </div>
                <div>
                    <h5 className="footer__title">2019&copy; digi news All Rights Reserved</h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;