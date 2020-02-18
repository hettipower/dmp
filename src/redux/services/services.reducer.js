import { servicesActionTypes } from './services.types';

const INITIAL_STATE = {
    serviceContents : null,
}

const serviceReducer = ( state = INITIAL_STATE , action ) => {
    switch (action.type) {
        case servicesActionTypes.SET_SERVICES_CONTENTS:
            return{
                ...state,
                serviceContents : action.payload
            }
        default:
            return state;
    }
}

export default serviceReducer;