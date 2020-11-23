import {createSelector} from 'reselect';

const vinNumber = (state) => state.vinNumber;

export const getVinDataMine = createSelector([vinNumber], (state) => state.getVinData);

export const myOwnVinMine = createSelector([vinNumber], (state) => state.myOwnVin);

export const getVinDataBeginMine = createSelector(
  [vinNumber],
  (state) => state.getVinDataBegin
);