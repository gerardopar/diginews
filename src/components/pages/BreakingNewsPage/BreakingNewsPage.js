import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setBreakingNewsAsync } from '../../../actions/news';
//importing breaking news articles
import Spinner from '../../UI/Spinner/Spinner';
import ArticleLarge from '../../UI/Articles/ArticleLarge';
import ArticleSmall from '../../UI/Articles/ArticleSmall';
import ArticleXSmall from '../../UI/Articles/ArticleXSmall';

class BreakingNewsPage extends Component {

    constructor(props){
        super(props);
    }

    async componentDidMount(){
        this.props.setBreakingNewsAsync();
    }
    
    render(){
        return(
        <React.Fragment>
            {
                this.props.news.breakingNews.length !== 0 
                    ? <div className="layout">

                    <div className="page__article--wrap">
                        
                        {/* breaking news articles will be rendered below */}
                        {/*large article*/}
                        {
                            this.props.news.breakingNews.splice(0, 1).map((article, index) => {
                                return(<ArticleLarge
                                    key={index} 
                                    {...article}
                                    />);
                            })
                        }
                        {/*smaller articles*/}
                    <div className="page__box--two">
                        {
                            this.props.news.breakingNews.splice(0, 3).map((article, index) => {
                                return(<ArticleSmall
                                    key={index} 
                                    {...article}
                                    />);
                            })
                        }
                    </div>
                    </div>
                        {/*xsmaller article*/}
                    <div className="page__article--wrap--two">
                        {
                            this.props.news.breakingNews.splice(0, 2).map((article, index) => {
                                return(<ArticleXSmall
                                    key={index} 
                                    {...article}
                                    />);
                            })
                        }
                    </div>
                </div> : <Spinner />
            }
            
        </React.Fragment>
        )
    };
};

// mapping the redux state to the component
const mapStateToProps = (state) => {
    return {
        news: state.news
    };
};

// mapping redux actions to the component
const mapDispatchToProps = dispatch => {
    return {
        setBreakingNewsAsync: () => dispatch(setBreakingNewsAsync())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BreakingNewsPage);

