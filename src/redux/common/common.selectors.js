import { createSelector } from 'reselect';

const selectCommonAPI = state => state.common;

export const selectSiteLogo = createSelector(
    [selectCommonAPI],
    (common) => common.logo
);

export const selectFooterLogo = createSelector(
    [selectCommonAPI],
    (common) => common.footerLogo
);

export const selectSocialMedia = createSelector(
    [selectCommonAPI],
    (common) => common.socialMedia
);

export const selectCopyrights = createSelector(
    [selectCommonAPI],
    (common) => common.copyrights
);

export const selectContactNo = createSelector(
    [selectCommonAPI],
    (common) => common.contactNo
);

export const selectEmail = createSelector(
    [selectCommonAPI],
    (common) => common.email
);