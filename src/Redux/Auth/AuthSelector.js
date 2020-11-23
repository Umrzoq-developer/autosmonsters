import {createSelector} from 'reselect';

const auth = (state) => state.auth;

export const beginLoginMine = createSelector([auth], (state) => state.beginLogin);

export const succesLoginMine = createSelector([auth], (state) => state.succesLogin);

export const failureLoginMine = createSelector([auth], (state) => state.failureLogin);

export const postsMine = createSelector([auth], (state) => state.posts);