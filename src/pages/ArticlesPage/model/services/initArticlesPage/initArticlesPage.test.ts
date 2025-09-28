import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { ArticleSortField, ArticleView } from 'entities/Article';
import { initArticlesPage } from './initArticlesPage';

describe('initArticlesPage.test', () => {
    test('initArticlesPage success', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                error: undefined,
                hasMore: false,
                view: ArticleView.BIG,
                _inited: false,
                search: '',
                sort: ArticleSortField.CREATED,
                order: 'asc',
            },
        });

        const searchParams = new URLSearchParams();

        await thunk.callThunk(searchParams);
        expect(thunk.dispatch).toBeCalledTimes(5);
    });
    test('initArticlesPage should not call anything if already inited', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                _inited: true,
            },
        });

        const searchParams = new URLSearchParams();

        await thunk.callThunk(searchParams);
        expect(thunk.dispatch).toBeCalledTimes(2);
    });
});
