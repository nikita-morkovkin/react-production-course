import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleView } from 'entities/Article';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticleList } from '../fetchArticlesList/fetchArticleList';

jest.mock('../fetchArticlesList/fetchArticleList');

describe('fetchNextArticlesPage.test', () => {
    test('success test', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                error: undefined,
                hasMore: true,
                view: ArticleView.BIG,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArticleList).toHaveBeenCalledWith({
            page: 3,
        });
    });
    test('fetchNextArticlesPage not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                error: undefined,
                hasMore: false,
                view: ArticleView.BIG,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });

    test('fetchNextArticlesPage not called by isLoading param', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: true,
                error: undefined,
                hasMore: true,
                view: ArticleView.BIG,
            },
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toBeCalledTimes(2);
        expect(fetchArticleList).not.toHaveBeenCalled();
    });
});
