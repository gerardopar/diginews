import React from 'react';
import newsApiLogo from '../../../assets/img/news-api-logo.png';

const Footer = () => (
    <div>
        <div className="footer">
            <div className="footer__img--wrap">
                <a className="footer__link" href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">
                    <img src={newsApiLogo} placeholder="news api logo" className="footer__img" alt="news api logo" />
                </a>
            </div>
            <div>
                <h5 className="footer__title">
                POWERED BY
                {' '}
                <a className="footer__link" href="https://newsapi.org/" target="_blank" rel="noopener noreferrer">NEWS API</a>
                </h5>
            </div>
            <div>
                <h5 className="footer__title">2020&copy; digi news All Rights Reserved</h5>
            </div>
        </div>
    </div>
);

export default Footer;
