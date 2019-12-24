import { homeActionTypes } from './home.types';

export const setMainBanner = mainBanner => ({
    type : homeActionTypes.SET_MAIN_BANNER,
    payload : mainBanner
});

export const setBannerText = bannerText => ({
    type : homeActionTypes.SET_BANNER_TEXT,
    payload : bannerText
});

export const setAboutContent = aboutContent => ({
    type : homeActionTypes.SET_ABOUT_CONTENT,
    payload : aboutContent
});

export const setAboutImage = aboutImage => ({
    type : homeActionTypes.SET_ABOUT_IMAGE,
    payload : aboutImage
});

export const setThings = things => ({
    type : homeActionTypes.SET_THINGS,
    payload : things
});

export const setTestimonials = testimonials => ({
    type : homeActionTypes.SET_TESTIMONIALS,
    payload : testimonials
});

export const setClients = clients => ({
    type : homeActionTypes.SET_CLIENTS,
    payload : clients
});