import { createSelector } from 'reselect';

const selectHomeAPI = state => state.home;

export const selectMainBanner = createSelector(
    [selectHomeAPI],
    (home) => home.mainBanner
);

export const selectBannerText = createSelector(
    [selectHomeAPI],
    (home) => home.bannerText
);

export const selectAboutContent = createSelector(
    [selectHomeAPI],
    (home) => home.aboutContent
);

export const selectAboutImage = createSelector(
    [selectHomeAPI],
    (home) => home.aboutImage
);

export const selectThings = createSelector(
    [selectHomeAPI],
    (home) => home.things
);

export const selectTestimonials = createSelector(
    [selectHomeAPI],
    (home) => home.testimonials
);

export const selectClients = createSelector(
    [selectHomeAPI],
    (home) => home.clients
);