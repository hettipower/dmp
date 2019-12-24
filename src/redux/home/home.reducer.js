import { homeActionTypes } from './home.types';

const INITIAL_STATE = {
    mainBanner : null,
    bannerText: null,
    aboutContent : null,
    aboutImage : null,
    things : null,
    testimonials : null,
    clients : null,
}

const homeReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case homeActionTypes.SET_MAIN_BANNER:
            return{
                ...state,
                mainBanner : action.payload
            }
        case homeActionTypes.SET_BANNER_TEXT:
            return{
                ...state,
                bannerText : action.payload
            }
        case homeActionTypes.SET_ABOUT_CONTENT:
            return{
                ...state,
                aboutContent : action.payload
            }
        case homeActionTypes.SET_ABOUT_IMAGE:
            return{
                ...state,
                aboutImage : action.payload
            }
        case homeActionTypes.SET_THINGS:
            return{
                ...state,
                things : action.payload
            }
        case homeActionTypes.SET_TESTIMONIALS:
            return{
                ...state,
                testimonials : action.payload
            }
        case homeActionTypes.SET_CLIENTS:
            return{
                ...state,
                clients : action.payload
            }
        default:
            return state;
    }
}

export default homeReducer;