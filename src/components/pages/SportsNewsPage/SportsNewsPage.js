import React from 'react';
import { connect } from 'react-redux';
import { setSportsNewsAsync } from '../../../actions/news';

//importing breaking news articles
import Spinner from '../../UI/Spinner/Spinner';
import ArticleLarge from '../../UI/Articles/ArticleLarge';
import ArticleSmall from '../../UI/Articles/ArticleSmall';
import ArticleXSmall from '../../UI/Articles/ArticleXSmall';

class SportsNewsPage extends React.Component {

    constructor(props){
        super(props);
    }

    async componentDidMount(){
        this.props.setSportsNewsAsync();
    }
    
    render(){
        return(
        <React.Fragment>
            {
                this.props.news.sportsNews.length !== 0
                    ? <div>
                    <div className="page__article--wrap">
                        {/* breaking news articles will be rendered below */}
                        {/*large article*/}
                        {
                            this.props.news.sportsNews.splice(0, 1).map((article, index) => {
                                return(<ArticleLarge
                                    key={index} 
                                    {...article}
                                    />);
                            })
                        }
                        {/*smaller articles*/}
                    <div className="page__box--two">
                        {
                            this.props.news.sportsNews.splice(0, 3).map((article, index) => {
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
                            this.props.news.sportsNews.splice(0, 2).map((article, index) => {
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
        setSportsNewsAsync: () => dispatch(setSportsNewsAsync())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SportsNewsPage);

