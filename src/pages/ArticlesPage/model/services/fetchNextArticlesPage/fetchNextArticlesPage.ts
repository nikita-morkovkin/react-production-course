import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { fetchArticleList } from '../../services/fetchArticlesList/fetchArticleList';
import {
    getArticlesPageHasMore,
    getArticlesPageIsLoading,
    getArticlesPageNumber,
} from '../../selectors/articlesPageSelector';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/fetchNextArticlesPage',
    async (_, thunkApi) => {
        const { getState, dispatch } = thunkApi;
        const pageNumber = getArticlesPageNumber(getState());
        const hasMore = getArticlesPageHasMore(getState());
        const isLoading = getArticlesPageIsLoading(getState());

        if (hasMore && !isLoading) {
            dispatch(articlesPageActions.setPage(pageNumber + 1));
            dispatch(fetchArticleList({
                page: pageNumber + 1,
            }));
        }
    },
);
