import {createSelector} from 'reselect';

const addCar = state => state.addCar

export const failAddCarMine = createSelector(
    [addCar],
    state => state.failAddCar
);

export const beginAddCarMine = createSelector(
    [addCar],
    state => state.beginAddCar
)