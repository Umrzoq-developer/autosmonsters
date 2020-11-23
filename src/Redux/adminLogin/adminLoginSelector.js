import {createSelector} from "reselect";

const admin = state => state.admin;

export const adminLoginBeginMine = createSelector(
    [admin],
    state => state.adminLoginBegin
);

export const adminLoginSuccessMine = createSelector(
    [admin],
    state => state.adminLoginSuccess
);

export const adminLoginFailMine = createSelector(
    [admin],
    state => state.adminLoginFail
)

export const addAdminLoginFailMine = createSelector(
    [admin],
    state => state.addAdminLoginFail
);

export const addAdminLoginSuccessMineSecond = createSelector(
    [admin],
    state => state.addAdminLoginSuccess
);

export const addAdminLoginBeginMine = createSelector(
    [admin],
    state => state.addAdminLoginBegin
);