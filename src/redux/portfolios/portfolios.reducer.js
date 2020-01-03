import { portfoliosActionTypes } from './portfolios.types';

const INITIAL_STATE = {
    portfolios : null,
}

const portfolioReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case portfoliosActionTypes.SET_PORTFOLIOS:
            return{
                ...state,
                portfolios : action.payload
            }
        default:
            return state;
    }
}

export default portfolioReducer;