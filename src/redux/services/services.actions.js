import { servicesActionTypes } from './services.types';

export const setServiceContents = serviceContents => ({
    type : servicesActionTypes.SET_SERVICES_CONTENTS,
    payload : serviceContents
});