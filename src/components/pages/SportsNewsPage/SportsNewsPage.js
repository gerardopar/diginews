// importing modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setSportsNewsAsync } from '../../../actions/news';
// importing components
import Spinner from '../../UI/Spinner/Spinner';
import ArticleLarge from '../../UI/Articles/ArticleLarge';
import ArticleSmall from '../../UI/Articles/ArticleSmall';
import ArticleXSmall from '../../UI/Articles/ArticleXSmall';

class SportsNewsPage extends Component {
    async componentDidMount() {
        this.props.setSportsNewsAsync();
    }
    
    render() {
        return (
        <React.Fragment>
            {
                this.props.news.sportsNews.length !== 0 
                    ? (
                    <div className="layout">
                    <div className="page__article--wrap">
                        {
                            this.props.news.sportsNews.splice(0, 1).map(article => (
                            <ArticleLarge
                              key={article.publishedAt} 
                              {...article}
                            />
                            ))
                        }
                        <div className="page__box--two">
                            {
                                this.props.news.sportsNews.splice(0, 3).map(article => (
                                <ArticleSmall
                                  key={article.publishedAt} 
                                  {...article}
                                />
                                ))
                            }
                        </div>
                    </div>
                <div className="page__article--wrap--two">
                    {
                        this.props.news.sportsNews.splice(0, 2).map(article => (
                    <ArticleXSmall
                      key={article.publishedAt} 
                      {...article}
                    />
                    ))
                    }
                </div>
                    </div>
                    ) : <Spinner />
            }
            
        </React.Fragment>
        );
    }
}

// # redux state
const mapStateToProps = state => ({
    news: state.news
});

// # redux actions
const mapDispatchToProps = dispatch => ({
    setSportsNewsAsync: () => dispatch(setSportsNewsAsync())
});

SportsNewsPage.propTypes = {
    news: PropTypes.arrayOf(PropTypes.any),
    setSportsNewsAsync: PropTypes.func
};

SportsNewsPage.defaultProps = {
    news: [],
    setSportsNewsAsync: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(SportsNewsPage);
