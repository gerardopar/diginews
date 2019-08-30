// # sync action
export const setBreakingNews = (news = []) => ({
    type: 'SET_BREAKING_NEWS',
    breakingNews: [...news]
});
// # async action
export const setBreakingNewsAsync = () => dispatch => fetch('https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=797ecd01a4354164974ef9414a36199d', {
        method: 'GET'
    })
    .then(data => data.json())
    .then((news) => {
        dispatch(setBreakingNews(news.articles)); 
    })
    .catch(err => console.log(err));

// # sync action
export const setCryptoNews = (news = []) => ({
    type: 'SET_CRYPTO_NEWS',
    cryptoNews: [
        ...news
    ]
});
// # async action
export const setCryptoNewsAsync = () => dispatch => fetch('https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=797ecd01a4354164974ef9414a36199d', {
        method: 'GET'
    })
    .then(data => data.json())
    .then((news) => {
        dispatch(setCryptoNews(news.articles)); 
    })
    .catch(err => console.log(err));

// # sync action
export const setLifeNews = (news = []) => ({ // set lifeNews via the async logic
    type: 'SET_LIFE_NEWS',
    lifeNews: [
        ...news
    ]
});
// # async action
export const setLifeNewsAsync = () => dispatch => fetch('https://newsapi.org/v2/top-headlines?sources=time&apiKey=797ecd01a4354164974ef9414a36199d', {
        method: 'GET'
    })
    .then(data => data.json())
    .then((news) => {
        dispatch(setLifeNews(news.articles)); 
    })
    .catch(err => console.log(err));

// # sync action
export const setSportsNews = (news = []) => ({ // set sportsNews via the async logic
    type: 'SET_SPORTS_NEWS',
    sportsNews: [
        ...news
    ]
});
// # async action
export const setSportsNewsAsync = () => dispatch => fetch('https://newsapi.org/v2/top-headlines?sources=espn&apiKey=797ecd01a4354164974ef9414a36199d', {
        method: 'GET'
    })
    .then(data => data.json())
    .then((news) => {
        dispatch(setSportsNews(news.articles)); 
    })
    .catch(err => console.log(err));

// # sync action
export const setTechNews = (news = []) => ({ // set techNews via the async logic
    type: 'SET_TECH_NEWS',
    techNews: [
        ...news
    ]
});
// # async action
export const setTechNewsAsync = () => dispatch => fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=797ecd01a4354164974ef9414a36199d', {
        method: 'GET'
    })
    .then(data => data.json())
    .then((news) => {
        dispatch(setTechNews(news.articles)); 
    })
    .catch(err => console.log(err));
