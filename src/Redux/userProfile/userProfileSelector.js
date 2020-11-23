import {createSelector} from 'reselect';

const userProfile = state => state.userProfile;

export const userProfileDataMine = createSelector(
    [userProfile],
    state => state.userProfileData
);

export const detailDataMine = createSelector(
    [userProfile],
    state => state.detailData
);