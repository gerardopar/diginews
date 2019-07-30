export const setBreakingNewsAsync = () => { // async logic
    return (dispatch, getState) => {
        return fetch(`https://newsapi.org/v2/top-headlines?sources=cnn&apiKey=797ecd01a4354164974ef9414a36199d`, {
            method: 'GET'
        })
        .then((data) => {
            return data.json();
        })
        .then((news) => {
            console.log('breaking news', news);
            dispatch(setBreakingNews(news.articles)); 
        })
        .catch((err) => console.log(err));
    }
}

export const setBreakingNews = (news) => ({ // set breakingNews via the async logic
    type: 'SET_BREAKING_NEWS',
    breakingNews: [
        ...news
    ]
});

export const setCryptoNewsAsync = () => { // async logic
    return (dispatch, getState) => {
        return fetch(`https://newsapi.org/v2/top-headlines?sources=crypto-coins-news&apiKey=797ecd01a4354164974ef9414a36199d`, {
            method: 'GET'
        })
        .then((data) => {
            
            return data.json();
        })
        .then((news) => {
            console.log('crypto news', news);
            dispatch(setCryptoNews(news.articles)); 
        })
        .catch((err) => console.log(err));
    }
}

export const setCryptoNews = (news) => ({ // set cryptoNews via the async logic
    type: 'SET_CRYPTO_NEWS',
    cryptoNews: [
        ...news
    ]
});

export const setLifeNewsAsync = () => { // async logic
    return (dispatch, getState) => {
        return fetch(`https://newsapi.org/v2/top-headlines?sources=time&apiKey=797ecd01a4354164974ef9414a36199d`, {
            method: 'GET'
        })
        .then((data) => {
            return data.json();
        })
        .then((news) => {
            dispatch(setLifeNews(news.articles)); 
        })
        .catch((err) => console.log(err));
    }
}

export const setLifeNews = (news) => ({ // set lifeNews via the async logic
    type: 'SET_LIFE_NEWS',
    lifeNews: [
        ...news
    ]
});

export const setSportsNewsAsync = () => { // async logic
    return (dispatch, getState) => {
        return fetch(`https://newsapi.org/v2/top-headlines?sources=espn&apiKey=797ecd01a4354164974ef9414a36199d`, {
            method: 'GET'
        })
        .then((data) => {
            return data.json();
        })
        .then((news) => {
            dispatch(setSportsNews(news.articles)); 
        })
        .catch((err) => console.log(err));
    }
}

export const setSportsNews = (news) => ({ // set sportsNews via the async logic
    type: 'SET_SPORTS_NEWS',
    sportsNews: [
        ...news
    ]
});

export const setTechNewsAsync = () => { // async logic
    return (dispatch, getState) => {
        return fetch(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=797ecd01a4354164974ef9414a36199d`, {
            method: 'GET'
        })
        .then((data) => {
            return data.json();
        })
        .then((news) => {
            dispatch(setTechNews(news.articles)); 
        })
        .catch((err) => console.log(err));
    }
}

export const setTechNews = (news) => ({ // set techNews via the async logic
    type: 'SET_TECH_NEWS',
    techNews: [
        ...news
    ]
});
