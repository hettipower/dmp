import { createSelector } from 'reselect';

const selectServicesAPI = state => state.services;

export const selectServiceContents = createSelector(
    [selectServicesAPI],
    (services) => services.serviceContents
);