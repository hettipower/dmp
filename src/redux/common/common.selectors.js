import { createSelector } from 'reselect';

const selectCommonAPI = state => state.commonParams;

export const selectSiteLogo = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.logo
);

export const selectFooterLogo = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.footerLogo
);

export const selectSocialMedia = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.socialMedia
);

export const selectCopyrights = createSelector(
    [selectCommonAPI],
    (commonParams) => commonParams.copyrights
);