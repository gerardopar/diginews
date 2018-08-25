import React from 'react';

//importing breaking news articles
import ArticleLarge from './ArticleLarge';
import ArticleSmall from './ArticleSmall';
import ArticleXSmall from './ArticleXSmall';


class SportsNewsPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
                //large article
            articleDescriptionLarge: '',
            articleImageLarge: '',
            articleUrlLarge: '',
            articleTitleLarge: '',
                //small article--one
            articleDescriptionSOne: '',
            articleImageSOne: '',
            articleUrlSOne: '',
                //small article--two
            articleDescriptionSTwo: '',
            articleImageSTwo: '',
            articleUrlSTwo: '',
                //small article--three
            articleDescriptionSThree: '',
            articleImageSThree: '',
            articleUrlSThree: '',
                //xsmall article--one
            articleDescriptionXSOne: '',
            articleImageXSOne: '',
            articleUrlXSOne: '',
                //xsmall article--two
            articleDescriptionXSTwo: '',
            articleImageXSTwo: '',
            articleUrlXSTwo: '',
        };
    }

    async componentDidMount(){
        
    
        const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=espn&apiKey=797ecd01a4354164974ef9414a36199d`);

        if(response.status === 200){
            const data = await response.json();

            this.setState(() => ({
                articleDescriptionLarge: data.articles[0].description,
                articleUrlLarge: data.articles[0].url,
                articleImageLarge: data.articles[0].urlToImage,
                articleTitleLarge: data.articles[0].title,

                articleTitleSOne: data.articles[1].title,
                articleUrlSOne: data.articles[1].url,
                articleImageSOne: data.articles[1].urlToImage,

                articleTitleSTwo: data.articles[2].title,
                articleUrlSTwo: data.articles[2].url,
                articleImageSTwo: data.articles[2].urlToImage,

                articleTitleSThree: data.articles[3].title,
                articleUrlSThree: data.articles[3].url,
                articleImageSThree: data.articles[3].urlToImage,

                articleDescriptionXSOne: data.articles[4].description,
                articleUrlXSOne: data.articles[4].url,
                articleImageXSOne: data.articles[4].urlToImage,

                articleDescriptionXSTwo: data.articles[5].description,
                articleUrlXSTwo: data.articles[5].url,
                articleImageXSTwo: data.articles[5].urlToImage
            }));
    
        } else {
            throw new Error('unable to fetch breaking news');
        }
    }
    
    render(){
        return(
            <div>
                <div className="page__article--wrap">
                    {/* breaking news articles will be rendered below */}
                    {/*large article*/}
                    
                    {<ArticleLarge 
                    articleDescription={this.state.articleDescriptionLarge} 
                    articleImage={this.state.articleImageLarge}
                    articleUrl={this.state.articleUrlLarge}
                    articleTitle={this.state.articleTitleLarge}/>}
                    
                    {/*smaller article*/}
                    <div className="page__box--two">

                    {<ArticleSmall 
                    articleTitle={this.state.articleTitleSOne} 
                    articleImage={this.state.articleImageSOne}
                    articleUrl={this.state.articleUrlSOne}/>}

                    {<ArticleSmall 
                    articleTitle={this.state.articleTitleSTwo} 
                    articleImage={this.state.articleImageSTwo}
                    articleUrl={this.state.articleUrlSTwo}/>}
                    
                    {<ArticleSmall 
                    articleTitle={this.state.articleTitleSThree} 
                    articleImage={this.state.articleImageSThree}
                    articleUrl={this.state.articleUrlSThree}/>}

                    </div>

                </div>

                <div className="page__article--wrap--two">
                    
                    {<ArticleXSmall 
                    articleDescription={this.state.articleDescriptionXSOne} 
                    articleImage={this.state.articleImageXSOne}
                    articleUrl={this.state.articleUrlXSOne}/>}
            
                    {<ArticleXSmall
                    articleDescription={this.state.articleDescriptionXSTwo}
                    articleImage={this.state.articleImageXSTwo}
                    articleUrl={this.state.articleUrlXSTwo}/>}
                
                </div>
            </div>
        )
    };
};

export default SportsNewsPage;

