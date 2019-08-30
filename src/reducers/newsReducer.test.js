import newsReducer from './newsReducer';

describe('news reducer', () => {
    test('should setup default state', () => {
        const state = newsReducer(undefined, { type: '@@INIT' });
        const defaultState = {
            breakingNews: [],
            cryptoNews: [],
            lifeNews: [],
            sportsNews: [],
            techNews: []
        };
        expect(state).toEqual(defaultState);
    });
});
