import React from 'react';
import { connect } from 'react-redux';
import { setCryptoNewsAsync } from '../actions/news';

//importing breaking news articles
import ArticleLarge from './ArticleLarge';
import ArticleSmall from './ArticleSmall';
import ArticleXSmall from './ArticleXSmall';

class CryptoNewsPage extends React.Component {

    constructor(props){
        super(props);

    }

    async componentDidMount(){
        this.props.setCryptoNewsAsync();
    }
    
    render(){
        return(
            <div>
                <div className="page__article--wrap">
                    {/* breaking news articles will be rendered below */}
                    {/*large article*/}
                    {
                        this.props.news.cryptoNews.splice(0, 1).map((article, index) => {
                            return(<ArticleLarge
                                key={index} 
                                {...article}
                                />);
                        })
                    }
                    {/*smaller articles*/}
                <div className="page__box--two">
                    {
                        this.props.news.cryptoNews.splice(0, 3).map((article, index) => {
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
                        this.props.news.cryptoNews.splice(0, 2).map((article, index) => {
                            return(<ArticleXSmall
                                key={index} 
                                {...article}
                                />);
                        })
                    }
                </div>
            </div>
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
        setCryptoNewsAsync: () => dispatch(setCryptoNewsAsync())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CryptoNewsPage);

