import { commonActionTypes } from './common.types';

export const setSiteLogo = logo => ({
    type : commonActionTypes.SET_SITE_LOGO,
    payload : logo
});

export const setCopyrights = copyrights => ({
    type : commonActionTypes.SET_COPYRIGHT,
    payload : copyrights
});

export const setFooterLogo = footerLogo => ({
    type : commonActionTypes.SET_FOOTER_LOGO,
    payload : footerLogo
});

export const setSocialMedia = socialMedia => ({
    type : commonActionTypes.SET_SOCIAL_MEDIA,
    payload : socialMedia
});

export const setContactNo = contactNo => ({
    type : commonActionTypes.SET_CONTACT_NO,
    payload : contactNo
});

export const setEmail = email => ({
    type : commonActionTypes.SET_EMAIL,
    payload : email
});