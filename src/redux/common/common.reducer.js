import { commonActionTypes } from './common.types';

const INITIAL_STATE = {
    logo : null,
    copyrights: null,
    socialMedia : null,
    footerLogo : null,
    contactNo : null,
    email : null
}

const commonReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case commonActionTypes.SET_SITE_LOGO:
            return{
                ...state,
                logo : action.payload
            }
        case commonActionTypes.SET_COPYRIGHT:
            return{
                ...state,
                copyrights : action.payload
            }
        case commonActionTypes.SET_FOOTER_LOGO:
            return{
                ...state,
                footerLogo : action.payload
            }
        case commonActionTypes.SET_SOCIAL_MEDIA:
            return{
                ...state,
                socialMedia : action.payload
            }
        case commonActionTypes.SET_CONTACT_NO:
            return {
                ...state,
                contactNo : action.payload
            }
        case commonActionTypes.SET_EMAIL:
            return {
                ...state,
                email : action.payload
            }
        default:
            return state;
    }
}

export default commonReducer;