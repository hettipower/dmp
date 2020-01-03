import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';

import { selectPortfolios } from '../../redux/portfolios/portfolios.selectors';

import './best-work.styles.scss';

const BestWork = ({ portfolios }) => {

    const homePortfolio = (portfolios) ? portfolios.filter( portfolio => portfolio.showHome === true ).filter((item , idx) => idx < 1) : '';

    return(
        <div className="bestWorkWrap">
            <h5 className="text-center">We are really good at what we do</h5>
            <h2 className="text-center">Have a look at some of our best work</h2>
            <p className="text-center"><Link to="/work" className="showMeMore">show me more</Link></p>
            {
                (homePortfolio) ?
                <div className="portfolioWrap d-flex flex-wrap justify-content-between">
                    <div className="imgWrap">
                        <img src={homePortfolio[0].frontImage} alt={homePortfolio[0].title}/>
                    </div>
                    <div className="contentWrap">
                        <div className="type">{homePortfolio[0].category}</div>
                        <h3 className="name">{homePortfolio[0].title}</h3>
                        <div className="smallContent">{homePortfolio[0].smallContent}</div>
                        <div className="btnWrap">
                            <a className="btn website" href={homePortfolio[0].website} target="_blank" rel="noopener noreferrer">Visit Website</a>
                            <span className="btn contact">Im Impressed</span>
                        </div>
                    </div>
                </div>
                : ''
            }            
        </div>
    )
};

const mapStateToProps = createStructuredSelector({
    portfolios : selectPortfolios,
});

export default connect(mapStateToProps)(BestWork);