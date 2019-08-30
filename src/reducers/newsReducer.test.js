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

    test('should return undefined for SET_BREAKING_NEWS', () => {
        const state = newsReducer(undefined, { type: 'SET_BREAKING_NEWS' });
        expect(state.breakingNews).toBe(undefined);
    });

    test('should return undefined for SET_CRYPTO_NEWS', () => {
        const state = newsReducer(undefined, { type: 'SET_CRYPTO_NEWS' });
        expect(state.cryptoNews).toBe(undefined);
    });

    test('should return undefined for SET_LIFE_NEWS', () => {
        const state = newsReducer(undefined, { type: 'SET_LIFE_NEWS' });
        expect(state.lifeNews).toBe(undefined);
    });

    test('should return undefined for SET_SPORTS_NEWS', () => {
        const state = newsReducer(undefined, { type: 'SET_SPORTS_NEWS' });
        expect(state.sportsNews).toBe(undefined);
    });

    test('should return undefined for SET_TECH_NEWS', () => {
        const state = newsReducer(undefined, { type: 'SET_TECH_NEWS' });
        expect(state.techNews).toBe(undefined);
    });
});
