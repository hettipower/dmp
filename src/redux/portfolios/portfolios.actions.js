import { portfoliosActionTypes } from './portfolios.types';

export const setPortfolios = portfolios => ({
    type : portfoliosActionTypes.SET_PORTFOLIOS,
    payload : portfolios
});