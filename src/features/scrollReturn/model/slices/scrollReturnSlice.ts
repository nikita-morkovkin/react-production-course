import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollReturnSchema } from 'features/scrollReturn';

const initialState: ScrollReturnSchema = {
    scroll: {},
};

const scrollReturnSlice = createSlice({
    name: 'scrollReturn',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }: PayloadAction<{ path: string, position: number }>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { reducer: scrollReturnReducer } = scrollReturnSlice;
export const { actions: scrollReturnActions } = scrollReturnSlice;
