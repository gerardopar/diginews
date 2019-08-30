import { 
    setBreakingNews,
    setCryptoNews,
    setLifeNews,
    setSportsNews,
    setTechNews
} from './news';

describe('news redux actions', () => {
    let news;

    beforeEach(() => {
        news = [{ url: 'https://imageTestUrl.com' }, { text: 'some article text' }];
    });

    test('should return default values for setting breaking news', () => {
        const result = setBreakingNews();
        expect(result).toEqual({ type: 'SET_BREAKING_NEWS', breakingNews: [] });
    });

    test('should return values for setting breaking news', () => {
        const result = setBreakingNews(news);
        expect(result).toEqual({ type: 'SET_BREAKING_NEWS', breakingNews: news });
    });

    test('should return default values for setting crypto news', () => {
        const result = setCryptoNews();
        expect(result).toEqual({ type: 'SET_CRYPTO_NEWS', cryptoNews: [] });
    });

    test('should return values for setting crypto news', () => {
        const result = setCryptoNews(news);
        expect(result).toEqual({ type: 'SET_CRYPTO_NEWS', cryptoNews: news });
    });

    test('should return default values for setting life news', () => {
        const result = setLifeNews();
        expect(result).toEqual({ type: 'SET_LIFE_NEWS', lifeNews: [] });
    });

    test('should return values for setting life news', () => {
        const result = setLifeNews(news);
        expect(result).toEqual({ type: 'SET_LIFE_NEWS', lifeNews: news });
    });

    test('should return default values for setting sports news', () => {
        const result = setSportsNews();
        expect(result).toEqual({ type: 'SET_SPORTS_NEWS', sportsNews: [] });
    });

    test('should return values for setting sports news', () => {
        const result = setSportsNews(news);
        expect(result).toEqual({ type: 'SET_SPORTS_NEWS', sportsNews: news });
    });

    test('should return default values for setting tech news', () => {
        const result = setTechNews();
        expect(result).toEqual({ type: 'SET_TECH_NEWS', techNews: [] });
    });

    test('should return values for setting tech news', () => {
        const result = setTechNews(news);
        expect(result).toEqual({ type: 'SET_TECH_NEWS', techNews: news });
    });
});
