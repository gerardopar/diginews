//default reducer state:
const newsDefaultstate = {
  breakingNews: [],
  cryptoNews: [],
  lifeNews: [],
  sportsNews: [],
  techNews: []
}

//news reducer:
const newsReducer = (state = newsDefaultstate, action) => {
    switch (action.type) {

      case 'SET_BREAKING_NEWS':
        return {
            ...state,
            breakingNews: [...action.breakingNews]
        };

      case 'SET_CRYPTO_NEWS':
        return {
            ...state,
            cryptoNews: [...action.cryptoNews]
        };

      case 'SET_LIFE_NEWS':
        return {
            ...state,
            lifeNews: [...action.lifeNews]
        };

      case 'SET_SPORTS_NEWS':
        return {
            ...state,
            sportsNews: [...action.sportsNews]
        };

      case 'SET_TECH_NEWS':
        return {
            ...state,
            techNews: [...action.techNews]
        };

      default:
        return state;
    }
  };

  export default newsReducer;