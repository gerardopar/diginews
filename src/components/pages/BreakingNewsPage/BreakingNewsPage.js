// importing modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setBreakingNewsAsync } from '../../../actions/news';
// importing components
import Spinner from '../../UI/Spinner/Spinner';
import ArticleLarge from '../../UI/Articles/ArticleLarge';
import ArticleSmall from '../../UI/Articles/ArticleSmall';
import ArticleXSmall from '../../UI/Articles/ArticleXSmall';

class BreakingNewsPage extends Component {
    async componentDidMount() {
        this.props.setBreakingNewsAsync();
    }
    
    render() {
        return (
        <React.Fragment>
            {
                this.props.news.breakingNews.length !== 0 
                    ? (
                    <div className="layout">
                    <div className="page__article--wrap">
                        {
                            this.props.news.breakingNews.splice(0, 1).map(article => (
                            <ArticleLarge
                              key={article.publishedAt} 
                              {...article}
                            />
                            ))
                        }
                        <div className="page__box--two">
                            {
                                this.props.news.breakingNews.splice(0, 3).map(article => (
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
                        this.props.news.breakingNews.splice(0, 2).map(article => (
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
    setBreakingNewsAsync: () => dispatch(setBreakingNewsAsync())
});

BreakingNewsPage.propTypes = {
    news: PropTypes.arrayOf(PropTypes.any),
    setBreakingNewsAsync: PropTypes.func
};

BreakingNewsPage.defaultProps = {
    news: [],
    setBreakingNewsAsync: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(BreakingNewsPage);
