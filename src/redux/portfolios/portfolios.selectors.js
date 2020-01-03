import { createSelector } from 'reselect';

const selectPortfolioAPI = state => state.portfolios;

export const selectPortfolios = createSelector(
    [selectPortfolioAPI],
    (portfolios) => portfolios.portfolios
);

export const selectHomePortfolio = createSelector(
    [selectPortfolioAPI],
    (portfolios) => portfolios.portfolios.filter( portfolio => portfolio.showHome === true ).filter((item , idx) => idx < 1)
);