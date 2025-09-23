import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => {
    return state.articleDetailsComments?.isLoading;
};

export const getArticleCommentsError = (state: StateSchema) => {
    return state.articleDetailsComments?.error;
};
