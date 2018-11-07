import React from 'react';
import moment from 'moment';

//importing breaking news articles
import ArticleLarge from './ArticleLarge';
import ArticleSmall from './ArticleSmall';
import ArticleXSmall from './ArticleXSmall';

class TechNewsPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            largeArticles: [],
            smallArticles: [],
            xsmallArticles: []
        };
    }

    async componentDidMount(){
        
    
        const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=797ecd01a4354164974ef9414a36199d`);

        if(response.status === 200){
            const data = await response.json();

            // large article
            const large_article = {
                articleDescription: data.articles[0].description,
                articleUrl: data.articles[0].url,
                articleImage: data.articles[0].urlToImage,
                articleTitle: data.articles[0].title,
                articlePublished: moment(data.articles[0].publishedAt).format('MMM Do YYYY, h:mm:ss a')
            }

            // small articles
            const small_article1 = {
                articleTitle: data.articles[1].title,
                articleUrl: data.articles[1].url,
                articleImage: data.articles[1].urlToImage,
                id: 1
            }
            const small_article2 = {
                articleTitle: data.articles[2].title,
                articleUrl: data.articles[2].url,
                articleImage: data.articles[2].urlToImage,
                id: 2
            }
            const small_article3 = {
                articleTitle: data.articles[3].title,
                articleUrl: data.articles[3].url,
                articleImage: data.articles[3].urlToImage,
                id: 3
            }

            // xsmall articles
            const xsmall_article1 = {
                articleDescription: data.articles[4].description,
                articleUrl: data.articles[4].url,
                articleImage: data.articles[4].urlToImage,
                id: 1
            }

            const xsmall_article2 = {
                articleDescription: data.articles[5].description,
                articleUrl: data.articles[5].url,
                articleImage: data.articles[5].urlToImage,
                id: 2
            }

            this.setState(() => ({
                largeArticles: this.state.largeArticles.concat(large_article),
                smallArticles: this.state.smallArticles.concat(small_article1, small_article2, small_article3),
                xsmallArticles: this.state.xsmallArticles.concat(xsmall_article1, xsmall_article2)
            }));
    
        } else {
            throw new Error('unable to fetch breaking news');
        }
    }
    
    render(){
        return(
            <div>
                <div className="page__article--wrap">
                    {/* sports news articles will be rendered below */}
                    {/*large article*/}
                    {
                        this.state.largeArticles.map((article) => {
                            return(<ArticleLarge
                                key={article} 
                                {...article}
                                />);
                        })
                    }
                    {/*smaller articles*/}
                <div className="page__box--two">
                    {
                        this.state.smallArticles.map((article) => {
                            return(<ArticleSmall
                                key={article.id} 
                                {...article}
                                />);
                        })
                    }
                </div>
                </div>
                    {/*xsmaller article*/}
                <div className="page__article--wrap--two">
                    {
                        this.state.xsmallArticles.map((article) => {
                            return(<ArticleXSmall
                                key={article.id} 
                                {...article}
                                />);
                        })
                    }
                </div>
            </div>
        )
    };
};

export default TechNewsPage;

